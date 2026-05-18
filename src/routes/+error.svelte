<script lang="ts">
	import { page } from '$app/state';
	import StoneMark from '$lib/components/stone-mark.svelte';
	import Arrow from '$lib/components/arrow.svelte';
	import Container from '$lib/components/container.svelte';
	import Btn from '$lib/components/btn.svelte';

	const status = $derived(page.status);
	const message = $derived(page.error?.message ?? 'Something went wrong.');
</script>

<svelte:head>
	<title>{status} — Webstone Technologies</title>
</svelte:head>

<div class="animate-fade-in">
	<section class="py-40 text-center">
		<Container>
			<StoneMark size={56} />
			<div class="mt-8 font-mono text-[13px] text-muted">Error {status}</div>
			<h1
				class="mx-auto mt-4 mb-6 max-w-[18ch] text-[clamp(36px,5vw,64px)] font-semibold leading-[0.98] tracking-[-0.035em]"
			>
				{message}
			</h1>
			<p class="mx-auto mb-8 max-w-[44ch] text-[clamp(18px,1.4vw,22px)] leading-[1.45] text-stone-700">
				That page isn’t here. The work, fortunately, still is.
			</p>
			<Btn href="/" size="lg">Back home<Arrow /></Btn>
		</Container>
	</section>
</div>
