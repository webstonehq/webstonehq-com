<script lang="ts">
	import './layout.css';
	import { ModeWatcher } from 'mode-watcher';
	import favicon from '$lib/assets/webstone-mark.svg';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" type="image/svg+xml" href={favicon} /></svelte:head>

<ModeWatcher themeColors={{ light: '#FBF8EF', dark: '#15110C' }} />

{@render children()}
