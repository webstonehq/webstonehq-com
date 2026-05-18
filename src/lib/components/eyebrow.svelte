<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		plain = false,
		invert = false,
		children
	}: { plain?: boolean; invert?: boolean; children: Snippet } = $props();
</script>

<span
	class="inline-flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.12em] {invert
		? 'text-paper/60'
		: 'text-muted'} {plain
		? ''
		: "before:inline-block before:size-1.5 before:rounded-full before:bg-accent before:content-['']"}"
>
	{@render children()}
</span>
