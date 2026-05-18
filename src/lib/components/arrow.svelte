<script lang="ts">
	let { size = 14 }: { size?: number } = $props();
</script>

<svg
	width={size}
	height={size}
	viewBox="0 0 16 16"
	fill="none"
	aria-hidden="true"
	class="transition-transform duration-[180ms] ease-[ease] group-hover/btn:translate-x-0.5"
>
	<path
		d="M3 8h10M9 4l4 4-4 4"
		stroke="currentColor"
		stroke-width="1.5"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
</svg>
