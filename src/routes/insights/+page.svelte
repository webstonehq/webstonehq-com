<script lang="ts">
	import { posts, postKinds, type PostKind } from '$lib/data/posts';
	import Arrow from '$lib/components/arrow.svelte';
	import Eyebrow from '$lib/components/eyebrow.svelte';
	import StoneMark from '$lib/components/stone-mark.svelte';
	import Container from '$lib/components/container.svelte';
	import Btn from '$lib/components/btn.svelte';
	import Reveal from '$lib/components/reveal.svelte';

	let filter = $state<'All' | PostKind>('All');
	const filtered = $derived(filter === 'All' ? posts : posts.filter((p) => p.kind === filter));
	const featured = $derived(filtered[0]);
	const rest = $derived(filtered.slice(1));

	let email = $state('');
	let subscribed = $state(false);

	const cardShell =
		'rounded-card border border-line bg-paper transition-[border-color,transform] duration-150 hover:border-line-strong';
</script>

<svelte:head>
	<title>Insights — Webstone Technologies</title>
	<meta
		name="description"
		content="Notes from the engagements we’re allowed to talk about. Essays, playbooks, and notes on shipping AI in the mid-market."
	/>
</svelte:head>

<div class="animate-fade-in">
	<section class="pt-24 pb-8">
		<Container>
			<Reveal><Eyebrow>Insights</Eyebrow></Reveal>
			<Reveal delay={80}>
				<h1
					class="mt-6 max-w-[22ch] text-[clamp(44px,7vw,96px)] font-semibold leading-[0.98] tracking-[-0.035em]"
				>
					What we’ve <span class="font-serif font-normal tracking-[-0.02em] italic">learned</span>
					shipping AI.
				</h1>
			</Reveal>
			<Reveal delay={160}>
				<p class="mt-7 max-w-[60ch] text-[clamp(18px,1.4vw,22px)] leading-[1.45] text-stone-700">
					Notes from the engagements we’re allowed to talk about. We publish when we have something
					earned — not on a calendar.
				</p>
			</Reveal>
		</Container>
	</section>

	<!-- filter pills -->
	<section class="pb-8">
		<Container>
			<div class="flex flex-wrap items-center gap-2 border-b border-line pb-6">
				{#each postKinds as k (k)}
					<button
						onclick={() => (filter = k)}
						class="rounded-full border px-3.5 py-1.5 text-[13px] font-medium {filter === k
							? 'border-ink bg-ink text-paper'
							: 'border-line-strong bg-transparent text-stone-700'}"
					>
						{k}
					</button>
				{/each}
				<span class="ml-auto font-mono text-xs text-muted">
					{filtered.length}
					{filtered.length === 1 ? 'post' : 'posts'}
				</span>
			</div>
		</Container>
	</section>

	<!-- featured -->
	{#if featured}
		<section class="pb-16">
			<Container>
				<Reveal>
					<article
						class="grid grid-cols-[1.2fr_1fr] items-center gap-14 {cardShell} p-[clamp(32px,4vw,56px)] max-[920px]:grid-cols-1"
					>
						<div>
							<div class="mb-6 flex flex-wrap items-center gap-3">
								<span
									class="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/[0.08] px-2.5 py-1 font-mono text-xs whitespace-nowrap text-accent"
								>
									{featured.kind}
								</span>
								<span class="font-mono text-xs text-muted">
									{featured.date} · {featured.read}
								</span>
							</div>
							<h2
								class="mb-6 max-w-[18ch] text-[clamp(28px,3.4vw,44px)] font-semibold tracking-[-0.025em]"
							>
								{featured.title}
							</h2>
							<p class="text-[17px] leading-[1.45] text-stone-700">{featured.excerpt}</p>
							<div class="mt-8 flex flex-wrap items-center gap-3">
								<span class="text-[13.5px]">{featured.author}</span>
								<span class="ml-auto inline-flex items-center gap-1.5 text-[13.5px] text-muted">
									Read essay<Arrow size={12} />
								</span>
							</div>
						</div>
						<div
							class="relative aspect-[4/3] overflow-hidden rounded-[14px] bg-[linear-gradient(135deg,#15140f_0%,#2a1620_100%)]"
						>
							<div class="absolute inset-0 flex items-center justify-center opacity-60">
								<StoneMark size={220} />
							</div>
							<div class="absolute bottom-6 left-6 font-mono text-[11px] text-paper opacity-60">
								essay · 001
							</div>
						</div>
					</article>
				</Reveal>
			</Container>
		</section>
	{/if}

	<!-- rest -->
	<section class="pb-24">
		<Container>
			<div class="grid grid-cols-3 gap-6 max-[920px]:grid-cols-2 max-[640px]:grid-cols-1">
				{#each rest as p (p.id)}
					<Reveal class="h-full">
						<article class="flex h-full flex-col {cardShell} p-7">
							<div class="mb-5 flex flex-wrap items-center gap-3">
								<span
									class="inline-flex items-center gap-1.5 rounded-full border border-line-strong px-2.5 py-1 font-mono text-xs whitespace-nowrap text-stone-700"
								>
									{p.kind}
								</span>
								<span class="ml-auto font-mono text-[11px] text-muted">{p.read}</span>
							</div>
							<h3 class="mb-3 text-[20px] font-semibold leading-[1.2] tracking-[-0.015em]">
								{p.title}
							</h3>
							<p class="flex-1 text-sm leading-[1.55] text-muted">{p.excerpt}</p>
							<div
								class="mt-6 flex items-center justify-between border-t border-line pt-4 font-mono text-xs text-muted"
							>
								<span>{p.author}</span>
								<span>{p.date}</span>
							</div>
						</article>
					</Reveal>
				{/each}
			</div>
		</Container>
	</section>

	<!-- subscribe -->
	<section class="pt-12 pb-24">
		<Container>
			<div class="flex flex-col items-start gap-4 {cardShell} p-[clamp(32px,4vw,56px)]">
				<div class="flex w-full flex-wrap items-start justify-between gap-6">
					<div class="max-w-[420px]">
						<Eyebrow>Newsletter</Eyebrow>
						<h3 class="mt-3 text-[24px] font-semibold tracking-[-0.02em]">
							One short note every few weeks. No filler.
						</h3>
						<p class="mt-2 text-sm text-muted">1,800+ people read it.</p>
					</div>
					{#if subscribed}
						<div
							class="flex max-w-[480px] min-w-[300px] flex-1 flex-wrap items-center gap-2.5 text-[15px]"
						>
							<span class="size-2 shrink-0 rounded-full bg-good"></span>
							<span>You’re on the list. Watch for the next one.</span>
						</div>
					{:else}
						<form
							onsubmit={(e) => {
								e.preventDefault();
								subscribed = true;
							}}
							class="flex max-w-[480px] min-w-[300px] flex-1 gap-2"
						>
							<input
								type="email"
								required
								bind:value={email}
								placeholder="you@company.com"
								class="h-12 flex-1 rounded-full border border-line-strong bg-paper px-4 font-sans text-[15px] outline-none"
							/>
							<Btn type="submit" size="lg">Subscribe<Arrow /></Btn>
						</form>
					{/if}
				</div>
			</div>
		</Container>
	</section>
</div>
