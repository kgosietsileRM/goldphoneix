import { useState } from 'preact/hooks';
import { SITE } from '../content/site.js';
import { Icon } from './Icon.jsx';

const grades = [
	'Grade 1',
	'Grade 2',
	'Grade 3',
	'Grade 4',
	'Grade 5',
	'Grade 6',
	'Grade 7',
	'Form 1',
	'Form 2',
	'Form 3',
	'Form 4',
	'Form 5',
	'Form 6',
	'Not sure yet',
];

export function EnquiryForm() {
	const [status, setStatus] = useState<'idle' | 'opened'>('idle');

	const handleSubmit = (event: Event) => {
		event.preventDefault();
		const form = event.currentTarget as HTMLFormElement;
		const data = new FormData(form);
		const parentName = String(data.get('parentName') ?? '').trim();
		const learnerName = String(data.get('learnerName') ?? '').trim();
		const email = String(data.get('email') ?? '').trim();
		const phone = String(data.get('phone') ?? '').trim();
		const grade = String(data.get('grade') ?? '').trim();
		const pathway = String(data.get('pathway') ?? '').trim();
		const message = String(data.get('message') ?? '').trim();

		const subject = `Admissions enquiry: ${learnerName || 'New learner'}${grade ? ` (${grade})` : ''}`;
		const body = [
			`Parent or guardian: ${parentName}`,
			`Learner: ${learnerName}`,
			`Email: ${email}`,
			`Phone: ${phone}`,
			`Grade or form: ${grade}`,
			`Preferred pathway: ${pathway}`,
			'',
			'Message:',
			message || 'I would like to ask about admissions at Goldphoenix Christian College.',
			'',
			'Sent from the Goldphoenix Christian College website.',
		].join('\n');

		window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
		setStatus('opened');
	};

	return (
		<div class="enquiry-card">
			<div class="enquiry-card-head">
				<p class="eyebrow">Admissions enquiry</p>
				<h2>Tell us a little about your learner.</h2>
				<p>
					Complete the form to prepare an email to the college. You can also call or email the
					admissions team directly.
				</p>
			</div>

			<form class="enquiry-form" onSubmit={handleSubmit}>
				<div class="form-row">
					<label class="field">
						<span>Parent or guardian name</span>
						<input type="text" name="parentName" autocomplete="name" required placeholder="Your full name" />
					</label>
					<label class="field">
						<span>Learner’s name</span>
						<input type="text" name="learnerName" autocomplete="off" required placeholder="Learner’s full name" />
					</label>
				</div>

				<div class="form-row">
					<label class="field">
						<span>Email address</span>
						<input type="email" name="email" autocomplete="email" required placeholder="you@example.com" />
					</label>
					<label class="field">
						<span>Phone number</span>
						<input type="tel" name="phone" autocomplete="tel" required placeholder="+263 ..." />
					</label>
				</div>

				<div class="form-row">
					<label class="field">
						<span>Grade or form</span>
						<select name="grade" required defaultValue="">
							<option value="" disabled>
								Select a grade or form
							</option>
							{grades.map((grade) => (
								<option value={grade}>{grade}</option>
							))}
						</select>
					</label>
					<label class="field">
						<span>Preferred pathway</span>
						<select name="pathway" required defaultValue="">
							<option value="" disabled>
								Select a pathway
							</option>
							<option value="Day school">Day school</option>
							<option value="Boarding">Boarding</option>
							<option value="Not sure yet">Not sure yet</option>
						</select>
					</label>
				</div>

				<label class="field">
					<span>Your message</span>
					<textarea
						name="message"
						rows={4}
						placeholder="Tell us what you would like to know about admissions, availability or school life."
					/>
				</label>

				<div class="form-actions">
					<button class="btn btn-navy" type="submit">
						Prepare email enquiry
						<Icon name="mail" size={18} />
					</button>
					<a class="btn btn-outline" href={`tel:${SITE.phones[0].replace(/\s/g, '')}`}>
						<Icon name="phone" size={18} />
						Call the school
					</a>
				</div>

				<p class="form-note">
					This website does not store form submissions. Submitting opens your email app so you can
					review and send the message yourself.
				</p>

				<div class="form-status" role="status" aria-live="polite">
					{status === 'opened' && (
						<span>
							<Icon name="check" size={17} />
							Your email app should open with the enquiry. If it does not, email{' '}
							<a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
						</span>
					)}
				</div>
			</form>
		</div>
	);
}
