<script lang="ts">
	import type { Snippet } from 'svelte';

	type Variant = 'solid' | 'ghost' | 'accent';
	type Size = 'md' | 'lg' | 'sm';

	let {
		href,
		type = 'button',
		variant = 'solid',
		size = 'md',
		class: klass = '',
		onclick,
		children,
		...rest
	}: {
		href?: string;
		type?: 'button' | 'submit';
		variant?: Variant;
		size?: Size;
		class?: string;
		onclick?: (e: MouseEvent) => void;
		children: Snippet;
		[key: string]: unknown;
	} = $props();

	const base =
		'group/btn inline-flex items-center gap-2 rounded-full font-medium tracking-[-0.005em] transition-[transform,background,color] duration-[120ms] ease-[ease] hover:-translate-y-px';

	const sizes: Record<Size, string> = {
		md: 'h-10 px-4 text-sm',
		lg: 'h-12 px-[22px] text-[15px]',
		sm: 'h-8 px-3 text-[13px]'
	};

	const variants: Record<Variant, string> = {
		solid: 'border border-ink bg-ink text-paper',
		ghost: 'border border-line-strong bg-transparent text-ink hover:border-ink',
		accent: 'border border-accent bg-accent text-white hover:border-accent-ink hover:bg-accent-ink'
	};

	const cls = $derived(`${base} ${sizes[size]} ${variants[variant]} ${klass}`);
</script>

{#if href}
	<a {href} class={cls} {...rest}>{@render children()}</a>
{:else}
	<button {type} class={cls} {onclick} {...rest}>{@render children()}</button>
{/if}
