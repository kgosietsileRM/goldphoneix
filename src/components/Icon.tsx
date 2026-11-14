export type IconName =
	| 'arrow-right'
	| 'arrow-up-right'
	| 'pin'
	| 'phone'
	| 'mail'
	| 'facebook'
	| 'menu'
	| 'close'
	| 'check'
	| 'compass'
	| 'shield'
	| 'spark'
	| 'growth'
	| 'people'
	| 'hand'
	| 'sport'
	| 'art'
	| 'primary'
	| 'secondary'
	| 'home'
	| 'clock'
	| 'book'
	| 'globe'
	| 'award'
	| 'printer'
	| 'lock'
	| 'chevron-down'
	| 'quote';

const paths: Record<IconName, string[]> = {
	'arrow-right': ['M5 12h14M13 6l6 6-6 6'],
	'arrow-up-right': ['M7 17L17 7M8 7h9v9'],
	pin: ['M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z', 'M12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z'],
	phone: [
		'M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.4 2.1L8.1 9.6a16 16 0 0 0 6.3 6.3l1.2-1.2a2 2 0 0 1 2.1-.4c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2Z',
	],
	mail: ['M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z', 'm22 6-10 7L2 6'],
	facebook: [],
	menu: ['M3 6h18M3 12h18M3 18h18'],
	close: ['M6 6l12 12M18 6L6 18'],
	check: ['M20 6L9 17l-5-5'],
	compass: ['M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z', 'm16 8-2.5 5.5L8 16l2.5-5.5L16 8Z'],
	shield: ['M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z', 'm9 12 2 2 4-4'],
	spark: ['M12 2l1.8 5.2L19 9l-5.2 1.8L12 16l-1.8-5.2L5 9l5.2-1.8L12 2Z', 'M19 16l.7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7L19 16Z'],
	growth: ['M3 17l6-6 4 4 8-8', 'M15 7h6v6'],
	people: ['M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2', 'M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z', 'M22 21v-2a4 4 0 0 0-3-3.9', 'M16 3.1a4 4 0 0 1 0 7.8'],
	hand: ['M8 13V5a2 2 0 0 1 4 0v6M12 11V4a2 2 0 0 1 4 0v7M16 11V6a2 2 0 0 1 4 0v8a6 6 0 0 1-6 6h-2a6 6 0 0 1-5-2.7L4 14a2 2 0 0 1 3-2l2 2'],
	sport: ['M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z', 'M12 7l4.3 3.1-1.6 5H9.3l-1.6-5L12 7Z', 'M12 2v5M21 10l-4.7 3M18 21l-2.3-4.9M6 21l2.3-4.9M3 10l4.7 3'],
	art: ['M12 22a10 10 0 1 1 10-10c0 2.2-1.8 4-4 4h-2.2a2 2 0 0 0-1.4 3.4A2 2 0 0 1 12 22Z', 'M7.5 10.5h.01M10.5 7h.01M14.5 7h.01M17.5 10.5h.01'],
	primary: ['M4 19.5A2.5 2.5 0 0 1 6.5 17H20', 'M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z', 'M8 7h8'],
	secondary: ['M22 10L12 5 2 10l10 5 10-5Z', 'M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5'],
	home: ['M3 11l9-8 9 8', 'M5 10v10h14V10', 'M9 20v-6h6v6'],
	clock: ['M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z', 'M12 6v6l4 2'],
	book: ['M4 19.5A2.5 2.5 0 0 1 6.5 17H20', 'M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z'],
	globe: ['M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z', 'M2 12h20', 'M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20Z'],
	award: ['M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z', 'M8.2 13.8 7 22l5-3 5 3-1.2-8.2'],
	printer: ['M6 9V2h12v7', 'M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2', 'M6 14h12v8H6z'],
	lock: ['M5 11h14v10H5z', 'M8 11V7a4 4 0 0 1 8 0v4'],
	'chevron-down': ['m6 9 6 6 6-6'],
	quote: ['M9 11H5V6h5v5c0 4-2 6-5 7', 'M20 11h-4V6h5v5c0 4-2 6-5 7'],
};

export function Icon({
	name,
	size = 24,
	class: className,
	strokeWidth = 1.7,
}: {
	name: IconName;
	size?: number;
	class?: string;
	strokeWidth?: number;
}) {
	if (name === 'facebook') {
		return (
			<svg
				class={className}
				width={size}
				height={size}
				viewBox="0 0 24 24"
				aria-hidden="true"
				focusable="false"
				fill="currentColor"
			>
				<path d="M14.5 8.5V6.8c0-.8.2-1.3 1.4-1.3h1.8V2.2c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5v1.9H8v3.4h2.7V22h3.8v-10h2.8l.4-3.5h-3.2Z" />
			</svg>
		);
	}

	return (
		<svg
			class={className}
			width={size}
			height={size}
			viewBox="0 0 24 24"
			aria-hidden="true"
			focusable="false"
			fill="none"
			stroke="currentColor"
			stroke-width={strokeWidth}
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			{paths[name].map((d) => (
				<path d={d} />
			))}
		</svg>
	);
}
