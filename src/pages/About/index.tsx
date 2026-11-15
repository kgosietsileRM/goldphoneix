import { ParallaxImage, ScrollTilt } from 'pax3d/react';
import { CtaBand } from '../../components/CtaBand.jsx';
import { Icon } from '../../components/Icon.jsx';
import { PageHero } from '../../components/PageHero.jsx';
import { RevealCard, RevealGrid } from '../../components/Reveal.jsx';
import { SectionHeading } from '../../components/SectionHeading.jsx';
import { LEADERSHIP, SITE, VALUES } from '../../content/site.js';
import { withBase } from '../../lib/paths.js';

const pillars = [
	{
		icon: 'shield',
		title: 'Faith and character',
		text: 'A Christian ethos that encourages integrity, care and service in everyday choices.',
	},
	{
		icon: 'book',
		title: 'Strong learning',
		text: 'Purposeful teaching that builds foundations, subject depth and study confidence.',
	},
	{
		icon: 'people',
		title: 'Belonging',
		text: 'A school community where learners, families and staff are known and supported.',
	},
];

export function About() {
	return (
		<>
			<PageHero
				eyebrow="Our school"
				title="A Christian learning community in the heart of Gweru."
				intro={
					<p>
						Goldphoenix Christian College is a private Christian day and boarding school in
						Daylesford, Gweru. Our purpose is simple: learning with purpose, from Grade 1–7 and
						Form 1–6.
					</p>
				}
				image={SITE.campusImage}
				imageAlt="The Goldphoenix Christian College campus in Daylesford, Gweru"
				crumbs={[{ label: 'Our School' }]}
			>
				<a class="btn btn-gold" href={withBase('/admissions#enquiry')}>
					Start an enquiry
					<Icon name="arrow-up-right" size={18} />
				</a>
				<a class="btn btn-ghost-light" href={withBase('/contact')}>
					Visit the campus
					<Icon name="pin" size={18} />
				</a>
			</PageHero>

			<section class="section">
				<div class="container split-feature reverse">
					<div class="split-copy">
						<SectionHeading
							eyebrow="Our purpose"
							title="Learning with purpose is a promise about the whole learner."
							text={
								<>
									<p>
										Academic progress matters. So does the kind of person a learner becomes.
										Goldphoenix Christian College brings these together through a Christian ethos,
										clear expectations and a community that values each learner.
									</p>
									<p>
										The college serves families in Gweru and beyond, with day and boarding
										pathways for primary and secondary learners. Families are encouraged to speak
										directly with the school about current arrangements, available places and the
										best fit for their child.
									</p>
								</>
							}
						/>
						<div class="proof-list">
							<div>
								<Icon name="check" size={18} />
								<span>Grade 1–7 primary and Form 1–6 secondary</span>
							</div>
							<div>
								<Icon name="check" size={18} />
								<span>Day and boarding pathways</span>
							</div>
							<div>
								<Icon name="check" size={18} />
								<span>Christian ethos and pastoral care</span>
							</div>
						</div>
					</div>
					<div class="split-media">
						<div class="media-stack about-media">
							<ScrollTilt className="media-stack-main" max={7} perspective={950}>
								<ParallaxImage
									src={withBase('/media/campus-560.jpg')}
									alt="Goldphoenix Christian College campus building"
									speed={0.14}
									style={{ height: '100%' }}
								/>
							</ScrollTilt>
							<div class="media-stack-label">
								<span>Daylesford, Gweru</span>
								<strong>13 Claremont Road</strong>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section class="section section-cream">
				<div class="container">
					<SectionHeading
						eyebrow="What shapes us"
						title="Three commitments at the centre."
						align="center"
					/>
					<RevealGrid className="pillar-grid" amount={0.08} perspective={1200}>
						{pillars.map((pillar, index) => (
							<RevealCard as="article" class="pillar-card" y={['28%', '0%']} rotateX={[8, 0]}>
								<span class="pillar-number">0{index + 1}</span>
								<span class="pillar-icon">
									<Icon name={pillar.icon as never} size={26} />
								</span>
								<h3>{pillar.title}</h3>
								<p>{pillar.text}</p>
							</RevealCard>
						))}
					</RevealGrid>
				</div>
			</section>

			<section class="section">
				<div class="container">
					<SectionHeading
						eyebrow="Our values"
						title="The habits we want learning to build."
						text={
							<p>
								These values shape the tone of school life — in the classroom, on the field, in
								boarding and in the way the community treats one another.
							</p>
						}
						link={{ href: '/school-life', label: 'See school life in practice' }}
					/>
					<RevealGrid className="values-grid" amount={0.06} perspective={1200}>
						{VALUES.map((value) => (
							<RevealCard as="article" class="value-card" y={['26%', '0%']} rotateX={[7, 0]}>
								<span class="value-icon">
									<Icon name={value.icon as never} size={24} />
								</span>
								<h3>{value.title}</h3>
								<p>{value.text}</p>
							</RevealCard>
						))}
					</RevealGrid>
				</div>
			</section>

			<section class="section band-navy">
				<div class="container">
					<SectionHeading
						eyebrow="School leadership"
						title="Guided by people who know the school."
						text={
							<p>
								The college’s leadership and teaching teams guide learning, pastoral care and the
								Christian ethos across primary and secondary.
							</p>
						}
						light
					/>
					<RevealGrid className="leadership-grid" amount={0.07} perspective={1200}>
						{LEADERSHIP.map((person) => (
							<RevealCard as="article" class="leader-card" y={['26%', '0%']} rotateX={[7, 0]}>
								<span class="leader-avatar">{person.initials}</span>
								<h3>{person.title}</h3>
								<p class="leader-role">{person.role}</p>
								<p>{person.text}</p>
							</RevealCard>
						))}
					</RevealGrid>
					<p class="band-note">
						For current leadership names and responsibilities, please contact the college directly.
					</p>
				</div>
			</section>

			<section class="section">
				<div class="container visit-grid">
					<ScrollTilt className="visit-card" max={5} perspective={1000}>
						<p class="eyebrow">Find us</p>
						<h2>Daylesford, Gweru.</h2>
						<p>
							The campus is at {SITE.address.street}, {SITE.address.suburb}, {SITE.address.city}.
							Families can open the location in Google Maps or contact the school before visiting.
						</p>
						<div class="visit-actions">
							<a class="btn btn-navy" href={SITE.directionsUrl} target="_blank" rel="noopener noreferrer">
								<Icon name="pin" size={18} />
								Open directions
							</a>
							<a class="btn btn-outline" href={withBase('/contact')}>
								Contact details
								<Icon name="arrow-right" size={18} />
							</a>
						</div>
					</ScrollTilt>
					<div class="visit-details">
						<div>
							<Icon name="phone" size={20} />
							<span>
								<strong>Call</strong>
								<a href={`tel:${SITE.phones[0].replace(/\s/g, '')}`}>{SITE.phones[0]}</a>
							</span>
						</div>
						<div>
							<Icon name="mail" size={20} />
							<span>
								<strong>Email</strong>
								<a href={`mailto:${SITE.email}`}>{SITE.email}</a>
							</span>
						</div>
						<div>
							<Icon name="clock" size={20} />
							<span>
								<strong>Visits</strong>
								<small>Contact the college to ask about a visit.</small>
							</span>
						</div>
					</div>
				</div>
			</section>

			<CtaBand
				title="Want to know if Goldphoenix is the right fit?"
				text="Speak with the admissions team about your child’s grade, the day or boarding pathway, and the next steps."
			/>
		</>
	);
}
