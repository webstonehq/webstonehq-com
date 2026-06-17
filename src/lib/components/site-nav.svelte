<script lang="ts">
	import WebstoneMark from './webstone-mark.svelte';
	import ThemeToggle from './theme-toggle.svelte';
</script>

<header
	class="sticky top-0 z-50 border-b border-[var(--nav-border)] bg-[var(--nav-bg)] backdrop-blur-[10px]"
>
	<div class="mx-auto flex max-w-[1140px] items-center justify-between gap-5 px-7 py-4">
		<a href="#top" class="flex items-center gap-[11px] no-underline">
			<WebstoneMark class="h-7 w-auto shrink-0" />
			<span class="text-[16px] font-bold tracking-[-0.015em] text-ink">Webstone Technologies</span>
		</a>

		<nav class="flex items-center gap-6">
			<a href="#how-anchor" class="hidden text-[14.5px] font-medium text-ink-soft sm:inline"
				>How it works</a
			>
			<a href="#what-anchor" class="hidden text-[14.5px] font-medium text-ink-soft sm:inline"
				>What you get</a
			>
			<a
				href="https://webstonetechnologies.zohobookings.com/#/ai-intro"
				target="_blank"
				rel="noopener"
				class="hidden text-[14.5px] font-medium text-ink-soft sm:inline">Book a call</a
			>
			<ThemeToggle />
			<a
				href="#form-anchor"
				class="rounded-[10px] border border-border-2 bg-btn-dark-bg px-[18px] py-[10px] text-[14px] font-semibold text-btn-dark-text no-underline"
				>Get in touch</a
			>
		</nav>
	</div>
</header>
