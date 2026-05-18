<script lang="ts">
	import { page } from '$app/state';
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
</script>

<header
	class="sticky top-0 z-[80] border-b border-line bg-paper/[0.78] backdrop-blur-[16px] backdrop-saturate-[1.6]"
>
	<Container class="flex h-16 items-center justify-between">
		<a href="/" class="flex items-center gap-2.5 font-semibold tracking-[-0.01em]">
			<StoneMark size={24} />
			<span class="text-[15px]">Webstone<span class="font-normal text-muted">&nbsp;Technologies</span></span>
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
			<ThemeToggle />
			<Btn
				href={BOOKING_URL}
				target="_blank"
				rel="noopener noreferrer"
				size="sm"
				class="ml-2">Book intro<Arrow /></Btn
			>
		</nav>
	</Container>
</header>
