<script lang="ts">
	import type { GlyphName } from '$lib/data/services';

	let { name }: { name: GlyphName } = $props();
</script>

<svg
	width="32"
	height="32"
	viewBox="0 0 32 32"
	fill="none"
	stroke="currentColor"
	stroke-width="1.4"
	aria-hidden="true"
>
	{#if name === 'onramp'}
		<path d="M4 26h4l4-6h4l4-7h4l4-5" stroke-linecap="round" stroke-linejoin="round" />
		<circle cx="4" cy="26" r="1.8" fill="currentColor" stroke="none" />
		<path d="M24 8h4v4" stroke-linecap="round" stroke-linejoin="round" />
	{:else if name === 'discovery'}
		<circle cx="14" cy="14" r="8" />
		<path d="M20 20l6 6" stroke-linecap="round" />
		<circle cx="14" cy="14" r="2" fill="currentColor" stroke="none" />
	{:else if name === 'agents'}
		<rect x="6" y="10" width="20" height="14" rx="3" />
		<circle cx="12" cy="17" r="1.6" fill="currentColor" stroke="none" />
		<circle cx="20" cy="17" r="1.6" fill="currentColor" stroke="none" />
		<path d="M16 4v6M11 7l5-3 5 3" stroke-linecap="round" stroke-linejoin="round" />
	{:else if name === 'product'}
		<rect x="4" y="6" width="24" height="20" rx="3" />
		<path d="M4 12h24" stroke-linecap="round" />
		<rect x="8" y="16" width="7" height="6" rx="1.2" />
		<path d="M18 17h6M18 21h4" stroke-linecap="round" />
	{:else if name === 'rag'}
		<ellipse cx="16" cy="8" rx="10" ry="3" />
		<path d="M6 8v16c0 1.7 4.5 3 10 3s10-1.3 10-3V8" />
		<path d="M6 16c0 1.7 4.5 3 10 3s10-1.3 10-3" />
	{:else if name === 'enablement'}
		<circle cx="10" cy="11" r="3" />
		<circle cx="22" cy="11" r="3" />
		<path d="M4 24c0-3.3 2.7-6 6-6s6 2.7 6 6M16 24c0-3.3 2.7-6 6-6s6 2.7 6 6" />
	{:else if name === 'change'}
		<path d="M6 22V10M6 10l-3 3M6 10l3 3" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M26 10v12M26 22l3-3M26 22l-3-3" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M14 6l4 4-4 4M14 26l4-4-4-4" stroke-linecap="round" stroke-linejoin="round" />
	{:else if name === 'platform'}
		<path d="M16 4l12 7-12 7L4 11l12-7z" />
		<path d="M4 17l12 7 12-7M4 23l12 7 12-7" stroke-linejoin="round" />
	{/if}
</svg>
