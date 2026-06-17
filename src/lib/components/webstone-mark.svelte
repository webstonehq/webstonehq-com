<script lang="ts">
	// Single source of truth for the brand mark — the same SVG file the favicon uses.
	import mark from '$lib/assets/webstone-mark.svg';

	let { class: className = 'h-7 w-auto' }: { class?: string } = $props();
</script>

<img src={mark} alt="" class={className} />
