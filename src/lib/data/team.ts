export interface TeamMember {
	name: string;
	role: string;
	city: string;
	from: string;
	bio: string;
	initials: string;
	/** Avatar gradient tint. */
	tint: string;
}

export const team: TeamMember[] = [
	{
		name: 'Sasha Bellweather',
		role: 'Founder · CEO',
		city: 'Toronto',
		from: 'Stripe, Shopify',
		bio: 'Built and shipped the first AI-grade ops tooling at two fintechs. Tired of consulting that doesn’t deploy.',
		initials: 'SB',
		tint: '#e64980'
	},
	{
		name: 'Theo Marchetti',
		role: 'Founder · CTO',
		city: 'Lisbon',
		from: 'AWS, Datadog',
		bio: 'Infra engineer who got pulled into agents in 2022 and didn’t leave. Wrote Pipestack on a flight.',
		initials: 'TM',
		tint: '#15140f'
	},
	{
		name: 'Hadley Quinn',
		role: 'Principal · Vertical lead, Finance',
		city: 'New York',
		from: 'Deloitte, KPMG',
		bio: 'Former audit partner. Speaks compliance and engineering equally. Owns our accounting playbook.',
		initials: 'HQ',
		tint: '#1f8a5b'
	},
	{
		name: 'Reza Khorasani',
		role: 'Principal · Vertical lead, Insurance',
		city: 'London',
		from: 'Lloyd’s, Munich Re',
		bio: 'Spent fifteen years in underwriting before deciding LLMs could draft the memo. Spoiler: they can.',
		initials: 'RK',
		tint: '#cba6f7'
	},
	{
		name: 'Maya Olufemi',
		role: 'Staff engineer · Agents',
		city: 'Toronto',
		from: 'Anthropic Solutions',
		bio: 'Builds the agents you talk to. Maintains our eval harness. Hates the word "prompt engineering".',
		initials: 'MO',
		tint: '#f9a826'
	},
	{
		name: 'Jonas Henriksen',
		role: 'Design lead',
		city: 'Copenhagen',
		from: 'Linear, Vercel',
		bio: 'Designs interfaces that don’t look like AI. Insists software should be quiet.',
		initials: 'JH',
		tint: '#89b4fa'
	}
];
