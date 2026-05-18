<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		label,
		required = false,
		hint,
		children
	}: { label: string; required?: boolean; hint?: string; children: Snippet } = $props();
</script>

<label class="flex flex-col gap-1.5">
	<span class="font-mono text-[11px] uppercase tracking-[0.1em] text-muted">
		{label}{#if required}<span class="text-accent"> *</span>{/if}
	</span>
	{@render children()}
	{#if hint}
		<span class="text-xs text-muted">{hint}</span>
	{/if}
</label>
