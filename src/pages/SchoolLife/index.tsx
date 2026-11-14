import { ParallaxImage, ScrollTilt } from 'pax3d/react';
import { CtaBand } from '../../components/CtaBand.jsx';
import { Icon } from '../../components/Icon.jsx';
import { PageHero } from '../../components/PageHero.jsx';
import { RevealCard, RevealGrid } from '../../components/Reveal.jsx';
import { SectionHeading } from '../../components/SectionHeading.jsx';
import { BEYOND_CLASSROOM, DAY_IN_LIFE, PATHWAYS, SITE } from '../../content/site.js';

export function SchoolLife() {
	return (
		<>
			<PageHero
				eyebrow="School life"
				title="A school day with rhythm, relationship and room to grow."
				intro={
					<p>
						Learning at Goldphoenix Christian College is shaped by clear routines, pastoral care
						and a community where learners are known — whether they attend as day or boarding
						learners.
					</p>
				}
				image={SITE.campusImage}
				imageAlt="Goldphoenix Christian College campus"
				crumbs={[{ label: 'School Life' }]}
			>
				<a class="btn btn-gold" href="/admissions#enquiry">
					Ask about school life
					<Icon name="arrow-up-right" size={18} />
				</a>
				<a class="btn btn-ghost-light" href="#pathways">
					Compare pathways
					<Icon name="chevron-down" size={18} />
				</a>
			</PageHero>

			<section class="section" id="pathways">
				<div class="container">
					<SectionHeading
						eyebrow="Day and boarding"
						title="Two pathways, one community."
						text={
							<p>
								Families can discuss the arrangement that best fits their learner. The college can
								explain current availability, routines and requirements.
							</p>
						}
					/>
					<RevealGrid className="pathway-grid" amount={0.12} perspective={1300}>
						{PATHWAYS.map((pathway) => (
							<RevealCard
								as="article"
								class={`pathway-card pathway-${pathway.tone}`}
								id={pathway.tone}
								y={['28%', '0%']}
								rotateX={[8, 0]}
								rotateY={[pathway.tone === 'day' ? 4 : -4, 0]}
							>
								<span class="pathway-label">{pathway.label}</span>
								<span class="pathway-icon">
									<Icon name={pathway.tone === 'day' ? 'home' : 'people'} size={28} />
								</span>
								<h3>{pathway.title}</h3>
								<p>{pathway.text}</p>
								<a class="text-link" href="/admissions#enquiry">
									{pathway.link}
									<Icon name="arrow-right" size={17} />
								</a>
							</RevealCard>
						))}
					</RevealGrid>
				</div>
			</section>

			<section class="section section-cream">
				<div class="container">
					<SectionHeading
						eyebrow="The rhythm of the day"
						title="From arrival to the close of day."
						text={
							<p>
								Exact timetables vary by stage and pathway. The shape of the day is built around
								learning, connection and clear expectations.
							</p>
						}
						align="center"
					/>
					<RevealGrid
						as="ol"
						className="day-timeline day-timeline-light"
						amount={0.05}
						perspective={1000}
					>
						{DAY_IN_LIFE.map((item, index) => (
							<RevealCard as="li" y={['18%', '0%']} rotateX={[8, 0]} scale={[0.99, 1]}>
								<span class="day-index">{String(index + 1).padStart(2, '0')}</span>
								<span class="day-time">{item.time}</span>
								<div>
									<h3>{item.title}</h3>
									<p>{item.text}</p>
								</div>
							</RevealCard>
						))}
					</RevealGrid>
				</div>
			</section>

			<section class="section">
				<div class="container split-feature">
					<div class="split-media">
						<div class="media-stack">
							<ScrollTilt className="media-stack-main" max={7} perspective={950}>
								<ParallaxImage
									src="/media/students.jpg"
									alt="Goldphoenix learners together"
									speed={0.15}
									style={{ height: '100%' }}
								/>
							</ScrollTilt>
							<ScrollTilt className="media-stack-secondary" max={5} perspective={1000}>
								<ParallaxImage
									src="/media/student.jpg"
									alt="A Goldphoenix learner taking part in school life"
									speed={0.1}
									style={{ height: '100%' }}
								/>
							</ScrollTilt>
							<div class="media-stack-badge media-stack-badge-alt">
								<Icon name="spark" size={28} />
								<span>
									<strong>Beyond the classroom</strong>
									<small>Sport · arts · service · clubs</small>
								</span>
							</div>
						</div>
					</div>
					<div class="split-copy">
						<SectionHeading
							eyebrow="Beyond lessons"
							title="Confidence grows when learners take part."
							text={
								<p>
									Sport, creativity, service and shared interests give learners another way to
									discover strengths, build friendships and contribute to the school community.
								</p>
							}
						/>
						<RevealGrid className="beyond-list" amount={0.05} perspective={900}>
							{BEYOND_CLASSROOM.map((item) => (
								<RevealCard class="beyond-item" y={['16%', '0%']} rotateX={[5, 0]} scale={[0.99, 1]}>
									<span class="beyond-icon">
										<Icon name={item.icon as never} size={20} />
									</span>
									<div>
										<h3>{item.title}</h3>
										<p>{item.text}</p>
									</div>
								</RevealCard>
							))}
						</RevealGrid>
						<a class="btn btn-navy" href="/contact">
							Ask about current activities
							<Icon name="arrow-right" size={18} />
						</a>
					</div>
				</div>
			</section>

			<section class="section band-navy">
				<div class="container care-grid">
					<div>
						<SectionHeading
							eyebrow="Pastoral care"
							title="Known, supported and expected to grow."
							text={
								<p>
									Positive relationships and clear expectations help learners feel safe enough to
									try, make mistakes and keep going. The college can explain its current pastoral
									care and boarding arrangements.
								</p>
							}
							light
						/>
						<a class="btn btn-gold" href="/contact">
							Speak with the school
							<Icon name="arrow-right" size={18} />
						</a>
					</div>
					<RevealGrid className="care-cards" amount={0.06} perspective={1000}>
						<RevealCard class="care-card" y={['22%', '0%']} rotateX={[7, 0]} rotateY={[4, 0]}>
							<Icon name="shield" size={24} />
							<h3>Clear expectations</h3>
							<p>Routines and boundaries that help the community live and learn well together.</p>
						</RevealCard>
						<RevealCard class="care-card" y={['22%', '0%']} rotateX={[7, 0]} rotateY={[-4, 0]}>
							<Icon name="people" size={24} />
							<h3>Belonging</h3>
							<p>Relationships between learners, staff and families are treated as important.</p>
						</RevealCard>
						<RevealCard class="care-card" y={['22%', '0%']} rotateX={[7, 0]} rotateY={[4, 0]}>
							<Icon name="home" size={24} />
							<h3>Boarding information</h3>
							<p>
								Families considering boarding should ask about accommodation, supervision, meals
								and weekend routines.
							</p>
						</RevealCard>
						<RevealCard class="care-card" y={['22%', '0%']} rotateX={[7, 0]} rotateY={[-4, 0]}>
							<Icon name="clock" size={24} />
							<h3>Daily timetable</h3>
							<p>Contact the college for current start and finish times and transport notes.</p>
						</RevealCard>
					</RevealGrid>
				</div>
			</section>

			<CtaBand
				title="Is day or boarding the right fit?"
				text="Talk with the admissions team about your learner, the pathway you are considering and what the school currently offers."
				secondaryHref={`mailto:${SITE.email}`}
				secondaryLabel="Email admissions"
			/>
		</>
	);
}
