import { fail } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import type { Actions } from './$types';

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

const USAGE_LABELS: Record<string, string> = {
	none: 'Not yet',
	little: 'A little — ChatGPT now & then',
	some: 'A few tools in place',
	advanced: 'Fairly advanced'
};

const SEND_ERROR =
	'Something went wrong sending your details. Please try again, or email ai@webstonehq.com.';

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const value = (key: string) => (data.get(key) ?? '').toString().trim();

		const name = value('name');
		const email = value('email');
		const business = value('business');
		const industry = value('industry');
		const size = value('size');
		const usage = value('usage');
		const goals = value('goals');

		// Echo submitted values back so the form can repopulate without JS.
		const values = { name, email, business, industry, size, usage, goals };

		// Server-side validation mirrors the client checks.
		const errors: Record<string, string> = {};
		if (!name) errors.name = 'Please add your name';
		if (!EMAIL_RE.test(email)) errors.email = 'Enter a valid email';
		if (!business) errors.business = 'Add your business name';
		if (!industry) errors.industry = 'Pick one';
		if (!size) errors.size = 'Pick one';
		if (Object.keys(errors).length > 0) {
			return fail(400, { errors, values });
		}

		const webhookUrl = env.DISCORD_WEBHOOK_URL;
		if (!webhookUrl) {
			return fail(500, {
				values,
				formError: 'The form isn’t configured yet. Please email ai@webstonehq.com instead.'
			});
		}

		const payload = {
			username: 'Webstone site',
			embeds: [
				{
					title: 'New intro-call request',
					color: 0xc0532e,
					timestamp: new Date().toISOString(),
					fields: [
						{ name: 'Name', value: name, inline: true },
						{ name: 'Work email', value: email, inline: true },
						{ name: 'Business', value: business, inline: true },
						{ name: 'Industry', value: industry, inline: true },
						{ name: 'Team size', value: size, inline: true },
						{ name: 'AI usage today', value: USAGE_LABELS[usage] ?? 'Not specified', inline: true },
						{ name: 'Goals', value: goals ? goals.slice(0, 1024) : '—' }
					]
				}
			]
		};

		try {
			const res = await fetch(webhookUrl, {
				method: 'POST',
				headers: { 'content-type': 'application/json' },
				body: JSON.stringify(payload)
			});
			if (!res.ok) {
				return fail(502, { values, formError: SEND_ERROR });
			}
		} catch {
			return fail(502, { values, formError: SEND_ERROR });
		}

		return { success: true, name: name.split(/\s+/)[0] };
	}
};
