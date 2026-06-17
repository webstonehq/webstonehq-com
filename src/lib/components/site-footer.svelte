<script lang="ts">
	import WebstoneMark from './webstone-mark.svelte';
</script>

<footer class="bg-[#100F0D] px-7 pt-14 pb-10 text-[#C9C2B4]">
	<div class="mx-auto grid max-w-[1140px] grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-10">
		<div class="max-w-[320px]">
			<div class="mb-4 flex items-center gap-[11px]">
				<span class="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1F1C18]">
					<WebstoneMark />
				</span>
				<span class="text-[16px] font-bold text-[#FBF8EF]">Webstone Technologies</span>
			</div>
			<p class="m-0 mb-[18px] text-[14px] leading-[1.6] text-[#8E877A]">
				We help everyday businesses adopt AI without the hype — a clear plan first, hands-on help
				where you want it.
			</p>
			<a href="mailto:ai@webstonehq.com" class="text-[14px] text-[#E89B6C] no-underline"
				>ai@webstonehq.com</a
			>
		</div>

		<div>
			<div class="mb-4 font-mono text-[11px] tracking-[0.06em] text-[#6B6457] uppercase">
				What we do
			</div>
			<div class="flex flex-col gap-[11px] text-[14px]">
				<span class="text-[#B7AF9F]">AI readiness check</span>
				<span class="text-[#B7AF9F]">Action plans</span>
				<span class="text-[#B7AF9F]">Team training</span>
				<span class="text-[#B7AF9F]">Hands-on implementation</span>
			</div>
		</div>

		<div>
			<div class="mb-4 font-mono text-[11px] tracking-[0.06em] text-[#6B6457] uppercase">Ready?</div>
			<a
				href="#form-anchor"
				class="inline-block rounded-[11px] bg-[#C0532E] px-5 py-3 text-[14px] font-semibold text-[#FBF8EF] no-underline"
				>Get in touch</a
			>
		</div>
	</div>

	<div
		class="mx-auto mt-10 flex max-w-[1140px] flex-wrap justify-between gap-3 border-t border-[#221F1A] pt-6 text-[12.5px] text-[#6B6457]"
	>
		<span>© 2026 Webstone Technologies Inc.</span>
		<span>Plain English · No hype · Built for real businesses</span>
	</div>
</footer>
