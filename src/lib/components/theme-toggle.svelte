<script lang="ts">
	import { mode, toggleMode } from 'mode-watcher';

	let { class: klass = '' }: { class?: string } = $props();

	const isDark = $derived(mode.current === 'dark');
</script>

<button
	type="button"
	onclick={toggleMode}
	aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
	aria-pressed={isDark}
	title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
	class="rounded-lg p-2 text-stone-700 transition-[background,color] duration-[120ms] ease-[ease] hover:bg-stone-100 hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent {klass}"
>
	{#if isDark}
		<svg
			width="18"
			height="18"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="1.6"
			stroke-linecap="round"
			aria-hidden="true"
		>
			<circle cx="12" cy="12" r="4" />
			<path
				d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4"
			/>
		</svg>
	{:else}
		<svg
			width="18"
			height="18"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="1.6"
			stroke-linecap="round"
			stroke-linejoin="round"
			aria-hidden="true"
		>
			<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z" />
		</svg>
	{/if}
</button>
