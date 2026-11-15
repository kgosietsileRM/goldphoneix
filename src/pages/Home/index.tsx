import { lazy, Suspense } from 'preact/compat';
import { useEffect, useState } from 'preact/hooks';
import { Layer, Marquee, ParallaxImage, Scene, ScrollTilt, SplitText } from 'pax3d/react';
import { CtaBand } from '../../components/CtaBand.jsx';
import { Icon } from '../../components/Icon.jsx';
import { RevealCard, RevealGrid } from '../../components/Reveal.jsx';
import { SectionHeading } from '../../components/SectionHeading.jsx';
import {
	DAY_IN_LIFE,
	FACTS,
	NOTICES,
	PROGRAMS,
	SITE,
	STATS,
	VALUES,
} from '../../content/site.js';
import { withBase } from '../../lib/paths.js';

const WebGLHero = lazy(() => import('../../components/WebGLHero.jsx'));

export function Home() {
	const [showWebGL, setShowWebGL] = useState(false);

	useEffect(() => {
		const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		const probe = document.createElement('canvas');
		const gl = probe.getContext('webgl2') ?? probe.getContext('webgl');
		if (reduce || !gl) return;

		const timer = window.setTimeout(() => setShowWebGL(true), 700);
		return () => window.clearTimeout(timer);
	}, []);

	return (
		<>
		<div class="hero-background" aria-hidden="true">
			<div class="hero-grid-lines" />
			<div class="hero-orb hero-orb-gold" />
			<div class="hero-orb hero-orb-blue" />
			{showWebGL && (
				<Suspense fallback={null}>
					<WebGLHero />
				</Suspense>
			)}
			<div class="hero-overlay" />
		</div>

		<div class="container hero-inner">
			<div class="hero-copy">
				<p class="hero-eyebrow">
					<span class="hero-eyebrow-line" aria-hidden="true" />
					Daylesford, Gweru · Day &amp; boarding
				</p>
				<h1 class="hero-title">
					Learning with <span class="accent">purpose.</span>
				</h1>
				<p class="hero-lead">
					A Christian school community in Gweru where strong foundations, character and
					confidence grow together — from Grade 1 to Form 6.
				</p>
				<div class="hero-actions">
					<a class="btn btn-gold" href={withBase('/admissions#enquiry')}>
						Start an enquiry
						<Icon name="arrow-up-right" size={18} />
					</a>
					<a class="btn btn-ghost-light" href={withBase('/about')}>
						Discover our school
						<Icon name="arrow-right" size={18} />
					</a>
				</div>
				<ul class="hero-trust">
					<li>
						<Icon name="check" size={17} />
						Grade 1–7 · Form 1–6
					</li>
					<li>
						<Icon name="check" size={17} />
						Christian ethos
					</li>
					<li>
						<Icon name="check" size={17} />
						Day &amp; boarding
					</li>
				</ul>
			</div>

			<div class="hero-visual">
				<Scene className="hero-scene" perspective={1200}>
					<Layer
						class="hero-layer"
						y={['0%', '-9%']}
						z={[0, 120]}
						rotateY={[-3, 4]}
						scale={[1, 1.03]}
						range={[0, 1]}
						reduced="disable"
					>
						<ScrollTilt className="hero-tilt" max={7} perspective={1000}>
							<figure class="hero-photo-card">
								<div class="hero-photo-frame">
									<img
										src={withBase(SITE.heroImage)}
										alt="Students at Goldphoenix Christian College in Gweru"
										width="1016"
										height="856"
										fetchpriority="high"
										decoding="async"
									/>
								</div>
								<figcaption class="hero-photo-caption">
									<span class="hero-photo-crest">
										<img src={withBase(SITE.logoSmall)} alt="" width="44" height="41" />
									</span>
									<span>
										<strong>Goldphoenix</strong>
										<small>Christian College</small>
									</span>
								</figcaption>
								<div class="hero-badge">
									<span class="hero-badge-icon">
										<Icon name="spark" size={18} />
									</span>
									<span>
										<strong>Learning with Purpose</strong>
										<small>Knowledge · Character · Faith</small>
									</span>
								</div>
							</figure>
						</ScrollTilt>
					</Layer>

					<Layer
						class="hero-float hero-float-one"
						y={['14%', '-20%']}
						x={['0%', '-6%']}
						range={[0, 1]}
					>
						<div class="floating-card floating-card-gold">
							<Icon name="award" size={22} />
							<span>
								<strong>Grade 1–7</strong>
								<small>Primary foundations</small>
							</span>
						</div>
					</Layer>

					<Layer
						class="hero-float hero-float-two"
						y={['-6%', '18%']}
						x={['0%', '5%']}
						range={[0, 1]}
					>
						<div class="floating-card floating-card-glass">
							<Icon name="pin" size={22} />
							<span>
								<strong>Daylesford, Gweru</strong>
								<small>13 Claremont Road</small>
							</span>
						</div>
					</Layer>
				</Scene>
			</div>
		</div>

		<div class="container hero-facts-wrap">
			<div class="hero-facts">
				{FACTS.map((fact) => (
					<div class="hero-fact">
						<strong>{fact.value}</strong>
						<span>{fact.label}</span>
					</div>
				))}
			</div>
		</div>

		<div class="purpose-strip" aria-hidden="true">
			<Marquee speed={26} velocityBoost={0.5} copies={3}>
				<span>Learning with purpose</span>
				<span class="purpose-dot">·</span>
				<span>Faith</span>
				<span class="purpose-dot">·</span>
				<span>Character</span>
				<span class="purpose-dot">·</span>
				<span>Confidence</span>
				<span class="purpose-dot">·</span>
				<span>Service</span>
				<span class="purpose-dot">·</span>
				<span>Community</span>
				<span class="purpose-dot">·</span>
			</Marquee>
		</div>

		<section class="section quick-answer-section">
			<div class="container quick-answer-grid">
				<div>
					<p class="eyebrow">At a glance</p>
					<h2 class="quick-answer-title">A Gweru school with a clear sense of purpose.</h2>
				</div>
				<div class="quick-answer">
					<p class="quick-answer-label">Quick answer</p>
					<p>
						Goldphoenix Christian College is a private Christian day and boarding school at 13
						Claremont Road, Daylesford, Gweru, Zimbabwe. It offers primary education from Grade
						1–7 and secondary education from Form 1–6.
					</p>
					<div class="quick-answer-links">
						<a href={withBase('/academics')}>
							<Icon name="book" size={17} />
							Explore academics
						</a>
						<a href={withBase('/admissions')}>
							<Icon name="arrow-right" size={17} />
							Admissions steps
						</a>
						<a href={withBase('/contact')}>
							<Icon name="pin" size={17} />
							Find the campus
						</a>
					</div>
				</div>
			</div>
		</section>

		<section class="purpose-scene-section" aria-labelledby="purpose-scene-title">
			<Scene
				sticky
				height="260vh"
				className="purpose-scene"
				stickyClassName="purpose-scene-sticky"
				perspective={1500}
			>
				<Layer
					class="purpose-scene-backdrop"
					y={['-6%', '6%']}
					scale={[1.04, 1.1]}
					range={[0, 1]}
					reduced="disable"
					aria-hidden="true"
				>
					<ParallaxImage src={withBase('/media/bg-3.jpg')} alt="" speed={0.08} style={{ height: '100%' }} />
				</Layer>

				<Layer
					class="purpose-scene-campus"
					y={['12%', '-10%']}
					z={[-100, 140]}
					rotateY={[10, -4]}
					rotateX={[3, -2]}
					range={[0, 0.8]}
					reduced="disable"
				>
					<figure class="purpose-scene-photo">
						<img
							src={withBase('/media/campus%20no-bg.jpg')}
							alt="Goldphoenix Christian College campus"
							width="896"
							height="1200"
							loading="lazy"
							decoding="async"
						/>
					</figure>
				</Layer>

				<Layer
					class="purpose-scene-aura"
					y={['-10%', '10%']}
					scale={[1.08, 1.2]}
					range={[0, 1]}
					reduced="disable"
				>
					<span class="purpose-scene-orb purpose-scene-orb-one" aria-hidden="true" />
					<span class="purpose-scene-orb purpose-scene-orb-two" aria-hidden="true" />
				</Layer>

				<div class="purpose-scene-inner">
					<Layer
						class="purpose-scene-kicker"
						y={['18%', '-10%']}
						range={[0, 0.18]}
						reduced="disable"
					>
						<p class="eyebrow eyebrow-light">Learning with purpose</p>
					</Layer>

					<Layer
						class="purpose-scene-word"
						z={[0, -560]}
						rotateX={[0, 32]}
						scale={[1, 0.55]}
						opacity={[0.85, 0]}
						range={[0.03, 0.55]}
						reduced="disable"
						aria-hidden="true"
					>
						<span>Purpose</span>
					</Layer>

					<Layer
						class="purpose-scene-copy"
						y={['12%', '-8%']}
						range={[0.08, 0.42]}
						reduced="disable"
					>
						<h2 id="purpose-scene-title">Knowledge. Character. Faith.</h2>
						<p>
							A Goldphoenix education brings strong learning, Christian character and a
							confident next step together.
						</p>
						<a class="text-link" href={withBase('/about')}>
							Explore our approach
							<Icon name="arrow-right" size={17} />
						</a>
					</Layer>

					<div class="purpose-scene-cards" aria-hidden="true">
						<Layer
							class="purpose-scene-card purpose-scene-card-one"
							x={['-26%', '-8%']}
							y={['30%', '-8%']}
							z={[-120, 160]}
							rotateY={[20, -8]}
							rotateX={[10, -4]}
							range={[0.12, 0.6]}
							reduced="disable"
						>
							<span>01</span>
							<strong>Knowledge</strong>
							<small>Strong foundations</small>
						</Layer>
						<Layer
							class="purpose-scene-card purpose-scene-card-two"
							x={['28%', '9%']}
							y={['-18%', '10%']}
							z={[-220, 220]}
							rotateY={[-18, 7]}
							rotateX={[-8, 4]}
							range={[0.15, 0.64]}
							reduced="disable"
						>
							<span>02</span>
							<strong>Character</strong>
							<small>Integrity in action</small>
						</Layer>
						<Layer
							class="purpose-scene-card purpose-scene-card-three"
							x={['-8%', '15%']}
							y={['48%', '18%']}
							z={[-320, 300]}
							rotateY={[12, -5]}
							rotateX={[12, 4]}
							range={[0.18, 0.68]}
							reduced="disable"
						>
							<span>03</span>
							<strong>Faith</strong>
							<small>Purpose beyond school</small>
						</Layer>
					</div>
				</div>
			</Scene>
		</section>

		<section class="section">
			<div class="container split-feature">
				<div class="split-media">
					<div class="media-stack">
						<ScrollTilt className="media-stack-main" max={7} perspective={950}>
							<ParallaxImage
								src={withBase('/media/students-640.jpg')}
								alt="Goldphoenix learners together on campus"
								speed={0.16}
								style={{ height: '100%' }}
							/>
						</ScrollTilt>
						<div class="media-stack-badge">
							<img src={withBase(SITE.logoSmall)} alt="" width="54" height="51" />
							<span>
								<strong>One community</strong>
								<small>Grade 1 to Form 6</small>
							</span>
						</div>
						<div class="media-stack-dots" aria-hidden="true" />
					</div>
				</div>

				<div class="split-copy">
					<SectionHeading
						eyebrow="Our school"
						title="Purpose shapes the day, not just the motto."
						text={
							<p>
								Goldphoenix Christian College brings learning, faith and character together in a
								community where learners are known and encouraged. Families can choose a day or
								boarding pathway and speak with the college about the arrangement that fits.
							</p>
						}
					/>
					<RevealGrid className="value-mini-grid" amount={0.05} endAt={0.35} perspective={900}>
						{VALUES.slice(0, 4).map((value) => (
							<RevealCard class="value-mini" y={['18%', '0%']} rotateX={[5, 0]} scale={[0.98, 1]}>
								<Icon name={value.icon as never} size={20} />
								<span>{value.title}</span>
							</RevealCard>
						))}
					</RevealGrid>
					<a class="btn btn-navy" href={withBase('/about')}>
						About Goldphoenix
						<Icon name="arrow-right" size={18} />
					</a>
				</div>
			</div>
		</section>

		<div class="stats-strip">
			<RevealGrid className="container stats-grid" amount={0.06} endAt={0.35} perspective={900}>
				{STATS.map((stat) => (
					<RevealCard class="stat" y={['24%', '0%']} rotateX={[6, 0]}>
						<strong>{stat.value}</strong>
						<span>{stat.label}</span>
						<small>{stat.detail}</small>
					</RevealCard>
				))}
			</RevealGrid>
		</div>

		<section class="section section-cream">
			<div class="container">
				<SectionHeading
					eyebrow="Learning pathways"
					title="From first foundations to the next step."
					text={
						<p>
							A connected school journey gives learners room to build confidence, go deeper and
							discover what they can do.
						</p>
					}
					link={{ href: '/academics', label: 'See the academic programme' }}
				/>

				<RevealGrid className="program-grid" amount={0.09} perspective={1400}>
					{PROGRAMS.map((program, index) => (
						<RevealCard
							as="article"
							class={program.featured ? 'program-card is-featured' : 'program-card'}
							y={['32%', '0%']}
							rotateX={[9, 0]}
							rotateY={[index === 1 ? -4 : 4, 0]}
						>
							<div class="program-card-top">
								<span class="program-icon">
									<Icon name={program.symbol as never} size={26} />
								</span>
								<span class="program-number">{program.number}</span>
							</div>
							<p class="program-grades">{program.grades}</p>
							<h3>{program.title}</h3>
							<p class="program-text">{program.text}</p>
							<a class="text-link" href={withBase(program.href)}>
								{program.link}
								<Icon name="arrow-right" size={17} />
							</a>
						</RevealCard>
					))}
				</RevealGrid>
			</div>
		</section>

		<section class="section statement-section">
			<div class="container statement-grid">
				<div class="statement-mark" aria-hidden="true">
					<Icon name="quote" size={42} />
				</div>
				<div class="statement-body">
					<SplitText
						as="p"
						className="statement-text"
						by="word"
						stagger={0.035}
						endAt={0.35}
						layer={{ y: ['28%', '0%'], rotateX: [8, 0], reduced: 'disable' }}
					>
						An education that shapes how learners think, choose, serve and lead.
					</SplitText>
					<p class="statement-attribution">The Goldphoenix approach to learning with purpose.</p>
				</div>
			</div>
		</section>

		<section class="section values-section">
			<div class="container">
				<SectionHeading
					eyebrow="What we value"
					title="More than academic progress."
					text={
						<p>
							The school experience is built around purpose, character and community — the
							habits that stay with a learner long after the lesson ends.
						</p>
					}
					align="center"
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
			<div class="container band-navy-grid">
				<div class="band-navy-copy">
					<SectionHeading
						eyebrow="A day at Goldphoenix"
						title="Routine with room to grow."
						text={
							<p>
								From arrival to the close of day, learners are guided by clear routines,
								purposeful lessons and positive relationships.
							</p>
						}
						light
					/>
					<a class="btn btn-gold" href={withBase('/school-life')}>
						Explore school life
						<Icon name="arrow-right" size={18} />
					</a>
				</div>
				<RevealGrid as="ol" className="day-timeline" amount={0.05} perspective={1000}>
					{DAY_IN_LIFE.map((item) => (
						<RevealCard as="li" y={['18%', '0%']} rotateX={[8, 0]} scale={[0.99, 1]}>
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
			<div class="container">
				<SectionHeading
					eyebrow="For families"
					title="Helpful next steps."
					link={{ href: '/faq', label: 'Read the FAQs' }}
				/>
				<RevealGrid className="notice-grid" amount={0.08} perspective={1100}>
					{NOTICES.map((notice) => (
						<RevealCard as="article" class="notice-card" y={['24%', '0%']} rotateX={[6, 0]}>
							<span class="notice-tag">{notice.tag}</span>
							<h3>{notice.title}</h3>
							<p>{notice.text}</p>
							<a class="text-link" href={withBase(notice.href)}>
								{notice.link}
								<Icon name="arrow-right" size={17} />
							</a>
						</RevealCard>
					))}
				</RevealGrid>
			</div>
		</section>

		<CtaBand />
		</>
	);
}
