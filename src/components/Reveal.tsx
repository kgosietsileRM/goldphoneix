import type { ComponentChildren } from 'preact';
import { Layer, Scene, Stagger } from 'pax3d/react';

type RevealGridProps = {
	as?: any;
	className?: string;
	children: ComponentChildren;
	amount?: number;
	endAt?: number;
	perspective?: number;
	id?: string;
};

export function RevealGrid({
	as = 'div',
	className,
	children,
	amount = 0.04,
	endAt = 0.35,
	perspective = 1200,
	id,
}: RevealGridProps) {
	return (
		<Scene as={as} className={className} perspective={perspective} id={id}>
			<Stagger amount={amount} endAt={endAt}>
				{children}
			</Stagger>
		</Scene>
	);
}

type RevealCardProps = {
	as?: any;
	className?: string;
	'class'?: string;
	children: ComponentChildren;
	range?: [number, number];
	y?: [string, string];
	rotateX?: [number, number];
	scale?: [number, number];
	opacity?: [number, number];
	blur?: [number, number];
	[key: string]: any;
};

export function RevealCard({
	as = 'div',
	className,
	'class': classProp,
	children,
	y = ['18%', '0%'],
	rotateX = [5, 0],
	scale = [0.99, 1],
	opacity = [1, 1],
	blur = [0, 0],
	...rest
}: RevealCardProps) {
	return (
		<Layer
			as={as}
			className={className ?? classProp}
			y={y}
			rotateX={rotateX}
			scale={scale}
			opacity={opacity}
			blur={blur}
			reduced="disable"
			{...rest}
		>
			{children}
		</Layer>
	);
}
