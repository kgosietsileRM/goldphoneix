import { useEffect, useState } from 'preact/hooks';
import { ScrollTilt } from 'pax3d/react';
import { EnquiryForm } from '../../components/EnquiryForm.jsx';
import { Icon } from '../../components/Icon.jsx';
import { PageHero } from '../../components/PageHero.jsx';
import { RevealCard, RevealGrid } from '../../components/Reveal.jsx';
import { SectionHeading } from '../../components/SectionHeading.jsx';
import { SITE } from '../../content/site.js';

export function Contact() {
	const [mapLoaded, setMapLoaded] = useState(false);
	const [showMap, setShowMap] = useState(false);

	useEffect(() => setShowMap(true), []);

	return (
		<>
			<PageHero
				eyebrow="Contact"
				title="Talk to Goldphoenix Christian College."
				intro={
					<p>
						Find the campus in Daylesford, Gweru, call the school, or send an admissions enquiry.
						Families are welcome to ask about grades, the day or boarding pathway, and the
						admissions process.
					</p>
				}
				image="/media/students-640.jpg"
				imageAlt="Goldphoenix Christian College learners"
				crumbs={[{ label: 'Contact' }]}
			>
				<a class="btn btn-gold" href={`tel:${SITE.phones[0].replace(/\s/g, '')}`}>
					<Icon name="phone" size={18} />
					Call the school
				</a>
				<a class="btn btn-ghost-light" href="#contact-form">
					Send an email enquiry
					<Icon name="arrow-right" size={18} />
				</a>
			</PageHero>

			<section class="section quick-answer-section">
				<div class="container quick-answer-grid">
					<div>
						<p class="eyebrow">Contact at a glance</p>
						<h2 class="quick-answer-title">Daylesford, Gweru.</h2>
					</div>
					<div class="quick-answer">
						<p class="quick-answer-label">Quick answer</p>
						<p>
							Goldphoenix Christian College is at {SITE.address.street}, {SITE.address.suburb},{' '}
							{SITE.address.city}, {SITE.address.country}. Call {SITE.phones[0]} or email{' '}
							{SITE.email}. The college is also on Facebook.
						</p>
						<div class="quick-answer-links">
							<a href={SITE.mapUrl} target="_blank" rel="noopener noreferrer">
								<Icon name="pin" size={17} />
								Open in Google Maps
							</a>
							<a href={SITE.facebook} target="_blank" rel="noopener noreferrer">
								<Icon name="facebook" size={17} />
								Facebook page
							</a>
						</div>
					</div>
				</div>
			</section>

			<section class="section">
				<RevealGrid
					className="container contact-card-grid"
					amount={0.06}
					endAt={0.35}
					perspective={1100}
				>
					<RevealCard as="article" class="contact-card" y={['24%', '0%']} rotateX={[7, 0]} rotateY={[4, 0]}>
						<span class="contact-icon">
							<Icon name="pin" size={25} />
						</span>
						<h2>Visit</h2>
						<address>
							<span>{SITE.address.street}</span>
							<span>{SITE.address.suburb}</span>
							<span>{SITE.address.city}</span>
							<span>{SITE.address.country}</span>
						</address>
						<a class="text-link" href={SITE.directionsUrl} target="_blank" rel="noopener noreferrer">
							Get directions
							<Icon name="arrow-up-right" size={17} />
						</a>
					</RevealCard>

					<RevealCard as="article" class="contact-card" y={['24%', '0%']} rotateX={[7, 0]} rotateY={[-4, 0]}>
						<span class="contact-icon">
							<Icon name="phone" size={25} />
						</span>
						<h2>Call</h2>
						<ul class="contact-links">
							{SITE.phones.map((phone) => (
								<li>
									<a href={`tel:${phone.replace(/\s/g, '')}`}>
										<Icon name="phone" size={16} />
										{phone}
									</a>
								</li>
							))}
						</ul>
						<p class="contact-note">Speak with the college about admissions, school life or visits.</p>
					</RevealCard>

					<RevealCard as="article" class="contact-card" y={['24%', '0%']} rotateX={[7, 0]} rotateY={[4, 0]}>
						<span class="contact-icon">
							<Icon name="mail" size={25} />
						</span>
						<h2>Email</h2>
						<a class="contact-email" href={`mailto:${SITE.email}`}>
							{SITE.email}
						</a>
						<p class="contact-note">
							Email is a good place for an admissions enquiry or a question about the school.
						</p>
					</RevealCard>

					<RevealCard as="article" class="contact-card" y={['24%', '0%']} rotateX={[7, 0]} rotateY={[-4, 0]}>
						<span class="contact-icon">
							<Icon name="facebook" size={25} />
						</span>
						<h2>Follow</h2>
						<p class="contact-note">
							The college shares updates and community news on Facebook.
						</p>
						<a class="text-link" href={SITE.facebook} target="_blank" rel="noopener noreferrer">
							Open Facebook
							<Icon name="arrow-up-right" size={17} />
						</a>
					</RevealCard>
				</RevealGrid>
			</section>

			<section class="section section-cream">
				<div class="container map-grid">
					<div class="map-copy">
						<SectionHeading
							eyebrow="Find the campus"
							title="Plan your visit."
							text={
								<p>
									The campus is in Daylesford, Gweru. Use Google Maps for live directions, and
									contact the college before visiting so the team can advise on the best time.
								</p>
							}
						/>
						<div class="map-details">
							<div>
								<Icon name="pin" size={20} />
								<span>
									<strong>Address</strong>
									{SITE.address.street}, {SITE.address.suburb}, {SITE.address.city}
								</span>
							</div>
							<div>
								<Icon name="compass" size={20} />
								<span>
									<strong>Coordinates</strong>
									{SITE.coords.lat}, {SITE.coords.lng}
								</span>
							</div>
							<div>
								<Icon name="clock" size={20} />
								<span>
									<strong>Visits</strong>
									Contact the college to ask about a visit.
								</span>
							</div>
						</div>
						<a class="btn btn-navy" href={SITE.mapUrl} target="_blank" rel="noopener noreferrer">
							<Icon name="pin" size={18} />
							Open in Google Maps
						</a>
					</div>
					<ScrollTilt className="map-frame" max={4} perspective={1100}>
						{!mapLoaded && (
							<div class="map-loading" aria-hidden="true">
								<span class="map-spinner" />
								<span>Loading map…</span>
							</div>
						)}
						{showMap && (
							<iframe
								title="Map showing Goldphoenix Christian College in Daylesford, Gweru"
								src={SITE.mapEmbedUrl}
								loading="lazy"
								onLoad={() => setMapLoaded(true)}
								referrerpolicy="no-referrer-when-downgrade"
							/>
						)}
					</ScrollTilt>
				</div>
			</section>

			<section class="section" id="contact-form">
				<div class="container enquiry-grid">
					<div class="enquiry-intro">
						<SectionHeading
							eyebrow="Send an email"
							title="How can we help?"
							text={
								<p>
									Use the form to prepare an email to the college. Include the grade or form
									you are asking about and the best way to reach you.
								</p>
							}
						/>
						<div class="contact-quick">
							<a href={`tel:${SITE.phones[0].replace(/\s/g, '')}`}>
								<Icon name="phone" size={18} />
								{SITE.phones[0]}
							</a>
							<a href={`mailto:${SITE.email}`}>
								<Icon name="mail" size={18} />
								{SITE.email}
							</a>
						</div>
					</div>
					<EnquiryForm />
				</div>
			</section>
		</>
	);
}
