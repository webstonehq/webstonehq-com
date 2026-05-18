<script lang="ts">
	import { page } from '$app/state';
	import { afterNavigate } from '$app/navigation';
	import { BOOKING_URL } from '$lib/config';
	import StoneMark from './stone-mark.svelte';
	import Arrow from './arrow.svelte';
	import Container from './container.svelte';
	import Btn from './btn.svelte';
	import ThemeToggle from './theme-toggle.svelte';

	const items: [string, string][] = [
		['/services', 'Services'],
		// ['/cases', 'Case studies'],
		// ['/insights', 'Insights'],
		['/about', 'About']
	];

	const isActive = (href: string) => {
		const path = page.url.pathname;
		return path === href || path.startsWith(href + '/');
	};

	let menuOpen = $state(false);

	// Close the mobile menu on navigation so a link tap doesn't leave it hanging.
	afterNavigate(() => (menuOpen = false));
</script>

<svelte:window
	onkeydown={(e) => {
		if (e.key === 'Escape') menuOpen = false;
	}}
/>

<header
	class="sticky top-0 z-[80] border-b border-line bg-paper/[0.78] backdrop-blur-[16px] backdrop-saturate-[1.6]"
>
	<Container class="flex h-16 items-center justify-between">
		<a href="/" class="flex items-center gap-2.5 font-semibold tracking-[-0.01em]">
			<StoneMark size={24} />
			<span class="text-[15px]"
				>Webstone<span class="font-normal text-muted max-[640px]:hidden">&nbsp;Technologies</span
				></span
			>
		</a>
		<nav class="flex items-center gap-1" aria-label="primary">
			{#each items as [href, label] (href)}
				<a
					{href}
					class="rounded-lg px-3 py-2 text-sm whitespace-nowrap transition-[background,color] duration-[120ms] ease-[ease] hover:bg-stone-100 hover:text-ink max-[640px]:hidden {isActive(
						href
					)
						? 'text-ink after:mt-1 after:block after:h-0.5 after:rounded-[2px] after:bg-accent after:content-[\'\']'
						: 'text-stone-700'}"
				>
					{label}
				</a>
			{/each}
			<ThemeToggle class="max-[640px]:hidden" />
			<Btn
				href={BOOKING_URL}
				target="_blank"
				rel="noopener noreferrer"
				size="sm"
				class="ml-2 whitespace-nowrap">Book intro<Arrow /></Btn
			>
			<button
				type="button"
				onclick={() => (menuOpen = !menuOpen)}
				aria-label={menuOpen ? 'Close menu' : 'Open menu'}
				aria-expanded={menuOpen}
				aria-controls="mobile-menu"
				class="ml-1 rounded-lg p-2 text-stone-700 transition-[background,color] duration-[120ms] ease-[ease] hover:bg-stone-100 hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent min-[641px]:hidden"
			>
				{#if menuOpen}
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
						<path d="M5 5l14 14M19 5L5 19" />
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
						aria-hidden="true"
					>
						<path d="M3 6h18M3 12h18M3 18h18" />
					</svg>
				{/if}
			</button>
		</nav>
	</Container>

	{#if menuOpen}
		<div
			id="mobile-menu"
			class="absolute inset-x-0 top-full origin-top animate-fade-in border-b border-line bg-paper/[0.92] backdrop-blur-[16px] backdrop-saturate-[1.6] min-[641px]:hidden"
		>
			<Container class="flex flex-col py-2">
				{#each items as [href, label] (href)}
					<a
						{href}
						onclick={() => (menuOpen = false)}
						class="rounded-lg px-3 py-3 text-[15px] transition-[background,color] duration-[120ms] ease-[ease] hover:bg-stone-100 {isActive(
							href
						)
							? 'font-medium text-ink'
							: 'text-stone-700 hover:text-ink'}"
					>
						{label}
					</a>
				{/each}
			</Container>
		</div>
	{/if}
</header>
