<script lang="ts">
	import StoneMark from './stone-mark.svelte';
	import Container from './container.svelte';

	const year = new Date().getFullYear();
</script>

<footer class="mt-16 border-t border-line pt-16 pb-8">
	<Container>
		<div class="grid grid-cols-[2fr_1fr_1fr_1fr] gap-12 max-[920px]:grid-cols-2 max-[640px]:grid-cols-1">
			<div>
				<div class="mb-4 flex items-center gap-2.5 font-semibold tracking-[-0.01em]">
					<StoneMark size={28} />
					<span class="text-[17px]">Webstone<span class="font-normal text-muted">&nbsp;Technologies</span></span>
				</div>
				<p class="max-w-[360px] text-sm text-muted">
					We help mid-market teams adopt AI without burning a year on it — then build the tools
					they wished existed.
				</p>
			</div>
			<div>
				<h4 class="mb-4 font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-muted">
					Services
				</h4>
				<ul class="m-0 flex list-none flex-col gap-2 p-0 text-sm text-stone-700">
					<li><a href="/services" class="hover:text-ink">AI Onramp</a></li>
					<li><a href="/services" class="hover:text-ink">Discovery sprints</a></li>
					<li><a href="/services" class="hover:text-ink">Custom agents</a></li>
					<li><a href="/services" class="hover:text-ink">Product development</a></li>
					<li><a href="/services" class="hover:text-ink">Team enablement</a></li>
				</ul>
			</div>
			<div>
				<h4 class="mb-4 font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-muted">
					Company
				</h4>
				<ul class="m-0 flex list-none flex-col gap-2 p-0 text-sm text-stone-700">
					<li><a href="/about" class="hover:text-ink">About</a></li>
					<!-- <li><a href="/cases" class="hover:text-ink">Case studies</a></li> -->
					<!-- <li><a href="/insights" class="hover:text-ink">Insights</a></li> -->
					<li><a href="/contact" class="hover:text-ink">Contact</a></li>
				</ul>
			</div>
		</div>
		<div
			class="mt-16 flex items-center justify-between border-t border-line pt-6 font-mono text-xs text-muted"
		>
			<span>© {year} Webstone Technologies Inc.</span>
			<span>Designed by AI · Developed by AI · Reviewed by humans</span>
		</div>
	</Container>
</footer>
