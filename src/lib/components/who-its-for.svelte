<script lang="ts">
	const industries = [
		'Accountants & bookkeepers',
		'Law firms',
		'Real estate',
		'Clinics & healthcare',
		'Trades & construction',
		'Retail & services'
	];
</script>

<section id="what-anchor" class="mx-auto max-w-[1140px] px-7 pt-[70px] pb-5">
	<div class="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] items-start gap-10">
		<div>
			<div class="mb-[14px] font-mono text-[12px] tracking-[0.08em] text-accent uppercase">
				Who it's for
			</div>
			<h2
				class="m-0 mb-4 font-display text-[clamp(28px,3.2vw,38px)] leading-[1.1] font-medium tracking-[-0.015em]"
			>
				Built for businesses that don't have a tech team.
			</h2>
			<p class="m-0 mb-6 text-[16.5px] leading-[1.6] text-ink-soft">
				If you run a practice or a local business and keep hearing you "should be using AI" — but
				have no idea where to start — that's exactly who we help.
			</p>
			<div class="flex flex-wrap gap-[10px]">
				{#each industries as industry (industry)}
					<span
						class="rounded-[30px] border border-border-2 bg-surface px-[15px] py-[9px] text-[14px] font-medium"
						>{industry}</span
					>
				{/each}
			</div>
		</div>

		<figure class="m-0 rounded-[20px] border border-accent-border bg-accent-soft p-[30px]">
			<div class="h-[26px] font-display text-[54px] leading-[0.6] text-accent" aria-hidden="true">
				&ldquo;
			</div>
			<blockquote
				class="m-0 mb-5 font-display text-[21px] leading-[1.4] tracking-[-0.01em] text-quote-ink"
			>
				We knew AI could help but had no idea where to start. Webstone gave us a plain-English plan
				and had our team using it within weeks.
			</blockquote>
			<figcaption class="flex items-center gap-3">
				<span
					class="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-accent text-[15px] font-semibold text-on-accent"
					>MA</span
				>
				<span>
					<span class="block text-[14.5px] font-bold">Mira Adesanya</span>
					<span class="block text-[13px] text-muted">COO, Northwood Accounting</span>
				</span>
			</figcaption>
		</figure>
	</div>
</section>
