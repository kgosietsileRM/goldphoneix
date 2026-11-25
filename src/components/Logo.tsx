import { SITE } from '../content/site.js';
import { withBase } from '../lib/paths.js';

export function Logo({ compact = false, className }: { compact?: boolean, className?:string }) {
	return (
		<span class={`logo ${className}`}>
			<img
				class={`logo-crest ${className}-logo`}
				src={withBase(SITE.logoSmall)}
				alt=""
				width="44"
				height="41"
				decoding="async"
			/>
			<span class={`logo-text ${className}-text`}>
				<span class={`logo-name ${className}-main-text`}>Goldphoenix</span>
				{!compact && <span class={`logo-sub ${className}-sub-text`}>Christian College</span>}
			</span>
		</span>
	);
}
