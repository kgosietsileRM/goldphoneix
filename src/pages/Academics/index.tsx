import { ParallaxImage, ScrollTilt } from 'pax3d/react';
import { CtaBand } from '../../components/CtaBand.jsx';
import { Icon } from '../../components/Icon.jsx';
import { PageHero } from '../../components/PageHero.jsx';
import { RevealCard, RevealGrid } from '../../components/Reveal.jsx';
import { SectionHeading } from '../../components/SectionHeading.jsx';
import { SITE } from '../../content/site.js';
import { withBase } from '../../lib/paths.js';

const approach = [
	{
		icon: 'compass',
		title: 'Strong foundations',
		text: 'Clear explanations, guided practice and the confidence to ask good questions.',
	},
	{
		icon: 'growth',
		title: 'Growing independence',
		text: 'Study habits, organisation and self-belief that become more important each year.',
	},
	{
		icon: 'people',
		title: 'Known learners',
		text: 'Teachers who notice progress, offer support and encourage the next step.',
	},
	{
		icon: 'award',
		title: 'Purposeful feedback',
		text: 'Assessment used to show what is working and what needs attention next.',
	},
];

const subjectAreas = [
	'Languages and literacy',
	'Mathematics and numeracy',
	'Sciences',
	'Humanities and social studies',
	'Religious and moral education',
	'Business and practical subjects',
	'Arts and creativity',
	'Sport and physical education',
];

export function Academics() {
	return (
		<>
			<PageHero
				eyebrow="Academics"
				title="Foundations first. Then depth, confidence and direction."
				intro={
					<p>
						Goldphoenix Christian College offers primary learning from Grade 1–7 and secondary
						learning from Form 1–6, with purposeful teaching and support at every stage.
					</p>
				}
				image={SITE.heroImage}
				imageAlt="Learners at Goldphoenix Christian College"
				crumbs={[{ label: 'Academics' }]}
			>
				<a class="btn btn-gold" href={withBase('/admissions#enquiry')}>
					Ask about a place
					<Icon name="arrow-up-right" size={18} />
				</a>
				<a class="btn btn-ghost-light" href="#primary">
					Explore the stages
					<Icon name="chevron-down" size={18} />
				</a>
			</PageHero>

			<section class="section quick-answer-section">
				<div class="container quick-answer-grid">
					<div>
						<p class="eyebrow">Academic overview</p>
						<h2 class="quick-answer-title">One school, two connected stages.</h2>
					</div>
					<div class="quick-answer">
						<p class="quick-answer-label">Quick answer</p>
						<p>
							Primary school covers Grade 1–7 and focuses on literacy, numeracy and strong
							foundations. Secondary school covers Form 1–6 and builds subject depth, independent
							study and preparation for the next step.
						</p>
						<div class="quick-answer-links">
							<a href="#primary">
								<Icon name="primary" size={17} />
								Primary · Grade 1–7
							</a>
							<a href="#secondary">
								<Icon name="secondary" size={17} />
								Secondary · Form 1–6
							</a>
						</div>
					</div>
				</div>
			</section>

			<section class="section stage-section" id="primary">
				<div class="container stage-grid">
					<div class="stage-copy">
						<p class="stage-label">Primary · Grade 1–7</p>
						<h2>Building the confidence to learn.</h2>
						<p>
							The primary years are where curiosity, reading, number sense and good learning
							habits take root. Learners are guided with clear routines, encouragement and
							age-appropriate challenge.
						</p>
						<div class="stage-points">
							<div>
								<Icon name="check" size={18} />
								<span>Literacy and numeracy foundations</span>
							</div>
							<div>
								<Icon name="check" size={18} />
								<span>Curiosity, creativity and physical activity</span>
							</div>
							<div>
								<Icon name="check" size={18} />
								<span>Care, routines and positive relationships</span>
							</div>
						</div>
						<a class="text-link" href={withBase('/admissions#enquiry')}>
							Ask about primary admissions
							<Icon name="arrow-right" size={17} />
						</a>
					</div>
					<div class="stage-media">
						<ScrollTilt className="stage-media-frame" max={6} perspective={950}>
							<ParallaxImage
								src={withBase('/media/students%20in%20classroom.jpg')}
								alt="Primary learners in a classroom at Goldphoenix Christian College"
								speed={0.13}
								style={{ height: '100%' }}
							/>
						</ScrollTilt>
						<div class="stage-media-tag">
							<Icon name="primary" size={20} />
							<span>
								<strong>Grade 1–7</strong>
								<small>Primary school</small>
							</span>
						</div>
					</div>
				</div>
			</section>

			<section class="section section-cream stage-section" id="secondary">
				<div class="container stage-grid reverse">
					<div class="stage-copy">
						<p class="stage-label">Secondary · Form 1–6</p>
						<h2>Going deeper, thinking further.</h2>
						<p>
							Secondary learners take on more demanding subject content and greater responsibility
							for their learning. The aim is steady progress, thoughtful choices and readiness for
							what comes after school.
						</p>
						<div class="stage-points">
							<div>
								<Icon name="check" size={18} />
								<span>Subject knowledge and application</span>
							</div>
							<div>
								<Icon name="check" size={18} />
								<span>Study habits and independent thinking</span>
							</div>
							<div>
								<Icon name="check" size={18} />
								<span>Guidance, feedback and next-step preparation</span>
							</div>
						</div>
						<a class="text-link" href={withBase('/admissions#enquiry')}>
							Ask about secondary admissions
							<Icon name="arrow-right" size={17} />
						</a>
					</div>
					<div class="stage-media">
						<ScrollTilt className="stage-media-frame" max={6} perspective={950}>
							<ParallaxImage
								src={withBase('/media/campus.jpg')}
								alt="Secondary school grounds at Goldphoenix Christian College"
								speed={0.13}
								style={{ height: '100%' }}
							/>
						</ScrollTilt>
						<div class="stage-media-tag">
							<Icon name="secondary" size={20} />
							<span>
								<strong>Form 1–6</strong>
								<small>Secondary school</small>
							</span>
						</div>
					</div>
				</div>
			</section>

			<section class="section">
				<div class="container">
					<SectionHeading
						eyebrow="The learning approach"
						title="Teaching that builds understanding, not just coverage."
						text={
							<p>
								Good learning is purposeful, relational and responsive. These four commitments
								shape the classroom experience.
							</p>
						}
					/>
					<RevealGrid className="approach-grid" amount={0.07} perspective={1200}>
						{approach.map((item, index) => (
							<RevealCard as="article" class="approach-card" y={['28%', '0%']} rotateX={[8, 0]}>
								<span class="approach-icon">
									<Icon name={item.icon as never} size={24} />
								</span>
								<span class="approach-index">0{index + 1}</span>
								<h3>{item.title}</h3>
								<p>{item.text}</p>
							</RevealCard>
						))}
					</RevealGrid>
				</div>
			</section>

			<section class="section band-navy">
				<div class="container subject-grid">
					<div>
						<SectionHeading
							eyebrow="Subject areas"
							title="A broad school experience."
							text={
								<p>
									Subject offerings can change by year and form. Contact the college for the
									current subject list, options and assessment arrangements.
								</p>
							}
							light
						/>
						<a class="btn btn-gold" href={withBase('/contact')}>
							Ask about subjects
							<Icon name="arrow-right" size={18} />
						</a>
					</div>
					<RevealGrid as="ul" className="subject-list" amount={0.04} endAt={0.35} perspective={900}>
						{subjectAreas.map((subject) => (
							<RevealCard as="li" y={['18%', '0%']} rotateX={[6, 0]} scale={[0.99, 1]}>
								<Icon name="check" size={17} />
								{subject}
							</RevealCard>
						))}
					</RevealGrid>
				</div>
			</section>

			<section class="section">
				<RevealGrid className="container support-grid" amount={0.08} perspective={1100}>
					<RevealCard class="support-card" y={['26%', '0%']} rotateX={[7, 0]}>
						<span class="support-icon">
							<Icon name="award" size={24} />
						</span>
						<h2>Assessment with a purpose.</h2>
						<p>
							Assessment should help learners and families understand progress, not simply produce
							a mark. The college can explain current reporting and assessment arrangements.
						</p>
					</RevealCard>
					<RevealCard class="support-card" y={['26%', '0%']} rotateX={[7, 0]}>
						<span class="support-icon">
							<Icon name="people" size={24} />
						</span>
						<h2>Support around the learner.</h2>
						<p>
							Teachers, pastoral care and families working together give learners the best chance
							to succeed. Ask the college about the support available for your child.
						</p>
					</RevealCard>
					<RevealCard class="support-card" y={['26%', '0%']} rotateX={[7, 0]}>
						<span class="support-icon">
							<Icon name="compass" size={24} />
						</span>
						<h2>Preparation for the next step.</h2>
						<p>
							From primary into secondary and beyond, the goal is a learner who is ready to make
							thoughtful choices with confidence.
						</p>
					</RevealCard>
				</RevealGrid>
			</section>

			<CtaBand
				title="Questions about the academic programme?"
				text="Speak with the college about the grade or form you are considering, subject options and available places."
			/>
		</>
	);
}
