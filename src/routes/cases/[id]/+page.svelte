<script lang="ts">
	import { cases } from '$lib/data/cases';
	import Eyebrow from '$lib/components/eyebrow.svelte';
	import CaseCard from '$lib/components/case-card.svelte';
	import Container from '$lib/components/container.svelte';
	import Reveal from '$lib/components/reveal.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const c = $derived(data.study);
	const next = $derived.by(() => {
		const idx = cases.findIndex((x) => x.id === c.id);
		return cases[(idx + 1) % cases.length];
	});

	const pill =
		'inline-flex items-center gap-1.5 rounded-full border border-line-strong px-2.5 py-1 font-mono text-xs whitespace-nowrap text-stone-700';
</script>

<svelte:head>
	<title>{c.client} — Case study — Webstone Technologies</title>
	<meta name="description" content={c.summary} />
</svelte:head>

<div class="animate-fade-in">
	<section class="pt-16 pb-8">
		<Container>
			<a href="/cases" class="mb-8 inline-block font-mono text-[13px] text-muted">
				← Case studies
			</a>
			<div class="mb-6 flex flex-wrap items-center gap-3">
				<span class={pill}>{c.client}</span>
				<span class={pill}>{c.sector}</span>
				<span class={pill}>{c.year}</span>
				<span
					class="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/[0.08] px-2.5 py-1 font-mono text-xs whitespace-nowrap text-accent"
				>
					{c.engagement}
				</span>
			</div>
			<Reveal>
				<h1
					class="max-w-[20ch] text-[clamp(36px,5vw,72px)] font-semibold leading-[0.98] tracking-[-0.035em]"
				>
					{c.title}
				</h1>
			</Reveal>
			<Reveal delay={100}>
				<p class="mt-7 max-w-[62ch] text-[clamp(18px,1.4vw,22px)] leading-[1.45] text-stone-700">
					{c.summary}
				</p>
			</Reveal>
		</Container>
	</section>

	<!-- metrics row -->
	<section class="py-12">
		<Container>
			<div
				class="grid grid-cols-3 gap-6 border-y border-line py-10 max-[920px]:grid-cols-2 max-[640px]:grid-cols-1"
			>
				{#each c.metrics as [v, l] (l)}
					<div>
						<div
							class="text-[clamp(48px,6vw,80px)] font-semibold leading-none tracking-[-0.04em]"
							style="color: {c.accent};"
						>
							{v}
						</div>
						<div class="mt-3 max-w-[200px] text-sm text-muted">{l}</div>
					</div>
				{/each}
			</div>
		</Container>
	</section>

	<!-- body sections -->
	<section class="pb-16">
		<Container>
			<div
				class="mx-auto grid max-w-[1080px] grid-cols-[220px_1fr] gap-16 max-[920px]:grid-cols-1 max-[920px]:gap-8"
			>
				{#each c.body as [h, p], i (h)}
					<div class="pt-1.5 font-mono text-xs uppercase tracking-[0.1em] text-muted">{h}</div>
					<div
						class="pb-8 text-[18px] leading-[1.55] {i < c.body.length - 1
							? 'border-b border-line'
							: ''}"
					>
						{p}
					</div>
				{/each}
			</div>
		</Container>
	</section>

	<!-- quote -->
	<section class="pt-16 pb-24">
		<Container>
			<figure
				class="relative mx-auto max-w-[920px] rounded-card bg-ink p-[clamp(40px,5vw,64px)] text-paper"
			>
				<div
					class="mb-3 font-serif text-[100px] leading-[0.7]"
					style="color: {c.accent};"
				>
					“
				</div>
				<blockquote
					class="m-0 max-w-[36ch] font-serif text-[clamp(22px,2.6vw,32px)] leading-[1.3] italic"
				>
					{c.quote.text}
				</blockquote>
				<figcaption class="mt-8 text-sm text-paper/[0.65]">
					<strong class="font-sans text-paper not-italic">{c.quote.who}</strong> · {c.quote.role}
				</figcaption>
			</figure>
		</Container>
	</section>

	<!-- next case -->
	<section class="border-t border-line py-[clamp(48px,6vw,96px)]">
		<Container>
			<div class="mb-6 flex items-center justify-between gap-4">
				<Eyebrow>Next case</Eyebrow>
				<a href="/cases" class="font-mono text-[13px] text-muted">All →</a>
			</div>
			<CaseCard c={next} big />
		</Container>
	</section>
</div>
