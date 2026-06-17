<script lang="ts">
	import { enhance } from '$app/forms';
	import { untrack } from 'svelte';
	import type { SubmitFunction } from '@sveltejs/kit';

	type FieldKey = 'name' | 'email' | 'business' | 'industry' | 'size';
	type Errors = Partial<Record<FieldKey, string>>;

	type FormResult = {
		success?: boolean;
		name?: string;
		formError?: string;
		errors?: Errors;
		values?: Partial<Record<FieldKey | 'usage' | 'goals', string>>;
	} | null;

	let { form }: { form?: FormResult } = $props();

	// One-time snapshot of the action result. The `form` prop only carries meaning on a
	// no-JS round-trip (a fresh component instance); with `enhance` we override the default
	// behaviour and drive every piece of state from the submit callback instead, so the prop
	// never updates in-place and capturing the initial value here is intentional.
	const seed = untrack(() => form) ?? {};
	let name = $state(seed.values?.name ?? '');
	let email = $state(seed.values?.email ?? '');
	let business = $state(seed.values?.business ?? '');
	let industry = $state(seed.values?.industry ?? '');
	let size = $state(seed.values?.size ?? '');
	let usage = $state(seed.values?.usage ?? '');
	let goals = $state(seed.values?.goals ?? '');
	let errors = $state<Errors>(seed.errors ?? {});
	let submitted = $state(seed.success ?? false);
	let submittedName = $state(seed.name ?? '');
	let submitting = $state(false);
	let formError = $state(seed.formError ?? '');

	const usageOptions = [
		{ value: 'none', label: 'Not yet' },
		{ value: 'little', label: 'A little — ChatGPT now & then' },
		{ value: 'some', label: 'A few tools in place' },
		{ value: 'advanced', label: 'Fairly advanced' }
	];

	const inputClass =
		'w-full rounded-[11px] border-[1.5px] border-input-border bg-input-bg px-[13px] py-3 font-body text-[14.5px] text-ink outline-none';

	function clear(field: FieldKey) {
		if (errors[field]) errors = { ...errors, [field]: undefined };
	}

	function validate(): Errors {
		const e: Errors = {};
		if (!name.trim()) e.name = 'Please add your name';
		if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) e.email = 'Enter a valid email';
		if (!business.trim()) e.business = 'Add your business name';
		if (!industry) e.industry = 'Pick one';
		if (!size) e.size = 'Pick one';
		return e;
	}

	const handleSubmit: SubmitFunction = ({ cancel }) => {
		formError = '';
		const e = validate();
		if (Object.keys(e).length > 0) {
			errors = e;
			cancel();
			return;
		}
		errors = {};
		submitting = true;

		return async ({ result, update }) => {
			submitting = false;
			if (result.type === 'success' && result.data?.success) {
				submitted = true;
				submittedName = (result.data.name as string) || name.trim().split(/\s+/)[0];
			} else if (result.type === 'failure') {
				errors = (result.data?.errors as Errors) ?? {};
				formError = (result.data?.formError as string) ?? '';
			} else {
				// redirect / error — fall back to the default handling.
				await update();
			}
		};
	};
</script>

<section id="form-anchor" class="mt-[70px] bg-[#17130F]">
	<div
		class="mx-auto grid max-w-[1140px] grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-start gap-14 px-7 py-20"
	>
		<div>
			<div class="mb-4 font-mono text-[12px] tracking-[0.08em] text-[#E89B6C] uppercase">
				Before our first call
			</div>
			<h2
				class="m-0 mb-5 font-display text-[clamp(32px,4vw,46px)] leading-[1.06] font-medium tracking-[-0.02em] text-[#FBF8EF]"
			>
				Tell us a little about your business.
			</h2>
			<p class="m-0 mb-[30px] max-w-[420px] text-[17px] leading-[1.6] text-[#B7AF9F]">
				A few quick questions about your business so we can make the intro call genuinely useful —
				not a generic sales pitch. We read every one personally and reply within two business days.
			</p>
			<ol class="m-0 flex list-none flex-col gap-4 p-0">
				<li class="flex items-start gap-[13px]">
					<span class="mt-[3px] font-mono text-[12px] text-[#E89B6C]">01</span>
					<span class="text-[14.5px] leading-[1.5] text-[#C9C2B4]"
						>We read your answers first, so we arrive at the call already understanding how your
						business runs.</span
					>
				</li>
				<li class="flex items-start gap-[13px]">
					<span class="mt-[3px] font-mono text-[12px] text-[#E89B6C]">02</span>
					<span class="text-[14.5px] leading-[1.5] text-[#C9C2B4]"
						>We set up a free 30-minute intro call at a time that suits you.</span
					>
				</li>
				<li class="flex items-start gap-[13px]">
					<span class="mt-[3px] font-mono text-[12px] text-[#E89B6C]">03</span>
					<span class="text-[14.5px] leading-[1.5] text-[#C9C2B4]"
						>On the call we talk through where AI could genuinely help — and where it can't. No
						pressure to buy anything.</span
					>
				</li>
			</ol>
		</div>

		<div
			class="rounded-[22px] border border-form-card-edge bg-form-card p-8 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)]"
		>
			{#if submitted}
				<div class="px-[6px] py-[26px] text-center">
					<div
						class="mx-auto mb-[22px] flex h-[60px] w-[60px] items-center justify-center rounded-full bg-green-soft"
					>
						<svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true">
							<path
								d="M5 12.5l4.2 4.2L19 7"
								stroke="var(--green)"
								stroke-width="2.2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</div>
					<h3 class="m-0 mb-3 font-display text-[27px] font-semibold tracking-[-0.01em] text-ink">
						Thanks, {submittedName}.
					</h3>
					<p class="m-0 mb-6 text-[15.5px] leading-[1.6] text-ink-soft">
						We've got your details — that's everything we need to make your intro call useful. We'll
						reply personally within two business days. Prefer to grab a time now?
					</p>
					<a
						href="https://webstonetechnologies.zohobookings.com/#/ai-intro"
						target="_blank"
						rel="noopener"
						class="inline-block rounded-[12px] bg-accent px-[26px] py-[14px] text-[15px] font-semibold text-on-accent no-underline"
						>Book the intro call now →</a
					>
				</div>
			{:else}
				<form method="POST" use:enhance={handleSubmit} class="flex flex-col gap-[17px]" novalidate>
					<div class="grid grid-cols-2 gap-[14px]">
						<div>
							<label for="ws-name" class="mb-[7px] block text-[12.5px] font-semibold text-ink-soft"
								>Your name</label
							>
							<input
								id="ws-name"
								name="name"
								type="text"
								bind:value={name}
								oninput={() => clear('name')}
								placeholder="Jordan Lee"
								class={inputClass}
							/>
							{#if errors.name}<div class="mt-[6px] text-[12px] text-[#C0392B]">{errors.name}</div>{/if}
						</div>
						<div>
							<label for="ws-email" class="mb-[7px] block text-[12.5px] font-semibold text-ink-soft"
								>Work email</label
							>
							<input
								id="ws-email"
								name="email"
								type="email"
								bind:value={email}
								oninput={() => clear('email')}
								placeholder="jordan@firm.com"
								class={inputClass}
							/>
							{#if errors.email}<div class="mt-[6px] text-[12px] text-[#C0392B]">
									{errors.email}
								</div>{/if}
						</div>
					</div>

					<div>
						<label for="ws-business" class="mb-[7px] block text-[12.5px] font-semibold text-ink-soft"
							>Business name</label
						>
						<input
							id="ws-business"
							name="business"
							type="text"
							bind:value={business}
							oninput={() => clear('business')}
							placeholder="Northwood Accounting"
							class={inputClass}
						/>
						{#if errors.business}<div class="mt-[6px] text-[12px] text-[#C0392B]">
								{errors.business}
							</div>{/if}
					</div>

					<div class="grid grid-cols-2 gap-[14px]">
						<div>
							<label
								for="ws-industry"
								class="mb-[7px] block text-[12.5px] font-semibold text-ink-soft">Industry</label
							>
							<select
								id="ws-industry"
								name="industry"
								bind:value={industry}
								onchange={() => clear('industry')}
								class="{inputClass} appearance-none"
							>
								<option value="">Select…</option>
								<option value="Accounting">Accounting / bookkeeping</option>
								<option value="Legal">Legal</option>
								<option value="Real estate">Real estate</option>
								<option value="Healthcare">Clinic / healthcare</option>
								<option value="Trades">Trades / construction</option>
								<option value="Retail">Retail / services</option>
								<option value="Other">Other</option>
							</select>
							{#if errors.industry}<div class="mt-[6px] text-[12px] text-[#C0392B]">
									{errors.industry}
								</div>{/if}
						</div>
						<div>
							<label for="ws-size" class="mb-[7px] block text-[12.5px] font-semibold text-ink-soft"
								>Team size</label
							>
							<select
								id="ws-size"
								name="size"
								bind:value={size}
								onchange={() => clear('size')}
								class="{inputClass} appearance-none"
							>
								<option value="">Select…</option>
								<option value="Just me">Just me</option>
								<option value="2-10">2–10</option>
								<option value="11-50">11–50</option>
								<option value="51-200">51–200</option>
								<option value="200+">200+</option>
							</select>
							{#if errors.size}<div class="mt-[6px] text-[12px] text-[#C0392B]">{errors.size}</div>{/if}
						</div>
					</div>

					<div>
						<span class="mb-[9px] block text-[12.5px] font-semibold text-ink-soft"
							>How are you using AI today?</span
						>
						<input type="hidden" name="usage" value={usage} />
						<div class="grid grid-cols-2 gap-[9px]">
							{#each usageOptions as opt (opt.value)}
								{@const selected = usage === opt.value}
								<button
									type="button"
									onclick={() => (usage = opt.value)}
									aria-pressed={selected}
									class="flex cursor-pointer items-center gap-[9px] rounded-[11px] border-[1.5px] px-3 py-[11px] text-left font-body text-[13px] leading-[1.25] text-ink transition-all duration-150 {selected
										? 'border-accent bg-accent-soft font-semibold'
										: 'border-input-border bg-input-bg font-medium'}"
								>
									<span
										class="inline-block h-[13px] w-[13px] flex-shrink-0 rounded-full {selected
											? 'border-4 border-accent'
											: 'border-2 border-pill-dot'}"
									></span>
									{opt.label}
								</button>
							{/each}
						</div>
					</div>

					<div>
						<label for="ws-goals" class="mb-[7px] block text-[12.5px] font-semibold text-ink-soft">
							What would you love AI to help with?
							<span class="font-normal text-faint">(optional)</span>
						</label>
						<textarea
							id="ws-goals"
							name="goals"
							bind:value={goals}
							rows="3"
							placeholder="e.g. cut down the hours we spend on client intake and chasing paperwork"
							class="{inputClass} resize-y"
						></textarea>
					</div>

					{#if formError}
						<div
							class="rounded-[11px] border border-[#C0392B]/40 bg-[#C0392B]/10 px-[13px] py-3 text-[13px] text-[#C0392B]"
							role="alert"
						>
							{formError}
						</div>
					{/if}

					<button
						type="submit"
						disabled={submitting}
						class="mt-1 cursor-pointer rounded-[12px] bg-accent p-[15px] text-[15.5px] font-semibold text-on-accent disabled:cursor-default disabled:opacity-70"
						>{submitting ? 'Sending…' : 'Request an intro call →'}</button
					>
					<p class="m-0 text-center text-[12px] text-faint">
						No spam, ever. We only use this to prepare for your intro call.
					</p>
				</form>
			{/if}
		</div>
	</div>
</section>
