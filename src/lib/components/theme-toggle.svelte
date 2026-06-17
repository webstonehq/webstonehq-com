<script lang="ts">
	import { mode, toggleMode } from 'mode-watcher';
</script>

<button
	type="button"
	onclick={toggleMode}
	aria-label="Toggle {mode.current === 'dark' ? 'light' : 'dark'} mode"
	class="flex h-9 w-9 items-center justify-center rounded-[9px] border border-border-2 bg-surface text-ink-soft"
>
	{#if mode.current === 'dark'}
		<!-- Sun: switch back to light -->
		<svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
			<circle cx="12" cy="12" r="4.2" stroke="currentColor" stroke-width="1.7" />
			<path
				d="M12 2.5v2.4M12 19.1v2.4M21.5 12h-2.4M4.9 12H2.5M18.7 5.3l-1.7 1.7M7 17l-1.7 1.7M18.7 18.7L17 17M7 7L5.3 5.3"
				stroke="currentColor"
				stroke-width="1.7"
				stroke-linecap="round"
			/>
		</svg>
	{:else}
		<!-- Moon: switch to dark -->
		<svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
			<path
				d="M20 13.5A8 8 0 0110.5 4a7 7 0 109.5 9.5z"
				stroke="currentColor"
				stroke-width="1.7"
				stroke-linejoin="round"
			/>
		</svg>
	{/if}
</button>
