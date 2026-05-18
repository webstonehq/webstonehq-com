<script lang="ts">
	import type { Snippet } from 'svelte';
	import { reveal } from '$lib/actions/reveal';

	let {
		delay = 0,
		class: klass = '',
		children
	}: { delay?: number; class?: string; children: Snippet } = $props();
</script>

<div
	data-reveal
	use:reveal={{ delay }}
	class="translate-y-3 opacity-0 transition-[opacity,transform] duration-[600ms] ease-[ease] {klass}"
>
	{@render children()}
</div>
