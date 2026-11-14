import { Layer, Scene } from 'pax3d/react';
import { SITE } from '../content/site.js';
import { Icon } from './Icon.jsx';

type CtaBandProps = {
	eyebrow?: string;
	title?: string;
	text?: string;
	primaryHref?: string;
	primaryLabel?: string;
	secondaryHref?: string;
	secondaryLabel?: string;
};

export function CtaBand({
	eyebrow = 'Next step',
	title = 'Come and see what purposeful learning looks like.',
	text = 'Talk with the college about your child’s grade, the day or boarding pathway, and the admissions process.',
	primaryHref = '/admissions#enquiry',
	primaryLabel = 'Start an enquiry',
	secondaryHref = `tel:${SITE.phones[0].replace(/\s/g, '')}`,
	secondaryLabel = SITE.phones[0],
}: CtaBandProps) {
	return (
		<Scene as="section" className="cta-band" perspective={1200}>
			<Layer
				class="cta-band-photo"
				y={['-6%', '6%']}
				scale={[1.05, 1.12]}
				range={[0, 1]}
				reduced="disable"
				aria-hidden="true"
			>
				<img src="/media/bg-2.jpg" alt="" loading="lazy" decoding="async" />
			</Layer>
			<Layer
				class="cta-band-pattern"
				y={['-8%', '8%']}
				scale={[1.04, 1.12]}
				range={[0, 1]}
				reduced="disable"
				aria-hidden="true"
			/>
			<Layer
				class="container cta-band-inner"
				y={['8%', '0%']}
				rotateX={[2, 0]}
				range={[0, 0.35]}
				reduced="disable"
			>
				<div class="cta-band-copy">
					<p class="eyebrow eyebrow-light">{eyebrow}</p>
					<h2>{title}</h2>
					<p>{text}</p>
				</div>
				<div class="cta-band-actions">
					<a class="btn btn-gold" href={primaryHref}>
						{primaryLabel}
						<Icon name="arrow-up-right" size={18} />
					</a>
					<a class="btn btn-ghost-light" href={secondaryHref}>
						<Icon name={secondaryHref.startsWith('tel:') ? 'phone' : 'mail'} size={18} />
						{secondaryLabel}
					</a>
					<a class="cta-band-directions" href={SITE.directionsUrl} target="_blank" rel="noopener noreferrer">
						<Icon name="pin" size={16} />
						Directions to Daylesford
					</a>
				</div>
			</Layer>
		</Scene>
	);
}
