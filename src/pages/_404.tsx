import { Icon } from '../components/Icon.jsx';
import { NAV } from '../content/site.js';
import { withBase } from '../lib/paths.js';

export function NotFound() {
	return (
		<section class="not-found">
			<div class="not-found-orb" aria-hidden="true" />
			<div class="container not-found-inner">
				<p class="not-found-code">404</p>
				<p class="eyebrow eyebrow-light">Page not found</p>
				<h1>This path has gone quiet.</h1>
				<p>
					The page may have moved, or the link may be out of date. Use the links below to find your
					way back to Goldphoenix Christian College.
				</p>
				<div class="not-found-actions">
					<a class="btn btn-gold" href={withBase('/')}>
						Return home
						<Icon name="arrow-right" size={18} />
					</a>
					<a class="btn btn-ghost-light" href={withBase('/contact')}>
						Contact the college
						<Icon name="mail" size={18} />
					</a>
				</div>
				<nav class="not-found-links" aria-label="Helpful links">
					{NAV.filter((item) => item.href !== '/').map((item) => (
						<a href={withBase(item.href)}>
							{item.label}
							<Icon name="arrow-up-right" size={16} />
						</a>
					))}
				</nav>
			</div>
		</section>
	);
}
