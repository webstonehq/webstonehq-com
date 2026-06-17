<script lang="ts">
	import SiteNav from '$lib/components/site-nav.svelte';
	import Hero from '$lib/components/hero.svelte';
	import ValueStrip from '$lib/components/value-strip.svelte';
	import HowItWorks from '$lib/components/how-it-works.svelte';
	import WhoItsFor from '$lib/components/who-its-for.svelte';
	import ContactForm from '$lib/components/contact-form.svelte';
	import SiteFooter from '$lib/components/site-footer.svelte';
	import type { PageProps } from './$types';

	let { form }: PageProps = $props();

	const title = 'Webstone Technologies — Bring AI into your business, the practical way';
	const description =
		'We help accountants, law firms, and local businesses find where AI genuinely saves time — then help you put it to work. No jargon, no hype, just a clear plan.';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div id="top" class="min-h-screen overflow-x-hidden bg-paper font-body text-ink">
	<SiteNav />
	<main>
		<Hero />
		<ValueStrip />
		<HowItWorks />
		<WhoItsFor />
		<ContactForm {form} />
	</main>
	<SiteFooter />
</div>
