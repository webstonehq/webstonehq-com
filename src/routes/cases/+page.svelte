<script lang="ts">
	import { cases } from '$lib/data/cases';
	import Eyebrow from '$lib/components/eyebrow.svelte';
	import CaseCard from '$lib/components/case-card.svelte';
	import Container from '$lib/components/container.svelte';
	import Reveal from '$lib/components/reveal.svelte';

	const guarantees = [
		'A named partner on every engagement — not a rotating account team.',
		'Weekly written updates. No status meetings unless you ask for one.',
		'A fixed deliverable, a fixed timeline, and a fixed price.',
		'A go/no-go recommendation. We’ve walked away from engagements that weren’t a fit.'
	];
</script>

<svelte:head>
	<title>Case studies — Webstone Technologies</title>
	<meta
		name="description"
		content="Work we’d defend in a board meeting. Real, measured outcomes from AI adoption engagements in accounting, insurance, and logistics."
	/>
</svelte:head>

<div class="animate-fade-in">
	<section class="pt-24 pb-14">
		<Container>
			<Reveal><Eyebrow>Case studies</Eyebrow></Reveal>
			<Reveal delay={80}>
				<h1
					class="mt-6 max-w-[20ch] text-[clamp(44px,7vw,96px)] font-semibold leading-[0.98] tracking-[-0.035em]"
				>
					Work we’d <span class="font-serif font-normal tracking-[-0.02em] italic">defend</span> in a
					board meeting.
				</h1>
			</Reveal>
			<Reveal delay={160}>
				<p class="mt-7 max-w-[58ch] text-[clamp(18px,1.4vw,22px)] leading-[1.45] text-stone-700">
					These are clients who let us name them. There are more we can’t. Numbers below are real,
					measured, and verifiable on request.
				</p>
			</Reveal>
		</Container>
	</section>

	<section class="pb-24">
		<Container>
			<div class="mb-6">
				<CaseCard c={cases[0]} big />
			</div>
			<div class="grid grid-cols-2 gap-6 max-[920px]:grid-cols-1">
				{#each cases.slice(1) as c (c.id)}
					<CaseCard {c} />
				{/each}
			</div>
		</Container>
	</section>

	<!-- trust band -->
	<section class="py-[clamp(48px,6vw,96px)]">
		<Container>
			<div class="rounded-card border border-line bg-stone-50 p-[clamp(40px,5vw,64px)]">
				<div class="grid grid-cols-2 items-center gap-14 max-[920px]:grid-cols-1">
					<div>
						<h2
							class="max-w-[18ch] text-[clamp(32px,4.2vw,56px)] font-semibold leading-[1.02] tracking-[-0.028em]"
						>
							What you’ll get from us, every time.
						</h2>
					</div>
					<div>
						<ul class="m-0 flex list-none flex-col gap-4 p-0">
							{#each guarantees as t (t)}
								<li class="flex items-start gap-3.5 text-[15.5px] leading-[1.5]">
									<span class="mt-2 size-1.5 shrink-0 rounded-full bg-accent"></span>
									<span>{t}</span>
								</li>
							{/each}
						</ul>
					</div>
				</div>
			</div>
		</Container>
	</section>
</div>
