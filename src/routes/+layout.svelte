<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Nav from '$lib/components/nav.svelte';
	import Footer from '$lib/components/footer.svelte';
	import { ModeWatcher } from 'mode-watcher';

	let { children } = $props();
</script>

<!-- Follows the OS, persists an explicit choice, injects the no-FOUC head
     script, and keeps <meta name="theme-color"> in sync. Adds the `dark` class
     that layout.css's @custom-variant + .dark token overrides key off. -->
<ModeWatcher themeColors={{ dark: '#100f0d', light: '#faf9f6' }} />

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta
		name="description"
		content="Webstone Technologies helps mid-market teams put AI to work where it moves the number — fixed-shape engagements, shipped in weeks, not pilots that die in a slide deck."
	/>
</svelte:head>

<Nav />
<main>
	{@render children()}
</main>
<Footer />
