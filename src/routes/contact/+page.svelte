<script lang="ts">
	import Arrow from '$lib/components/arrow.svelte';
	import Eyebrow from '$lib/components/eyebrow.svelte';
	import StoneMark from '$lib/components/stone-mark.svelte';
	import Field from '$lib/components/field.svelte';
	import Container from '$lib/components/container.svelte';
	import Btn from '$lib/components/btn.svelte';

	const inputCls =
		'h-11 w-full rounded-[10px] border border-line-strong bg-paper px-3.5 font-sans text-[14.5px] text-ink outline-none';
	const textareaCls =
		'min-h-[120px] w-full resize-y rounded-[10px] border border-line-strong bg-paper px-3.5 py-3 font-sans text-[14.5px] leading-[1.5] text-ink outline-none';
	const fieldLabel = 'mb-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-muted';

	const topics = [
		'Discovery sprint',
		'Custom agents',
		'Knowledge & RAG',
		'Enablement',
		'Platform',
		'Not sure yet'
	];

	let form = $state({
		name: '',
		email: '',
		company: '',
		size: '50–200',
		timeline: 'Within a month',
		topic: 'Discovery sprint',
		message: ''
	});
	let submitted = $state(false);
</script>

<svelte:head>
	<title>Contact — Webstone Technologies</title>
	<meta
		name="description"
		content="Tell us what’s broken. The first call is free and useful even if we never work together — thirty minutes, no deck."
	/>
</svelte:head>

<div class="animate-fade-in">
	{#if submitted}
		<section class="py-40 text-center">
			<Container>
				<StoneMark size={64} />
				<h1
					class="mx-auto mt-8 mb-6 max-w-[20ch] text-[clamp(36px,5vw,64px)] font-semibold leading-[0.98] tracking-[-0.035em]"
				>
					Got it. We’ll be in touch.
				</h1>
				<p
					class="mx-auto mb-8 max-w-[48ch] text-[clamp(18px,1.4vw,22px)] leading-[1.45] text-stone-700"
				>
					You’ll hear from a partner — not an SDR — within one business day. Usually faster.
				</p>
				<Btn variant="ghost" onclick={() => (submitted = false)}>← back to form</Btn>
			</Container>
		</section>
	{:else}
		<section class="py-24">
			<Container>
				<div class="grid grid-cols-2 items-start gap-20 max-[920px]:grid-cols-1">
					<!-- left -->
					<div>
						<Eyebrow>Contact</Eyebrow>
						<h1
							class="mt-6 max-w-[14ch] text-[clamp(40px,5.5vw,76px)] font-semibold leading-[0.98] tracking-[-0.035em]"
						>
							Tell us what’s
							<span class="font-serif font-normal tracking-[-0.02em] italic">broken</span>.
						</h1>
						<p class="mt-7 max-w-[48ch] text-[clamp(18px,1.4vw,22px)] leading-[1.45] text-stone-700">
							The first call is free and useful even if we never work together. Thirty minutes.
							You’ll leave with a sharper sense of what’s worth doing.
						</p>

						<div class="mt-14 flex flex-col gap-6 border-t border-line pt-8">
							<div>
								<div class={fieldLabel}>Email</div>
								<a href="mailto:hello@webstone.tech" class="text-[18px] font-medium"
									>hello@webstone.tech</a
								>
							</div>
							<div>
								<div class={fieldLabel}>Press</div>
								<a href="mailto:press@webstone.tech" class="text-[18px] font-medium"
									>press@webstone.tech</a
								>
							</div>
							<div>
								<div class={fieldLabel}>Cities</div>
								<div class="text-base">Toronto · Lisbon · New York · London</div>
							</div>
							<div>
								<div class={fieldLabel}>Capacity</div>
								<div class="flex items-center gap-2 text-base">
									<span class="size-2 rounded-full bg-good"></span>
									Booking June 2026
								</div>
							</div>
						</div>
					</div>

					<!-- right — form -->
					<form
						onsubmit={(e) => {
							e.preventDefault();
							submitted = true;
						}}
						class="flex flex-col gap-5 rounded-card border border-line bg-paper p-8"
					>
						<div class="grid grid-cols-2 gap-4 max-[920px]:grid-cols-1">
							<Field label="Your name" required>
								<input bind:value={form.name} required type="text" class={inputCls} />
							</Field>
							<Field label="Work email" required>
								<input bind:value={form.email} required type="email" class={inputCls} />
							</Field>
						</div>
						<Field label="Company">
							<input bind:value={form.company} type="text" class={inputCls} />
						</Field>
						<div class="grid grid-cols-2 gap-4 max-[920px]:grid-cols-1">
							<Field label="Team size">
								<select bind:value={form.size} class={inputCls}>
									<option>1–50</option>
									<option>50–200</option>
									<option>200–1000</option>
									<option>1000+</option>
								</select>
							</Field>
							<Field label="Timeline">
								<select bind:value={form.timeline} class={inputCls}>
									<option>Within a month</option>
									<option>This quarter</option>
									<option>This year</option>
									<option>Just exploring</option>
								</select>
							</Field>
						</div>
						<Field label="Most interested in">
							<div class="flex flex-wrap items-center gap-2">
								{#each topics as t (t)}
									<button
										type="button"
										onclick={() => (form.topic = t)}
										class="rounded-full border px-3.5 py-2 text-[13px] {form.topic === t
											? 'border-ink bg-ink text-paper'
											: 'border-line-strong bg-transparent text-ink'}"
									>
										{t}
									</button>
								{/each}
							</div>
						</Field>
						<Field
							label="What’s the situation?"
							hint="Two sentences is fine. Mostly we want to know what triggered the search."
						>
							<textarea
								bind:value={form.message}
								rows={5}
								placeholder="We’ve been talking about AI for a year. Our CFO is starting to ask. Honestly, I’m not sure where to start."
								class={textareaCls}
							></textarea>
						</Field>
						<Btn type="submit" size="lg" class="mt-1 self-start">Send it<Arrow /></Btn>
						<p class="mt-1 text-[12.5px] text-muted">
							We reply within one business day. No SDR follow-ups. Promise.
						</p>
					</form>
				</div>
			</Container>
		</section>
	{/if}
</div>
