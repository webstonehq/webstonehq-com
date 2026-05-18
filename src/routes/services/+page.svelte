<script lang="ts">
	import { services } from '$lib/data/services';
	import { BOOKING_URL } from '$lib/config';
	import Arrow from '$lib/components/arrow.svelte';
	import Glyph from '$lib/components/glyph.svelte';
	import Eyebrow from '$lib/components/eyebrow.svelte';
	import Container from '$lib/components/container.svelte';
	import Btn from '$lib/components/btn.svelte';
	import Reveal from '$lib/components/reveal.svelte';

	const verticals: [string, string][] = [
		[
			'Accounting & tax',
			'Document intake, review workflows, audit trails. We literally wrote the playbook for CPA firms.'
		],
		['Specialty insurance', 'Underwriter copilots, claims intake, broker submissions.'],
		['Professional services', 'Knowledge work that lives in Word docs and inboxes.'],
		['Financial services', 'Compliance-friendly, on-prem-friendly, regulator-defensible.']
	];

	const cardTone = (i: number) =>
		i % 3 === 0
			? 'bg-ink text-paper'
			: i % 3 === 1
				? 'bg-stone-100 text-ink border border-line'
				: 'bg-paper text-ink border border-line';
</script>

<svelte:head>
	<title>Services — Webstone Technologies</title>
	<meta
		name="description"
		content="Eight fixed-shape AI engagements with honest prices and shipping deadlines — from AI Onramp to platform setup. We work for a flat fee, not a body count or hours spent."
	/>
</svelte:head>

<div class="animate-fade-in">
	<!-- hero -->
	<section class="pt-24 pb-16">
		<Container>
			<Reveal><Eyebrow>Services</Eyebrow></Reveal>
			<Reveal delay={80}>
				<h1
					class="mt-6 max-w-[18ch] text-[clamp(44px,7vw,96px)] font-semibold leading-[0.98] tracking-[-0.035em]"
				>
					Fixed shapes.
					<span class="font-serif font-normal tracking-[-0.02em] italic">Honest prices.</span>
					Shipping deadlines.
				</h1>
			</Reveal>
			<Reveal delay={160}>
				<p class="mt-7 max-w-[60ch] text-[clamp(18px,1.4vw,22px)] leading-[1.45] text-stone-700">
					We don’t do open-ended consulting. Every engagement has a defined deliverable, a fixed
					timeline, and a price you’ll know before the second call. We work for a flat fee, not a
					body count or hours spent.
				</p>
			</Reveal>
		</Container>
	</section>

	<!-- services list -->
	<section class="pb-16">
		<Container>
			<div class="flex flex-col gap-[88px]">
				{#each services as s, i (s.id)}
					{@const flip = i % 2 === 1}
					<Reveal>
						<article
							class="grid grid-cols-2 items-start gap-14 max-[920px]:grid-cols-1 max-[920px]:gap-8"
						>
							<!-- number + glyph card -->
							<div class="max-[920px]:order-none {flip ? 'order-2' : 'order-1'}">
								<div
									class="relative flex aspect-[4/3] flex-col justify-between overflow-hidden rounded-card p-10 {cardTone(
										i
									)}"
								>
									<div class="font-mono text-xs uppercase tracking-[0.1em] opacity-55">
										0{i + 1} / 08
									</div>
									<div class="mb-4 ml-2 origin-bottom-left scale-[2.8]">
										<Glyph name={s.glyph} />
									</div>
								</div>
							</div>
							<!-- content -->
							<div class="pt-2 max-[920px]:order-none {flip ? 'order-1' : 'order-2'}">
								<div class="mb-4 flex flex-wrap items-center gap-3">
									<span
										class="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/[0.08] px-2.5 py-1 font-mono text-xs whitespace-nowrap text-accent"
									>
										{s.timeline}
									</span>
								</div>
								<h2 class="mb-4 text-[clamp(28px,3vw,40px)] font-semibold tracking-[-0.025em]">
									{s.name}
								</h2>
								<p class="mb-7 text-[18px] leading-[1.5] text-stone-700">{s.pitch}</p>
								<div class="mb-6">
									<div class="mb-3 font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
										Includes
									</div>
									<ul class="m-0 flex list-none flex-col gap-2 p-0">
										{#each s.includes as it (it)}
											<li class="flex items-start gap-3 text-[14.5px] leading-[1.5]">
												<span class="mt-[9px] size-[5px] shrink-0 rounded-full bg-accent"></span>
												<span>{it}</span>
											</li>
										{/each}
									</ul>
								</div>
								<div class="rounded-[10px] border border-line bg-stone-50 p-4">
									<div class="mb-1 font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
										Perfect for
									</div>
									<div class="text-sm leading-[1.5]">{s.perfectFor}</div>
								</div>
							</div>
						</article>
					</Reveal>
				{/each}
			</div>
		</Container>
	</section>

	<!-- verticals -->
	<section class="py-[clamp(48px,6vw,96px)]">
		<Container>
			<div class="rounded-card border border-line bg-stone-50 p-[clamp(40px,5vw,64px)]">
				<div class="grid grid-cols-2 items-start gap-14 max-[920px]:grid-cols-1">
					<div>
						<Eyebrow>Where we go deep</Eyebrow>
						<h2
							class="mt-4 max-w-[18ch] text-[clamp(32px,4.2vw,56px)] font-semibold leading-[1.02] tracking-[-0.028em]"
						>
							We have done this <span class="font-serif font-normal italic">enough times</span> in a
							few industries.
						</h2>
					</div>
					<div>
						<p class="mb-6 text-[17px] leading-[1.45] text-stone-700">
							We work across mid-market, but we’ve built playbooks for industries where the
							regulatory load and the document gravity make AI adoption hard. If you’re in one of
							these, we’ll move faster.
						</p>
						<div class="flex flex-col border-t border-line">
							{#each verticals as [t, d] (t)}
								<div
									class="grid grid-cols-[180px_1fr] items-baseline gap-6 border-b border-line py-5"
								>
									<div class="text-[15px] font-semibold">{t}</div>
									<div class="text-sm leading-normal text-stone-700">{d}</div>
								</div>
							{/each}
						</div>
					</div>
				</div>
			</div>
		</Container>
	</section>

	<!-- CTA -->
	<section class="py-[clamp(64px,8vw,128px)]">
		<Container class="text-center">
			<Reveal>
				<h2
					class="mx-auto max-w-[20ch] text-[clamp(32px,4.2vw,56px)] font-semibold leading-[1.02] tracking-[-0.028em]"
				>
					Tell us what’s broken. We’ll tell you if we can help.
				</h2>
				<p
					class="mx-auto mt-5 mb-8 max-w-[50ch] text-[clamp(18px,1.4vw,22px)] leading-[1.45] text-stone-700"
				>
					The intro call costs you 30 minutes of your time and $0. Use it.
				</p>
				<Btn
					href={BOOKING_URL}
					target="_blank"
					rel="noopener noreferrer"
					size="lg">Book a 30-min intro<Arrow /></Btn
				>
			</Reveal>
		</Container>
	</section>
</div>
