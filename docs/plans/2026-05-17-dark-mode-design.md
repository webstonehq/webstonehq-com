# Dark mode — design

**Date:** 2026-05-17
**Status:** Validated, ready for implementation plan

## Context & decision

The site is a faithful port of a Claude Design handoff that **deliberately shipped
a single state** (editorial aesthetic, light theme, magenta `#e64980` accent). Dark
mode and its tokens were intentionally dropped during the original brief.

This work **deliberately reverses that decision**: dark mode is now a wanted,
first-class feature. Decisions taken during brainstorming:

- **Trigger:** toggle + system default. Follow OS `prefers-color-scheme` until the
  user explicitly toggles; an explicit choice persists and then ignores the OS.
- **Inverse bands:** in dark mode the existing dark "inverse" bands (home
  "How we work", closing CTA) **flip to light** — they become the one light element.

## Architecture — token-value override, zero `dark:` variants

The site is fully token-driven: Tailwind v4 `@theme` in `src/routes/layout.css`
emits `--color-*` custom properties and compiles utilities (`bg-paper`, `text-ink`,
`bg-stone-100`, …) as `var(--color-*)` references. Redefining those variables under
a `.dark` scope flips the **entire site with no markup changes**.

```css
@custom-variant dark (&:where(.dark, .dark *));

.dark {
  --color-paper: …;  --color-ink: …;
  --color-line: …;   --color-line-strong: …;
  --color-muted: …;  --color-accent-ink: …;  --color-good: …;
  --color-stone-50 … --color-stone-900: …;   /* role-preserving */
}
```

`@custom-variant dark` is registered so `dark:` is *available* for anything the
token swap cannot express — none expected. The nav glass (`bg-paper/[0.78]`),
`::selection`, and reduced-motion rules all flip for free.

**Why the inverse bands work for free:** they are built as `bg-ink text-paper`.
Swapping the `--color-ink` / `--color-paper` *values* flips the bands to light
automatically and correctly. The only required refactor: literal
`text-white/[…]` opacities inside those bands → `text-paper/[…]` so muted-on-inverse
text flips coherently with the surface.

## Palette — role-preserving (not value-mirrored)

The stone scale is used *directionally* (low numbers = light surfaces, high numbers
= dark text), so it is mapped by **role**, not by mirroring numbers. Warm near-black
preserves the editorial warmth — no pure `#000`.

| Token | Light | Dark | Role |
|---|---|---|---|
| `--color-paper` | `#faf9f6` | `#100f0d` | page bg / text-on-inverse |
| `--color-ink` | `#0a0a09` | `#f5f3ef` | primary text / inverse-band bg |
| `--color-line` | `ink / .10` | `paper / .10` | hairline borders |
| `--color-line-strong` | `ink / .16` | `paper / .14` | stronger borders |
| `--color-muted` | `#6b6960` | `#a3a097` | secondary text |
| `--color-accent` | `#e64980` | `#e64980` | unchanged — brand fills/dots/underlines |
| `--color-accent-ink` | `#b32861` | `#ff85ad` | accent **text** (lighter for AA on dark) |
| `--color-good` | `#1f8a5b` | `#3ecf8e` | success (lifted for contrast) |
| `--color-stone-50` | `#f7f5f1` | `#171613` | faint raised surface |
| `--color-stone-100` | `#efece5` | `#1d1c18` | hover surface (nav/footer) |
| `--color-stone-200` | `#e3dfd5` | `#262420` | cards / inputs |
| `--color-stone-300` | `#c9c3b3` | `#33312b` | dividers / tints |
| `--color-stone-500` | `#8a8472` | `#7d7a70` | mid neutral / icons |
| `--color-stone-700` | `#44423a` | `#c4c1b6` | secondary nav/footer **text** |
| `--color-stone-900` | `#15140f` | `#f0eee9` | strong text |

`<meta name="theme-color">` flips `#faf9f6` → `#100f0d`.

These are calibrated starting points. Implementation includes a **WCAG AA contrast
pass** (target 4.5:1 body text, 3:1 large text / UI) and per-step role verification
against actual usage.

## Components & wiring

**`src/lib/theme.ts`** — the only logic, pure + testable:
- `type ThemePref = 'light' | 'dark' | 'system'`
- `resolveTheme(pref, systemPrefersDark): 'light' | 'dark'` — pure, unit-tested.
- `STORAGE_KEY = 'webstone-theme'`; `readPref()`, `writePref()`,
  `applyTheme(resolved)` (toggles `.dark` on `<html>`, updates `theme-color` meta).
- Tiny Svelte 5 rune store (`$state`) holding pref + resolved; a
  `matchMedia('(prefers-color-scheme: dark)')` listener re-resolves **only while
  pref is `'system'`**.

**Anti-FOUC** — inline synchronous `<script>` in `app.html <head>`, before the
stylesheet, no imports. Mirrors `resolveTheme`: reads `localStorage`, falls back to
`matchMedia`, sets `documentElement` `.dark` + `theme-color` meta before first
paint. `try/catch` for private-mode localStorage. This ~6-line duplication of the
resolve logic is unavoidable and is commented with a pointer to `theme.ts`.

**`src/lib/components/theme-toggle.svelte`** — kebab-case. A `<button>` with
sun/moon inline SVG (`stroke="currentColor"`, sized like nav links),
`aria-label` + `aria-pressed`, focus-visible ring on `accent`. Cycles light ⇄ dark
(initialized from system; first click writes an explicit pref). Reuses nav hover
utilities (`hover:bg-stone-100`, `rounded-lg`).

**`nav.svelte`** — insert `<ThemeToggle />` immediately before the `Book intro`
`<Btn>` in the existing `<nav>` flex row. No layout restructuring.

**Literal-white refactor** — `+page.svelte` and `eyebrow.svelte` only:
`text-white/[0.78|0.75|0.65|0.5|0.6]` → `text-paper/[…]`. ~6 occurrences,
grep-verified after.

## Testing

- Check `package.json` for a runner during planning. If Vitest present, add
  `src/lib/theme.test.ts` covering the `resolveTheme` truth table:
  `'light'→light`, `'dark'→dark`, `'system'+systemDark→dark`,
  `'system'+!systemDark→light`. Pure, fast, no DOM.
- If no runner exists, surface it; propose adding Vitest as a separate step rather
  than smuggling it in.
- Visual pass: every route in both themes, focusing on inverse bands, the contact
  selected-chip, nav glass blur, `::selection`.
- Automated grep asserting **zero** literal `text-white` remain in source.

## Edge cases

- localStorage throwing (private mode) → `try/catch`, fall back to system.
- SSR: no `window`; head script handles pre-hydration, store guards
  `typeof window`.
- OS theme change while `'system'` → live update; ignored once explicit.
- `prefers-reduced-motion` already covered; **no** theme-transition animation
  (avoids load-flash jank — deliberate YAGNI).
- No-JS: head script absent → site renders light. Acceptable; documented.

## Files touched

- **New:** `src/lib/theme.ts`, `src/lib/components/theme-toggle.svelte`,
  `src/lib/theme.test.ts` (if runner present).
- **Edit:** `src/routes/layout.css` (dark token block + `@custom-variant`),
  `src/app.html` (inline script, dynamic meta), `src/lib/components/nav.svelte`,
  `src/routes/+page.svelte`, `src/lib/components/eyebrow.svelte`.

## Memory follow-up

Update `site-is-claude-design-port.md`: dark mode is now an intentional, shipped
feature (no longer "intentionally absent"); the "where's dark mode" rationale no
longer applies.
