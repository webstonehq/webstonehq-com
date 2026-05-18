<script lang="ts">
	import type { CaseStudy } from '$lib/data/cases';
	import Arrow from './arrow.svelte';

	let { c, big = false }: { c: CaseStudy; big?: boolean } = $props();
</script>

<a href={`/cases/${c.id}`} class="block h-full">
	<article
		class="flex h-full flex-col rounded-card border border-line bg-paper transition-[border-color,transform] duration-150 hover:border-line-strong {big
			? 'p-10'
			: 'p-8'}"
	>
		<div class="mb-8 flex items-center justify-between gap-4">
			<span class="font-mono text-[13px]">{c.client}</span>
			<span class="font-mono text-xs text-muted">{c.sector}</span>
		</div>
		<h3
			class="mb-4 max-w-[24ch] font-semibold leading-[1.15] tracking-[-0.02em] {big
				? 'text-[32px]'
				: 'text-[24px]'}"
		>
			{c.title}
		</h3>
		<p class="mb-8 flex-1 text-[14.5px] leading-[1.55] text-muted">{c.summary}</p>
		<div class="flex items-center justify-between gap-4 border-t border-line pt-6">
			<div class="flex flex-wrap items-center gap-8">
				{#each c.metrics.slice(0, big ? 3 : 1) as [v, l] (l)}
					<div>
						<div
							class="font-semibold tracking-[-0.03em] {big ? 'text-[32px]' : 'text-[28px]'}"
							style="color: {c.accent};"
						>
							{v}
						</div>
						<div class="mt-0.5 max-w-[140px] text-xs text-muted">{l}</div>
					</div>
				{/each}
			</div>
			<Arrow size={18} />
		</div>
	</article>
</a>
