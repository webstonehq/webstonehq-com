import type { Action } from 'svelte/action';

const HIDDEN = ['opacity-0', 'translate-y-3'];
const SHOWN = ['opacity-100', 'translate-y-0'];

/**
 * Fade-and-rise an element into view once it enters the viewport.
 * The element ships hidden (opacity-0 translate-y-3 + a transition); this
 * action swaps it to the shown utilities. No-JS / reduced-motion fall back
 * via the `[data-reveal]` rule in the base layer.
 */
export const reveal: Action<HTMLElement, { delay?: number } | undefined> = (node, params) => {
	const delay = params?.delay ?? 0;

	const show = () => {
		node.classList.remove(...HIDDEN);
		node.classList.add(...SHOWN);
	};

	if (typeof IntersectionObserver === 'undefined') {
		show();
		return;
	}

	const io = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					setTimeout(show, delay);
					io.unobserve(node);
				}
			}
		},
		{ threshold: 0.1 }
	);
	io.observe(node);

	return {
		destroy() {
			io.disconnect();
		}
	};
};
