import type { ComponentChildren } from 'preact';
import { Layer, ParallaxImage, Scene, ScrollTilt, SplitText } from 'pax3d/react';
import { withBase } from '../lib/paths.js';
import { Icon } from './Icon.jsx';

type Crumb = {
	label: string;
	href?: string;
};

type PageHeroProps = {
	eyebrow: string;
	title: ComponentChildren;
	intro: ComponentChildren;
	image?: string;
	imageAlt?: string;
	crumbs?: Crumb[];
	children?: ComponentChildren;
	aside?: ComponentChildren;
};

export function PageHero({
	eyebrow,
	title,
	intro,
	image,
	imageAlt = '',
	crumbs = [],
	children,
	aside,
}: PageHeroProps) {
	return (
		<section class="page-hero">
			<div class="page-hero-orb page-hero-orb-one" aria-hidden="true" />
			<div class="page-hero-orb page-hero-orb-two" aria-hidden="true" />
			<div class="container page-hero-inner">
				<Scene className="page-hero-scene" perspective={1300}>
					<nav class="breadcrumbs" aria-label="Breadcrumb">
						<a href={withBase('/')}>
							<Icon name="home" size={14} />
							Home
						</a>
						{crumbs.map((crumb) => (
							<>
								<span class="crumb-sep" aria-hidden="true">
									/
								</span>
								{crumb.href ? <a href={withBase(crumb.href)}>{crumb.label}</a> : <span aria-current="page">{crumb.label}</span>}
							</>
						))}
					</nav>

					<div class={image ? 'page-hero-grid has-media' : 'page-hero-grid'}>
						<Layer
							class="page-hero-copy"
							y={['0%', '4%']}
							rotateX={[0, -1.5]}
							range={[0, 0.35]}
							reduced="disable"
						>
							<p class="eyebrow eyebrow-light">{eyebrow}</p>
							<SplitText
								as="h1"
								by="word"
								stagger={0.025}
								endAt={0.3}
								layer={{
									y: ['22%', '0%'],
									rotateX: [10, 0],
									reduced: 'disable',
								}}
							>
								{title}
							</SplitText>
							<div class="page-hero-lead">{intro}</div>
							{children && <div class="page-hero-actions">{children}</div>}
						</Layer>

						{image && (
							<div class="page-hero-media">
								<Layer
									class="page-hero-media-parallax"
									y={['3%', '8%']}
									z={[0, -70]}
									rotateY={[7, -4]}
									scale={[1, 0.98]}
									range={[0, 0.35]}
									reduced="disable"
								>
									<ScrollTilt className="page-hero-media-frame" max={6} perspective={900}>
										<ParallaxImage
											src={withBase(image)}
											alt={imageAlt}
											speed={0.12}
											style={{ height: '100%' }}
										/>
										<span class="page-hero-media-badge">
											<img src={withBase('/media/crest-128.png')} alt="" width="44" height="41" />
											<span>
												<strong>Goldphoenix</strong>
												<small>Christian College</small>
											</span>
										</span>
									</ScrollTilt>
								</Layer>
								{aside && <div class="page-hero-aside">{aside}</div>}
							</div>
						)}
					</div>
				</Scene>
			</div>
		</section>
	);
}
