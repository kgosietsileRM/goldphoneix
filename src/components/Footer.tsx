import { NAV, SITE } from '../content/site.js';
import { withBase } from '../lib/paths.js';
import { Icon } from './Icon.jsx';
import { Logo } from './Logo.jsx';

export function Footer() {
	return (
		<footer class="site-footer">
			<div class="footer-glow" aria-hidden="true" />
			<div class="container footer-grid">
				<div class="footer-brand">
					<a href={withBase('/')} class="footer-logo" aria-label="Goldphoenix Christian College home">
						<Logo />
					</a>
					<p class="footer-tagline">Excellence Beyond Expectations</p>
					<p class="footer-copy">
						A private Christian boarding and day high school in Daylesford, Gweru, offering Form 1–6
						secondary education.
					</p>
					<a
						class="footer-social"
						href={SITE.facebook}
						target="_blank"
						rel="noopener noreferrer"
					>
						<Icon name="facebook" size={18} />
						Follow the college on Facebook
					</a>
				</div>

				<div class="footer-col">
					<h2 class="footer-title">Explore</h2>
					<ul class="footer-list">
						{NAV.map((item) => (
							<li>
								<a href={withBase(item.href)}>{item.label}</a>
							</li>
						))}
					</ul>
				</div>

				<div class="footer-col">
					<h2 class="footer-title">For families</h2>
					<ul class="footer-list">
						<li>
							<a href={withBase('/admissions')}>Admissions</a>
						</li>
						<li>
							<a href={withBase('/admissions#requirements')}>What to prepare</a>
						</li>
						<li>
							<a href={withBase('/faq')}>Frequently asked questions</a>
						</li>
						<li>
							<a href={withBase('/results')}>Results portal (demo)</a>
						</li>
						<li>
							<a href={withBase('/contact')}>Directions</a>
						</li>
					</ul>
				</div>

				<div class="footer-col footer-contact">
					<h2 class="footer-title">Visit or contact</h2>
					<address>
						<span>{SITE.address.street}</span>
						<span>
							{SITE.address.suburb}, {SITE.address.city}
						</span>
						<span>{SITE.address.country}</span>
					</address>
					<a href={`tel:${SITE.phones[0].replace(/\s/g, '')}`}>
						<Icon name="phone" size={17} />
						{SITE.phones[0]}
					</a>
					<a href={`mailto:${SITE.email}`}>
						<Icon name="mail" size={17} />
						{SITE.email}
					</a>
					<a href={SITE.mapUrl} target="_blank" rel="noopener noreferrer">
						<Icon name="pin" size={17} />
						Open in Google Maps
					</a>
				</div>
			</div>

			<div class="container footer-bottom">
				<p>© 2026 {SITE.name}. All rights reserved.</p>
				<p class="footer-note">
					The results portal on this website is a demonstration only. For official records, contact
					the college.
				</p>
			</div>
		</footer>
	);
}
