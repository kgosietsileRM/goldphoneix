import type { ComponentChildren } from 'preact';
import { SplitText } from 'pax3d/react';
import { Icon } from './Icon.jsx';

type SectionHeadingProps = {
	eyebrow?: string;
	title: ComponentChildren;
	text?: ComponentChildren;
	align?: 'left' | 'center';
	light?: boolean;
	link?: {
		href: string;
		label: string;
	};
};

export function SectionHeading({
	eyebrow,
	title,
	text,
	align = 'left',
	light = false,
	link,
}: SectionHeadingProps) {
	return (
		<div
			class={[
				'section-heading',
				`align-${align}`,
				light ? 'is-light' : '',
			]
				.filter(Boolean)
				.join(' ')}
		>
			{eyebrow && <p class="eyebrow">{eyebrow}</p>}
			<SplitText
				as="h2"
				by="word"
				stagger={0.025}
				endAt={0.3}
				layer={{
					y: ['32%', '0%'],
					rotateX: [12, 0],
					reduced: 'disable',
				}}
			>
				{title}
			</SplitText>
			{text && <div class="section-heading-text">{text}</div>}
			{link && (
				<a class="text-link" href={link.href}>
					{link.label}
					<Icon name="arrow-right" size={17} />
				</a>
			)}
		</div>
	);
}
