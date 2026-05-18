import { error } from '@sveltejs/kit';
import { getCase } from '$lib/data/cases';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const study = getCase(params.id);
	if (!study) error(404, 'Case study not found.');
	return { study };
};
