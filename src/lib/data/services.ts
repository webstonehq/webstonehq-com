export type GlyphName =
	| 'onramp'
	| 'discovery'
	| 'agents'
	| 'product'
	| 'rag'
	| 'enablement'
	| 'change'
	| 'platform';

export interface Service {
	id: string;
	glyph: GlyphName;
	name: string;
	/** Short pill shown on the home preview grid. */
	tag: string;
	/** Home preview blurb. */
	blurb: string;
	/** Services page timeline pill. */
	timeline: string;
	/** Services page lead paragraph. */
	pitch: string;
	includes: string[];
	perfectFor: string;
}

export const services: Service[] = [
  {
		id: 'discovery',
		glyph: 'discovery',
		name: 'Discovery sprint',
		tag: '2 weeks',
		blurb:
			'Two weeks. We map your workflows, find the AI-shaped holes, and ship a working prototype before we leave.',
		timeline: '2 weeks · fixed price',
		pitch:
			'Two weeks. We map your workflows, find the AI-shaped holes, and ship a working prototype before we leave.',
		includes: [
			'Half-day shadow sessions with 4–6 employees',
			'Workflow map + ROI-ranked opportunity list',
			'One working prototype, not slides',
			'A go/no-go recommendation we’ll stake our name on'
		],
		perfectFor: 'Teams that have a vague mandate from the top and no idea where to start.'
	},
	{
		id: 'change',
		glyph: 'change',
		name: 'Workflow redesign',
		tag: '4 weeks',
		blurb:
			'Before we add AI, we cut the work that shouldn’t exist. The biggest wins live here.',
		timeline: '4 weeks',
		pitch:
			'Before we add AI, we cut the work that shouldn’t exist. The biggest wins almost always live here.',
		includes: [
			'Time-and-motion study of the target workflow',
			'Redesign with measurable handoff and queue metrics',
			'Pilot rollout to one team, with weekly checkpoints',
			'Change-management plan for the broader rollout'
		],
		perfectFor: 'Teams whose problem looks like AI but is actually a process problem.'
	},
	{
		id: 'enablement',
		glyph: 'enablement',
		name: 'Team enablement',
		tag: 'ongoing',
		blurb:
			'Workshops + 1:1 coaching for the people who have to use this on Monday. No vague "AI literacy" decks.',
		timeline: 'Ongoing · monthly retainer',
		pitch:
			'Workshops and 1:1 coaching for the people who actually have to use this on Monday. No vague "AI literacy" decks.',
		includes: [
			'Role-specific workshops (engineering, sales, ops, finance)',
			'Office hours for the messy in-between questions',
			'Curated prompt library that grows with the team',
			'Quarterly skills assessment and refresh'
		],
		perfectFor: 'Orgs that bought ChatGPT Enterprise and discovered usage was 14%.'
	},
	{
		id: 'onramp',
		glyph: 'onramp',
		name: 'AI Onramp',
		tag: '3 weeks',
		blurb:
			'For teams who decided to "do AI" a year ago and haven’t typed a single character. Tooling, policy, first three workflows live in three weeks.',
		timeline: '3 weeks · fixed price',
		pitch:
			'For teams who decided to "do AI" a year ago and still haven’t typed a single character. We get the tooling, the policies, and the first three workflows live — and your leadership ready to back it.',
		includes: [
			'Tooling rollout (Claude / ChatGPT Enterprise / Copilot) with SSO and DLP',
			'Acceptable-use policy your legal team will actually sign',
			'Three role-specific kickoff workshops, run by us',
			'A curated prompt library and three pilot workflows shipping by week three'
		],
		perfectFor:
			'Companies whose AI strategy has so far consisted of a Slack channel and a few brave individuals.'
	},
	{
		id: 'agents',
		glyph: 'agents',
		name: 'Custom agents',
		tag: '4–8 weeks',
		blurb:
			'Production agents wired into your systems — Slack, CRMs, ERPs — with eval suites and guardrails.',
		timeline: '4–8 weeks · scoped per agent',
		pitch:
			'Production agents wired into your systems — Slack, CRMs, ERPs — with eval suites, guardrails, and the boring observability ops people actually need.',
		includes: [
			'Agent built against your real data and tools',
			'Eval suite with golden outputs you control',
			'Slack / email / inline integration',
			'Runbook + on-call playbook'
		],
		perfectFor:
			'Teams who tried Copilot, found it underwhelming, and need something tuned to their work.'
	},
	{
		id: 'product',
		glyph: 'product',
		name: 'Product development',
		tag: '8–16 weeks',
		blurb:
			'When the tool you need doesn’t exist, we build it. End-to-end: discovery, design, engineering, ship. AI where it earns its place.',
		timeline: '8–16 weeks · scoped per build',
		pitch:
			'When the tool you need doesn’t exist, we build it. End-to-end: discovery, design, engineering, ship. AI capabilities included where they earn their place — not as decoration.',
		includes: [
			'Discovery + technical spike to de-risk the bet before the build',
			'Design and engineering by senior employees who’ve shipped before',
			'AI woven in only where it measurably beats the deterministic version',
			'A working v1 your team can operate — or we keep operating, on retainer'
		],
		perfectFor: 'Teams who’ve outgrown off-the-shelf and know exactly what should exist.'
	},
	{
		id: 'rag',
		glyph: 'rag',
		name: 'Knowledge & RAG',
		tag: '3–6 weeks',
		blurb:
			'Internal knowledge bases that actually answer the question. Versioned, evaluated, and on your infra.',
		timeline: '3–6 weeks',
		pitch:
			'Internal knowledge bases that actually answer the question. Versioned, evaluated, and running on your infra.',
		includes: [
			'Ingestion pipeline for your docs, tickets, code, and chat',
			'Retrieval eval harness — measured, not vibes',
			'Citation-grade answers with source links',
			'Permissioning that respects your existing ACLs'
		],
		perfectFor: 'Companies where the answer exists, somewhere, in 14 different tools.'
	},
	{
		id: 'platform',
		glyph: 'platform',
		name: 'AI platform setup',
		tag: '6 weeks',
		blurb:
			'Eval harness, prompt registry, observability, model routing. So your next ten agents take a week, not a quarter.',
		timeline: '6 weeks',
		pitch:
			'Eval harness, prompt registry, observability, model routing. So your next ten agents take a week, not a quarter.',
		includes: [
			'Provider-agnostic model router (OpenAI / Anthropic / Bedrock / OSS)',
			'Prompt + agent registry with versioning and review',
			'Observability: tracing, evals, cost dashboards',
			'Cost & quota governance per team'
		],
		perfectFor: 'Companies past their second agent who can feel the platform tax coming.'
	}
];
