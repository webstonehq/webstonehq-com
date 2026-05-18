<script lang="ts">
	import { team } from '$lib/data/team';
	import { BOOKING_URL } from '$lib/config';
	import Arrow from '$lib/components/arrow.svelte';
	import Eyebrow from '$lib/components/eyebrow.svelte';
	import Container from '$lib/components/container.svelte';
	import Btn from '$lib/components/btn.svelte';
	import Reveal from '$lib/components/reveal.svelte';

	const principles: [string, string][] = [
		[
			'Ship before you decide.',
			'A working prototype beats a perfect plan every time. We build before you decide.'
		],
		[
			'Measure outcomes, not outputs.',
			'We instrument every engagement. If we can’t measure the win, we don’t claim it.'
		],
		[
			'Boring beats impressive.',
			'The unsexy workflow with measurable tedium is almost always the bigger win.'
		],
		[
			'Walk away if it’s not a fit.',
			'We’ve passed on engagements that paid well. Reputation compounds. Slop doesn’t.'
		],
		[
			'Own the work.',
			'No subcontracted bodies. The people on the intro call are the people doing the work.'
		]
	];
</script>

<svelte:head>
	<title>About — Webstone Technologies</title>
	<meta
		name="description"
		content="Webstone is a small, deliberately senior team of people who got tired of slides. Founded 2021."
	/>
</svelte:head>

<div class="animate-fade-in">
	<section class="pt-24 pb-14">
		<Container>
			<Reveal><Eyebrow>About</Eyebrow></Reveal>
			<Reveal delay={80}>
				<h1
					class="mt-6 max-w-[22ch] text-[clamp(44px,7vw,96px)] font-semibold leading-[0.98] tracking-[-0.035em]"
				>
					We are people who got
					<span class="font-serif font-normal tracking-[-0.02em] italic">tired of slides</span>.
				</h1>
			</Reveal>
			<Reveal delay={160}>
				<div class="mt-12 grid grid-cols-2 items-start gap-14 max-[920px]:grid-cols-1">
					<p class="max-w-[62ch] text-[clamp(18px,1.4vw,22px)] leading-[1.45] text-stone-700">
						Webstone was founded in 2021 by two engineers who had spent a combined three decades
						inside growth-stage companies. We watched leaders spend a year deliberating about workflow
						improvements, then six months on a pilot, then quietly stop talking about it.
					</p>
					<p class="max-w-[62ch] text-[clamp(18px,1.4vw,22px)] leading-[1.45] text-stone-700">
						We started Webstone to do the opposite: pick one workflow, ship one thing, measure it,
						and let the result decide what to do next. It turns out a lot of companies prefer that.
						We’ve grown to a small, deliberately specialized team across three continents.
					</p>
				</div>
			</Reveal>
		</Container>
	</section>

	<!-- principles -->
	<section class="py-[clamp(48px,6vw,96px)]">
		<Container>
			<div class="rounded-3xl bg-ink p-[clamp(40px,5vw,72px)] text-paper">
				<Eyebrow invert>Principles</Eyebrow>
				<h2
					class="mt-4 mb-12 max-w-[20ch] text-[clamp(32px,4.2vw,56px)] font-semibold leading-[1.02] tracking-[-0.028em] text-paper"
				>
					Five things we won’t compromise on.
				</h2>
				<div class="flex flex-col">
					{#each principles as [t, d], i (t)}
						<div
							class="grid grid-cols-[80px_1fr_2fr] items-baseline gap-8 border-t border-paper/[0.18] py-6 max-[920px]:grid-cols-[60px_1fr] max-[920px]:gap-4"
						>
							<div class="font-mono text-[13px] text-paper/[0.45]">0{i + 1}</div>
							<div class="text-[20px] font-semibold tracking-[-0.015em]">{t}</div>
							<div class="text-[15px] leading-[1.55] text-paper/70 max-[920px]:col-start-2">
								{d}
							</div>
						</div>
					{/each}
				</div>
			</div>
		</Container>
	</section>

	<!-- team -->
	<!-- <section class="py-[clamp(64px,8vw,128px)]">
		<Container>
			<div class="mb-12 flex flex-wrap items-center justify-between gap-4">
				<div>
					<Eyebrow>Team</Eyebrow>
					<h2
						class="mt-4 max-w-[20ch] text-[clamp(32px,4.2vw,56px)] font-semibold leading-[1.02] tracking-[-0.028em]"
					>
						Small on purpose. <span class="font-serif font-normal italic">Senior on purpose.</span>
					</h2>
				</div>
				<p class="max-w-[40ch] text-[clamp(18px,1.4vw,22px)] leading-[1.45] text-stone-700">
					Nine people across four cities. Every engagement has at least one partner-level lead.
				</p>
			</div>
			<div class="grid grid-cols-3 gap-6 max-[920px]:grid-cols-2 max-[640px]:grid-cols-1">
				{#each team as p (p.name)}
					<Reveal>
						<div class="h-full rounded-2xl border border-line p-6">
							<div
								class="mb-5 flex size-14 items-center justify-center rounded-xl text-[18px] font-semibold tracking-[-0.01em] text-white"
								style="background: linear-gradient(135deg, {p.tint} 0%, #0a0a09 140%);"
							>
								{p.initials}
							</div>
							<div class="text-[17px] font-semibold tracking-[-0.01em]">{p.name}</div>
							<div class="mt-1 font-mono text-xs text-accent">{p.role}</div>
							<div class="mt-1 font-mono text-xs text-muted">{p.city} · prev. {p.from}</div>
							<p class="mt-4 text-[13.5px] leading-[1.5] text-stone-700">{p.bio}</p>
						</div>
					</Reveal>
				{/each}
			</div>
		</Container>
	</section> -->

	<!-- CTA -->
	<section class="pt-[clamp(48px,6vw,96px)] pb-24">
		<Container>
			<div
				class="rounded-card border border-line bg-stone-50 p-[clamp(40px,5vw,64px)] text-center"
			>
				<Eyebrow>Working with us</Eyebrow>
				<h2
					class="mx-auto mt-4 mb-6 max-w-[22ch] text-[clamp(32px,4.2vw,56px)] font-semibold leading-[1.02] tracking-[-0.028em]"
				>
					If our principles sound right, the call is free.
				</h2>
				<Btn
				href={BOOKING_URL}
				target="_blank"
				rel="noopener noreferrer"
				size="lg">Book a 30-min intro<Arrow /></Btn
			>
			</div>
		</Container>
	</section>
</div>
