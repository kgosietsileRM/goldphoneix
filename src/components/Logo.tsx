import { SITE } from '../content/site.js';

export function Logo({ compact = false }: { compact?: boolean }) {
	return (
		<span class="logo">
			<img
				class="logo-crest"
				src={SITE.logoSmall}
				alt=""
				width="44"
				height="41"
				decoding="async"
			/>
			<span class="logo-text">
				<span class="logo-name">Goldphoenix</span>
				{!compact && <span class="logo-sub">Christian College</span>}
			</span>
		</span>
	);
}
