import { SITE } from '../content/site.js';
import { Icon } from './Icon.jsx';

export function WhatsAppButton() {
	return (
		<a
			class="whatsapp-button"
			href={SITE.whatsapp}
			target="_blank"
			rel="noopener noreferrer"
			aria-label="Chat with Goldphoenix Christian College on WhatsApp"
		>
			<Icon name="whatsapp" size={28} />
		</a>
	);
}
