import { fail, type Actions } from '@sveltejs/kit';

// Discord webhook target. Server-side only — never shipped to the client.
// Move to a secret (`wrangler secret put DISCORD_CONTACT_WEBHOOK`) +
// `$env/static/private` if you'd rather not commit it.
const WEBHOOK_URL =
	'https://discord.com/api/webhooks/1507611624549257216/LTVXshsXqSSRcykpPFFqeHxw_ckJATaQtZX2tXD_yYOEWCXgSdZymzDBisf4iINCVVAr';

// Discord embed field values cap at 1024 chars; titles/descriptions higher.
const cap = (s: string, n: number) => (s.length > n ? s.slice(0, n - 1) + '…' : s);

function str(data: FormData, key: string): string {
	const v = data.get(key);
	return typeof v === 'string' ? v.trim() : '';
}

export const actions: Actions = {
	default: async ({ request, getClientAddress }) => {
		const data = await request.formData();

		const name = str(data, 'name');
		const email = str(data, 'email');
		const company = str(data, 'company');
		const size = str(data, 'size');
		const timeline = str(data, 'timeline');
		const topic = str(data, 'topic');
		const message = str(data, 'message');

		// Honeypot — silently succeed if a bot filled it.
		if (str(data, 'website')) return { success: true };

		const errors: Record<string, string> = {};
		if (!name) errors.name = 'Required';
		if (!email) errors.email = 'Required';
		else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Looks off';

		if (Object.keys(errors).length) {
			return fail(400, { errors, values: { name, email, company, message } });
		}

		const fields = [
			{ name: 'Name', value: cap(name, 1024), inline: true },
			{ name: 'Email', value: cap(email, 1024), inline: true },
			company && { name: 'Company', value: cap(company, 1024), inline: true },
			size && { name: 'Team size', value: size, inline: true },
			timeline && { name: 'Timeline', value: timeline, inline: true },
			topic && { name: 'Interested in', value: topic, inline: true },
			message && { name: 'Situation', value: cap(message, 1024), inline: false }
		].filter(Boolean);

		const payload = {
			username: 'webstone.tech',
			embeds: [
				{
					title: 'New contact form submission',
					color: 0xe85c2e, // accent-ish
					fields,
					timestamp: new Date().toISOString(),
					footer: { text: `from ${getClientAddress?.() ?? 'unknown'}` }
				}
			]
		};

		try {
			const res = await fetch(WEBHOOK_URL, {
				method: 'POST',
				headers: { 'content-type': 'application/json' },
				body: JSON.stringify(payload)
			});

			if (!res.ok) {
				const body = await res.text().catch(() => '');
				console.error('Discord webhook failed', res.status, body);
				return fail(502, {
					error: "We couldn't deliver your message. Please email support@webstonehq.com.",
					values: { name, email, company, message }
				});
			}
		} catch (err) {
			console.error('Discord webhook threw', err);
			return fail(502, {
				error: "We couldn't deliver your message. Please email support@webstonehq.com.",
				values: { name, email, company, message }
			});
		}

		return { success: true };
	}
};
