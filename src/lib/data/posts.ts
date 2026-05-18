export type PostKind = 'Essay' | 'Playbook' | 'Note';

export interface Post {
	id: number;
	kind: PostKind;
	read: string;
	date: string;
	title: string;
	excerpt: string;
	author: string;
}

export const postKinds: ('All' | PostKind)[] = ['All', 'Essay', 'Playbook', 'Note'];

export const posts: Post[] = [
	{
		id: 1,
		kind: 'Essay',
		read: '8 min',
		date: 'May 14, 2026',
		title: 'The AI adoption gap is a workflow gap.',
		excerpt:
			'After thirty-eight engagements, every "AI problem" we’ve seen has been a workflow problem in a costume. Here’s the pattern.',
		author: 'Sasha Bellweather'
	},
	{
		id: 2,
		kind: 'Playbook',
		read: '14 min',
		date: 'Apr 28, 2026',
		title: 'A field guide to AI in mid-market accounting firms.',
		excerpt:
			'What works, what doesn’t, and the three engagements every CPA firm above 100 staff should run this year.',
		author: 'Hadley Quinn'
	},
	{
		id: 3,
		kind: 'Note',
		read: '4 min',
		date: 'Apr 9, 2026',
		title: 'Why we don’t do "AI strategy" decks anymore.',
		excerpt:
			'We made the mistake of selling strategy. Strategy was the consolation prize for not knowing what to build.',
		author: 'Sasha Bellweather'
	},
	{
		id: 4,
		kind: 'Essay',
		read: '11 min',
		date: 'Mar 22, 2026',
		title: 'Eval-driven development for agents.',
		excerpt:
			'You can’t ship what you can’t measure. A practical guide to setting up an eval harness before you ship your first agent.',
		author: 'Maya Olufemi'
	},
	{
		id: 5,
		kind: 'Note',
		read: '5 min',
		date: 'Mar 3, 2026',
		title: 'Three signs your RAG implementation is doomed.',
		excerpt: 'If you said yes to any of these, stop spending money and read this.',
		author: 'Theo Marchetti'
	},
	{
		id: 6,
		kind: 'Playbook',
		read: '17 min',
		date: 'Feb 12, 2026',
		title: 'How specialty insurance carriers should think about agents.',
		excerpt:
			'A playbook for underwriter copilots, claims intake, and the boring infrastructure no one talks about.',
		author: 'Reza Khorasani'
	}
];
