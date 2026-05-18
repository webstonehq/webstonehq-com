export interface CaseStudy {
	id: string;
	client: string;
	sector: string;
	year: string;
	engagement: string;
	title: string;
	summary: string;
	/** [value, label] pairs. */
	metrics: [string, string][];
	/** [heading, paragraph] pairs. */
	body: [string, string][];
	quote: { text: string; who: string; role: string };
	/** Per-case accent used for metrics + quote mark. */
	accent: string;
}

export const cases: CaseStudy[] = [
	{
		id: 'kernstein',
		client: 'Kern/Stein',
		sector: 'Accounting · 240 staff',
		year: '2025',
		engagement: 'Discovery + Custom agent',
		title: 'A first-look AI workflow that reads incoming tax docs in 3 seconds.',
		summary:
			'Document intake at a top-200 accounting firm went from a 9-minute manual review to a 3-second triage, with a human in the loop only where it matters.',
		metrics: [
			['72%', 'reduction in document intake time'],
			['$1.4M', 'projected annual savings'],
			['9 days', 'from kickoff to first production trace']
		],
		body: [
			[
				'The problem',
				'Kern/Stein receives ~14,000 client documents during tax season. Junior staff were burning weeks just sorting, naming, and routing — before any actual accounting could happen.'
			],
			[
				'What we did',
				'We embedded with two intake specialists for a week, mapped every decision they made, then built a custom agent that classifies, OCRs, names, and routes incoming documents to the right return — flagging the ambiguous 4% for human review.'
			],
			[
				'What shipped',
				'A Slack-native intake bot, a review queue with single-key actions, and an audit trail their compliance team signed off on. The whole thing runs on their existing Azure tenant.'
			]
		],
		quote: {
			text: 'I thought we were buying a six-month project. They had something my partners actually used in nine days. The hard part was getting people to stop sorting docs manually out of habit.',
			who: 'David Kern',
			role: 'Managing Partner, Kern/Stein'
		},
		accent: '#e64980'
	},
	{
		id: 'paloma',
		client: 'Paloma',
		sector: 'Specialty insurance · mid-market',
		year: '2025',
		engagement: 'Agents + Platform',
		title: 'Underwriter copilot that drafts the rationale, every time.',
		summary:
			'Paloma’s underwriters were spending 40% of their day writing the same kind of memo. We built a copilot that drafts it from the submission, citing every clause.',
		metrics: [
			['3.1×', 'quotes per underwriter per day'],
			['18min', 'average time to first draft (was 90min)'],
			['100%', 'memos with traceable source citations']
		],
		body: [
			[
				'The problem',
				'Underwriters were drowning in submission packets and producing inconsistent rationales. New hires took six months to reach productivity. Senior staff were doing junior work.'
			],
			[
				'What we did',
				'We ingested two years of approved-and-declined submissions and built a copilot that reads a new submission, drafts the rationale, and cites the exact clauses and prior bindings it leaned on.'
			],
			[
				'What shipped',
				'An Outlook-integrated copilot, a feedback loop where every accept/edit/reject tunes the eval suite, and a dashboard their head of underwriting actually checks every morning.'
			]
		],
		quote: {
			text: 'We thought AI meant replacing the easy stuff. The bigger win was that our senior underwriters could finally do senior work. New hires hit productivity in six weeks instead of six months.',
			who: 'Stefan Lichtenberg',
			role: 'Head of Underwriting, Paloma'
		},
		accent: '#1f8a5b'
	},
	{
		id: 'outpace',
		client: 'Outpace',
		sector: 'B2B logistics · 80 staff',
		year: '2024',
		engagement: 'Workflow redesign + Enablement',
		title: 'Killed three apps before adding any AI. Then added the right one.',
		summary:
			'Sometimes the best AI project is the one that doesn’t happen. We redesigned the workflow first, then added one agent.',
		metrics: [
			['41hr', 'weekly hours returned to the ops team'],
			['3', 'SaaS subscriptions retired'],
			['1', 'agent shipped — instead of the seven they planned']
		],
		body: [
			[
				'The problem',
				'Ops team was using seven tools to do one job: get a shipment from quote to delivery. Each tool had its own login, its own format, and its own incompatibility with the next.'
			],
			[
				'What we did',
				'We did a two-week time-and-motion study, killed three of the tools outright, and consolidated the remaining workflow into one queue. Only then did we add an AI agent — for the one task that actually needed it.'
			],
			[
				'What shipped',
				'A redesigned ops queue, a single dispatch agent that handles exception routing, and a written playbook the team uses to onboard new dispatchers in a week.'
			]
		],
		quote: {
			text: 'I came in asking for an AI project. They told me I didn’t need one yet. Six weeks later we’d cut 41 hours a week of busywork without buying a single API call.',
			who: 'Renata Ortiz',
			role: 'COO, Outpace'
		},
		accent: '#15140f'
	}
];

export const getCase = (id: string): CaseStudy | undefined => cases.find((c) => c.id === id);
