<script lang="ts">
	let {
		width = 17,
		height = 20
	}: {
		width?: number;
		height?: number;
	} = $props();

	// Unique gradient id so multiple marks on one page don't collide.
	const uid = $props.id();
</script>

<svg {width} {height} viewBox="0 0 428.7 500" fill="none" aria-hidden="true">
	<defs>
		<linearGradient
			id="ws-mark-{uid}"
			x1="-87"
			x2="446"
			y1="33"
			y2="415"
			gradientUnits="userSpaceOnUse"
		>
			<stop offset="0" stop-color="#ffffff" />
			<stop offset="1" stop-color="#e64980" />
		</linearGradient>
	</defs>
	<path
		d="M199.5,500L11.3,362.2C4.2,357,0,348.7,0,339.9V154.4l199.5,146V500z M229.2,500l188.2-137.7c7.1-5.2,11.3-13.5,11.3-22.3V154.4L229.2,300.5V500z M198.8,4.8L14.2,130.8l199.5,146l.7-.5l.7.5l199.5-146L229.9,4.8C220.5-1.6,208.2-1.6,198.8,4.8z"
		fill="url(#ws-mark-{uid})"
	/>
</svg>
