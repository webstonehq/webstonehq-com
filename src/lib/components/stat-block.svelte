<script lang="ts">
	let {
		value,
		label,
		sub
	}: { value: string; label: string; sub?: string } = $props();
</script>

<div>
	<div class="font-sans text-[clamp(40px,4.5vw,64px)] font-semibold leading-none tracking-[-0.03em]">
		{value}
	</div>
	<div class="mt-2 text-sm text-muted">{label}</div>
	{#if sub}
		<div class="mt-1 font-mono text-xs text-muted">{sub}</div>
	{/if}
</div>
