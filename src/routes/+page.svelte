<script lang="ts">
	import { services } from '$lib/data/services';
	// import { cases } from '$lib/data/cases';
	import { BOOKING_URL } from '$lib/config';
	import StoneMark from '$lib/components/stone-mark.svelte';
	import Arrow from '$lib/components/arrow.svelte';
	import Glyph from '$lib/components/glyph.svelte';
	import Eyebrow from '$lib/components/eyebrow.svelte';
	import StatBlock from '$lib/components/stat-block.svelte';
	import Container from '$lib/components/container.svelte';
	import Btn from '$lib/components/btn.svelte';
	import Reveal from '$lib/components/reveal.svelte';

	// const logos = [
	// 	{ name: 'Northwood Capital', font: 'serif', weight: 500 },
	// 	{ name: 'KERN/STEIN', font: 'mono', weight: 600, letterSpacing: '.04em' },
	// 	{ name: 'paloma', font: 'sans', weight: 400, italic: true },
	// 	{ name: 'OUTPACE', font: 'sans', weight: 700, letterSpacing: '.18em', size: 13 },
	// 	{ name: 'Lichtenberg & Co.', font: 'serif', weight: 400 },
	// 	{ name: 'Glasshouse', font: 'sans', weight: 600 }
	// ];
	// const fontVar = (f: string) =>
	// 	f === 'mono' ? 'var(--font-mono)' : f === 'serif' ? 'var(--font-serif)' : 'var(--font-sans)';

	const steps = [
		{
			n: '01',
			t: 'Listen',
			d: 'Half a day with your employees. We watch how the work actually happens — not how the org chart says it does.'
		},
		{
			n: '02',
			t: 'Pick the fight',
			d: 'One workflow. The one with the most tedium and the clearest measurement. Boring beats impressive.'
		},
		{
			n: '03',
			t: 'Ship in 14 days',
			d: 'A working tool used by a real human on a real Tuesday. Not a demo. Not a screenshot. Not an imaginary vision.'
		},
		{
			n: '04',
			t: 'Measure & expand',
			d: 'We instrument outcomes from day one. If it works, we hand it off. If it doesn’t, we kill it fast.'
		}
	];

	// const casePreviews = cases.slice(0, 2);

	// "Currently booking" target: one month out from today, e.g. "June 2026".
	// Pinned to en-US so SSR and client hydration render the same string.
	const now = new Date();
	const bookingMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1).toLocaleString(
		'en-US',
		{ month: 'long', year: 'numeric' }
	);
</script>

<svelte:head>
	<title>Webstone Technologies — AI adoption, productized.</title>
</svelte:head>

<div class="animate-fade-in">
	<!-- hero -->
	<section class="relative py-20">
		<div class="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
			<svg
				viewBox="0 0 428.7 500"
				xmlns="http://www.w3.org/2000/svg"
				class="absolute top-1/2 right-[-10vw] h-auto w-[60vw] max-w-[800px] -translate-y-1/2 rotate-[-8deg] opacity-90"
			>
				<defs>
					<linearGradient id="heroGrad" x1="-87" x2="446" y1="33" y2="415" gradientUnits="userSpaceOnUse">
						<stop offset="0" stop-color="rgba(255,255,255,0)" />
						<stop offset="1" stop-color="#e64980" stop-opacity="0.20" />
					</linearGradient>
				</defs>
				<path
					d="M199.5,500L11.3,362.2C4.2,357,0,348.7,0,339.9V154.4l199.5,146V500z M229.2,500l188.2-137.7c7.1-5.2,11.3-13.5,11.3-22.3V154.4L229.2,300.5V500z M198.8,4.8L14.2,130.8l199.5,146l.7-.5l.7.5l199.5-146L229.9,4.8C220.5-1.6,208.2-1.6,198.8,4.8z"
					fill="url(#heroGrad)"
				/>
			</svg>
		</div>
		<Container class="relative">
			<Reveal><Eyebrow>AI adoption · for teams that deliver</Eyebrow></Reveal>
			<Reveal delay={80}>
				<h1
					class="mt-6 max-w-[14ch] text-[clamp(44px,7vw,96px)] font-semibold leading-[0.98] tracking-[-0.035em]"
				>
					AI that earns its <span class="font-serif font-normal tracking-[-0.02em] italic">keep</span>.
				</h1>
			</Reveal>
			<Reveal delay={160}>
				<p class="mt-7 max-w-[52ch] text-[clamp(18px,1.4vw,22px)] leading-[1.45] text-stone-700">
					We help mid-market companies put AI to work in the parts of the business that actually move
					the numbers. Not pilots that die in a slide deck, but tools your people use on a Tuesday.
				</p>
			</Reveal>
			<Reveal delay={240}>
				<div class="mt-9 flex flex-wrap items-center gap-3">
					<Btn
					href={BOOKING_URL}
					target="_blank"
					rel="noopener noreferrer"
					size="lg">Book a 30-min intro<Arrow /></Btn
				>
					<Btn href="/services" size="lg" variant="ghost">How we work</Btn>
				</div>
			</Reveal>
			<Reveal delay={320}>
				<div class="mt-20 grid grid-cols-4 gap-6 border-t border-line pt-8 max-[640px]:grid-cols-2">
					<StatBlock value="2 weeks" label="Average time from kickoff to first shipped agent" />
					<StatBlock value="31" label="Workflows automated since 2025" />
					<StatBlock value="6 hours" label="Average time saved per employee per week" />
					<StatBlock value="18" label="Production products & tools shipped" />
				</div>
			</Reveal>
		</Container>
	</section>

	<!-- logo strip -->
	<!-- <Container>
		<div class="grid grid-cols-6 gap-4 border-y border-line py-6 max-[640px]:grid-cols-3">
			{#each logos as l (l.name)}
				<div
					class="overflow-hidden text-center text-ellipsis whitespace-nowrap text-stone-700 opacity-75"
					style="font-family: {fontVar(l.font)}; font-weight: {l.weight}; letter-spacing: {l.letterSpacing ??
						'-.01em'}; font-style: {l.italic ? 'italic' : 'normal'}; font-size: {l.size ?? 16}px;"
				>
					{l.name}
				</div>
			{/each}
		</div>
	</Container> -->

	<!-- services preview -->
	<section class="py-[clamp(64px,8vw,128px)]" id="services-preview">
		<Container>
			<div class="mb-14 flex flex-wrap items-end justify-between gap-6">
				<div>
					<Eyebrow>What we do</Eyebrow>
					<h2
						class="mt-4 max-w-[18ch] text-[clamp(32px,4.2vw,56px)] font-semibold leading-[1.02] tracking-[-0.028em]"
					>
						Eight engagements. One thesis:
						<span class="font-serif font-normal italic">deploy, don’t deliberate.</span>
					</h2>
				</div>
				<p class="max-w-[42ch] text-[clamp(18px,1.4vw,22px)] leading-[1.45] text-stone-700">
					Each engagement has a fixed shape and a fixed deliverable.
				</p>
			</div>
			<div class="grid grid-cols-4 gap-6 max-[920px]:grid-cols-2 max-[640px]:grid-cols-1">
				{#each services as s, i (s.id)}
					<Reveal delay={i * 40} class="h-full">
						<a
							href="/services"
							class="flex h-full cursor-pointer flex-col rounded-card border border-line bg-paper p-7 transition-[border-color,transform] duration-150 hover:border-line-strong"
						>
							<div class="mb-6 flex items-center justify-between gap-4">
								<Glyph name={s.glyph} />
								<span
									class="inline-flex items-center gap-1.5 rounded-full border border-line-strong px-2.5 py-1 font-mono text-xs whitespace-nowrap text-stone-700"
								>
									{s.tag}
								</span>
							</div>
							<h3 class="mb-2.5 text-[20px] font-semibold tracking-[-0.015em]">{s.name}</h3>
							<p class="flex-1 text-[13.5px] leading-[1.55] text-muted">{s.blurb}</p>
							<div
								class="mt-5 flex items-center justify-between border-t border-line pt-3.5 font-mono text-xs text-muted"
							>
								<span>Learn more</span><Arrow size={12} />
							</div>
						</a>
					</Reveal>
				{/each}
			</div>
		</Container>
	</section>

	<!-- process -->
	<section class="py-[clamp(48px,6vw,96px)]">
		<Container>
			<div class="rounded-3xl bg-ink p-[clamp(40px,5vw,72px)] text-paper">
				<div class="mb-12 flex flex-wrap items-end justify-between gap-6">
					<div>
						<Eyebrow invert>How we work</Eyebrow>
						<h2
							class="mt-4 max-w-[16ch] text-[clamp(32px,4.2vw,56px)] font-semibold leading-[1.02] tracking-[-0.028em] text-paper"
						>
							Twelve weeks, four moves.
						</h2>
					</div>
					<p class="max-w-[40ch] text-[clamp(18px,1.4vw,22px)] leading-[1.45] text-paper/[0.78]">
						No multi-quarter strategy. We pick a real workflow, ship the smallest useful version,
						and let the data argue for the next step.
					</p>
				</div>
				<div class="grid grid-cols-4 gap-6 max-[920px]:grid-cols-2 max-[640px]:grid-cols-1">
					{#each steps as s (s.n)}
						<div class="border-t border-paper/[0.18] pt-6">
							<div class="mb-3 font-mono text-[13px] text-paper/50">{s.n}</div>
							<h3 class="mb-3 text-[22px] font-semibold">{s.t}</h3>
							<p class="text-sm leading-[1.55] text-paper/[0.65]">{s.d}</p>
						</div>
					{/each}
				</div>
			</div>
		</Container>
	</section>

	<!-- testimonial -->
	<section class="py-[clamp(48px,6vw,96px)]">
		<Container>
			<Reveal>
				<div class="mx-auto grid max-w-[920px] grid-cols-[auto_1fr] items-start gap-8 text-left">
					<div aria-hidden="true" class="font-serif text-[120px] leading-[0.8] text-accent">“</div>
					<figure class="m-0">
						<blockquote
							class="m-0 font-serif text-[clamp(28px,3.4vw,42px)] leading-[1.18] tracking-[-0.01em] italic"
						>
							We’d been "doing AI" for fourteen months and had a Notion full of pilots. Webstone
							shipped the first thing my CFO would defend in a board meeting — in nine working days.
						</blockquote>
						<figcaption class="mt-7 flex items-center gap-3.5">
							<div class="size-11 rounded-full bg-[linear-gradient(135deg,#e64980,#15140f)]"></div>
							<div>
								<div class="font-semibold">Mira Adesanya</div>
								<div class="text-[13px] text-muted">COO, Northwood Accounting</div>
							</div>
						</figcaption>
					</figure>
				</div>
			</Reveal>
		</Container>
	</section>

	<!-- selected work -->
	<!-- <section class="py-[clamp(64px,8vw,128px)]">
		<Container>
			<div class="mb-12 flex flex-wrap items-end justify-between gap-6">
				<div>
					<Eyebrow>Selected work</Eyebrow>
					<h2
						class="mt-4 max-w-[22ch] text-[clamp(32px,4.2vw,56px)] font-semibold leading-[1.02] tracking-[-0.028em]"
					>
						What it looks like, in production.
					</h2>
				</div>
				<Btn href="/cases" variant="ghost">All case studies<Arrow /></Btn>
			</div>
			<div class="grid grid-cols-2 gap-6 max-[920px]:grid-cols-1">
				{#each casePreviews as c (c.id)}
					<Reveal>
						<a href={`/cases/${c.id}`} class="block">
							<article
								class="h-full rounded-card border border-line bg-paper p-8 transition-[border-color,transform] duration-150 hover:border-line-strong"
							>
								<div class="mb-8 flex flex-wrap items-center justify-between gap-3">
									<span class="font-mono text-[13px]">{c.client}</span>
									<span class="font-mono text-xs text-muted">{c.sector}</span>
								</div>
								<h3 class="mb-10 max-w-[24ch] text-[28px] font-semibold leading-[1.15]">
									{c.title}
								</h3>
								<div class="flex items-center justify-between gap-4 border-t border-line pt-6">
									<div>
										<div class="text-[40px] font-semibold tracking-[-0.03em] text-accent">
											{c.metrics[0][0]}
										</div>
										<div class="mt-1 text-[13px] text-muted">{c.metrics[0][1]}</div>
									</div>
									<Arrow size={18} />
								</div>
							</article>
						</a>
					</Reveal>
				{/each}
			</div>
		</Container>
	</section> -->

	<!-- final CTA -->
	<section class="py-[clamp(64px,8vw,128px)]">
		<Container>
			<div
				class="relative overflow-hidden rounded-3xl p-[clamp(48px,8vw,112px)] text-paper bg-[linear-gradient(135deg,#15140f_0%,#2a1620_100%)] dark:bg-[linear-gradient(135deg,#f4f2ee_0%,#f6dde9_100%)]"
			>
				<div class="absolute top-[-100px] right-[-100px] opacity-15">
					<StoneMark size={520} />
				</div>
				<div class="relative text-paper">
					<Eyebrow plain>
						<span class="text-accent">●</span>&nbsp;&nbsp;Currently booking {bookingMonth}
					</Eyebrow>
					<h2
						class="mt-6 max-w-[16ch] text-[clamp(40px,6vw,80px)] font-semibold leading-[0.98] tracking-[-0.035em] text-paper"
					>
						The first call is free.
						<span class="font-serif font-normal tracking-[-0.02em] text-accent italic"
							>The second one is when we deliver.</span
						>
					</h2>
					<p class="mt-6 max-w-[52ch] text-[clamp(18px,1.4vw,22px)] leading-[1.45] text-paper/75">
						Thirty minutes. We’ll tell you what’s worth doing, what isn’t, and whether we’re the
						right people for it. No slide deck.
					</p>
					<div class="mt-10 flex flex-wrap items-center gap-3">
						<Btn
						href={BOOKING_URL}
						target="_blank"
						rel="noopener noreferrer"
						size="lg"
						variant="accent">Book the call<Arrow /></Btn
					>
						<Btn
							href="mailto:ai@webstonehq.com"
							size="lg"
							variant="ghost"
							class="border-paper/30! text-paper!">ai@webstonehq.com</Btn
						>
					</div>
				</div>
			</div>
		</Container>
	</section>
</div>
