<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		class: klass = '',
		children
	}: { class?: string; children: Snippet } = $props();
</script>

<div class="mx-auto w-full max-w-[1240px] px-8 {klass}">
	{@render children()}
</div>
