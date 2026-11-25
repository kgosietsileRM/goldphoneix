import {
	FAQS,
	FAQ_GROUPS,
	INDEXABLE_ROUTES,
	SITE,
	SEO_ROUTES,
	ADMISSION_STEPS,
} from '../content/site.js';

export type HeadElement = {
	type: string;
	props?: Record<string, string>;
	children?: string;
};

export type SeoHead = {
	lang: string;
	title: string;
	elements: Set<HeadElement>;
};

export type PageSeo = {
	path: string;
	title: string;
	description: string;
	canonical: string;
	image: string;
	noindex: boolean;
	updated: string;
	jsonLd: unknown[];
};

export function normalizePath(input?: string | null): string {
	if (!input) return '/';
	const path = input.split('#')[0].split('?')[0] || '/';
	const withSlash = path.startsWith('/') ? path : `/${path}`;
	return withSlash !== '/' ? withSlash.replace(/\/+$/, '') : '/';
}

export function absoluteUrl(path = '/'): string {
	if (/^https?:\/\//i.test(path)) return path;
	const base = SITE.url.replace(/\/+$/, '');
	return path === '/' ? `${base}/` : `${base}${path}`;
}

const schoolId = `${SITE.url}/#school`;
const websiteId = `${SITE.url}/#website`;

function postalAddress() {
	return {
		'@type': 'PostalAddress',
		streetAddress: SITE.address.street,
		addressLocality: `${SITE.address.suburb}, ${SITE.address.city}`,
		addressRegion: 'Midlands',
		addressCountry: 'ZW',
	};
}

function schoolSchema() {
	return {
		'@type': 'School',
		'@id': schoolId,
		name: SITE.name,
		alternateName: 'Goldphoenix Christian College, Gweru',
		description: SITE.description,
		url: absoluteUrl('/'),
		logo: absoluteUrl('/media/logo-1080.svg'),
		image: absoluteUrl(SITE.heroImage),
		email: SITE.email,
		telephone: SITE.phones[0],
		foundingLocation: {
			'@type': 'Place',
			name: 'Daylesford, Gweru, Zimbabwe',
		},
		address: postalAddress(),
		geo: {
			'@type': 'GeoCoordinates',
			latitude: SITE.coords.lat,
			longitude: SITE.coords.lng,
		},
		hasMap: SITE.mapUrl,
		areaServed: {
			'@type': 'Place',
			name: 'Gweru, Zimbabwe',
		},
		sameAs: [SITE.facebook],
		contactPoint: [
			{
				'@type': 'ContactPoint',
				contactType: 'admissions',
				telephone: SITE.phones,
				email: SITE.email,
				areaServed: 'ZW',
				availableLanguage: 'English',
			},
		],
		knowsLanguage: 'English',
	};
}

function websiteSchema() {
	return {
		'@type': 'WebSite',
		'@id': websiteId,
		url: absoluteUrl('/'),
		name: SITE.name,
		description: SITE.description,
		inLanguage: 'en',
		publisher: { '@id': schoolId },
	};
}

function breadcrumbSchema(path: string, title: string) {
	const items = [
		{
			'@type': 'ListItem',
			position: 1,
			name: 'Home',
			item: absoluteUrl('/'),
		},
	];
	if (path !== '/') {
		items.push({
			'@type': 'ListItem',
			position: 2,
			name: title,
			item: absoluteUrl(path),
		});
	}
	return {
		'@type': 'BreadcrumbList',
		itemListElement: items,
	};
}

function webPageSchema(seo: PageSeo, extra: Record<string, unknown> = {}) {
	return {
		'@type': 'WebPage',
		'@id': `${seo.canonical}#webpage`,
		url: seo.canonical,
		name: seo.title,
		description: seo.description,
		inLanguage: 'en',
		dateModified: seo.updated,
		isPartOf: { '@id': websiteId },
		about: { '@id': schoolId },
		primaryImageOfPage: {
			'@type': 'ImageObject',
			url: seo.image,
		},
		...extra,
	};
}

function faqSchema() {
	return {
		'@type': 'FAQPage',
		'@id': `${absoluteUrl('/faq')}#faq`,
		mainEntity: FAQS.map((item) => ({
			'@type': 'Question',
			name: item.q,
			acceptedAnswer: {
				'@type': 'Answer',
				text: item.a,
			},
		})),
	};
}

function admissionsHowToSchema() {
	return {
		'@type': 'HowTo',
		name: 'How to apply to Goldphoenix Christian College',
		description:
			'Start an admissions enquiry, speak with the school, prepare the requested documents and confirm enrolment.',
		totalTime: 'P2W',
		step: ADMISSION_STEPS.map((step, index) => ({
			'@type': 'HowToStep',
			position: index + 1,
			name: step.title,
			text: step.text,
			url: `${absoluteUrl('/admissions')}#enquiry`,
		})),
	};
}

function contactPageSchema(seo: PageSeo) {
	return webPageSchema(seo, {
		'@type': 'ContactPage',
		mainEntity: { '@id': schoolId },
		speakable: {
			'@type': 'SpeakableSpecification',
			cssSelector: ['h1', '.quick-answer'],
		},
	});
}

export function getPageSeo(inputPath?: string | null): PageSeo {
	const path = normalizePath(inputPath);
	const route = SEO_ROUTES[path] ?? SEO_ROUTES['/404'];
	const canonical = absoluteUrl(path === '/404' ? '/404' : path);
	const image = absoluteUrl(route.preloadImage ?? SITE.heroImage);
	const noindex = Boolean(route.noindex);

	const seo: PageSeo = {
		path,
		title: route.title,
		description: route.description,
		canonical,
		image,
		noindex,
		updated: route.updated ?? '2026-01-15',
		jsonLd: [],
	};

	const jsonLd: unknown[] = [];
	if (path === '/') {
		jsonLd.push(schoolSchema(), websiteSchema());
		jsonLd.push(
			webPageSchema(seo, {
				speakable: {
					'@type': 'SpeakableSpecification',
					cssSelector: ['h1', '.quick-answer'],
				},
			}),
		);
	} else if (path === '/faq') {
		jsonLd.push(webPageSchema(seo), breadcrumbSchema(path, 'Frequently Asked Questions'), faqSchema());
	} else if (path === '/admissions') {
		jsonLd.push(webPageSchema(seo), breadcrumbSchema(path, 'Admissions'), admissionsHowToSchema());
	} else if (path === '/contact') {
		jsonLd.push(contactPageSchema(seo), breadcrumbSchema(path, 'Contact'));
	} else if (path === '/academics') {
		jsonLd.push(webPageSchema(seo), breadcrumbSchema(path, 'Academics'));
	} else if (path === '/about') {
		jsonLd.push(webPageSchema(seo), breadcrumbSchema(path, 'About Our School'));
	} else if (path === '/school-life') {
		jsonLd.push(webPageSchema(seo), breadcrumbSchema(path, 'School Life'));
	} else {
		jsonLd.push(webPageSchema(seo));
		if (path !== '/404') jsonLd.push(breadcrumbSchema(path, route.title.split('|')[0].trim()));
	}

	seo.jsonLd = jsonLd;
	return seo;
}

function meta(name: string, content: string): HeadElement {
	return { type: 'meta', props: { name, content } };
}

function property(propertyName: string, content: string): HeadElement {
	return { type: 'meta', props: { property: propertyName, content } };
}

export function getSeoHead(inputPath?: string | null): SeoHead {
	const seo = getPageSeo(inputPath);
	const elements = new Set<HeadElement>();

	elements.add(meta('description', seo.description));
	elements.add(
		meta(
			'robots',
			seo.noindex
				? 'noindex,follow,max-image-preview:large'
				: 'index,follow,max-image-preview:large',
		),
	);
	elements.add(meta('author', SITE.name));
	elements.add(property('og:site_name', SITE.name));
	elements.add(property('og:locale', 'en_ZW'));
	elements.add(property('og:type', 'website'));
	elements.add(property('og:title', seo.title));
	elements.add(property('og:description', seo.description));
	elements.add(property('og:url', seo.canonical));
	elements.add(property('og:image', seo.image));
	elements.add(property('og:image:alt', 'Students at Goldphoenix Christian College'));
	elements.add(meta('twitter:card', 'summary_large_image'));
	elements.add(meta('twitter:title', seo.title));
	elements.add(meta('twitter:description', seo.description));
	elements.add(meta('twitter:image', seo.image));
	elements.add({ type: 'link', props: { rel: 'canonical', href: seo.canonical } });

	if (seo.path === '/') {
		elements.add({
			type: 'link',
			props: {
				rel: 'preload',
				as: 'image',
				href: seo.image,
				fetchpriority: 'high',
			},
		});
	}

	elements.add({
		type: 'script',
		props: { type: 'application/ld+json', 'data-seo-jsonld': seo.path },
		children: JSON.stringify(seo.jsonLd).replace(/<\/script/gi, '<\\/script'),
	});

	return {
		lang: 'en',
		title: seo.title,
		elements,
	};
}

export function buildSitemap(): string {
	const urls = INDEXABLE_ROUTES.map((route) => {
		const loc = absoluteUrl(route.path);
		const priority = route.path === '/' ? '1.0' : route.path === '/admissions' ? '0.9' : '0.8';
		return [
			'  <url>',
			`    <loc>${loc}</loc>`,
			`    <lastmod>${route.updated ?? '2026-01-15'}</lastmod>`,
			'    <changefreq>monthly</changefreq>',
			`    <priority>${priority}</priority>`,
			'  </url>',
		].join('\n');
	});
	return [
		'<?xml version="1.0" encoding="UTF-8"?>',
		'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
		...urls,
		'</urlset>',
		'',
	].join('\n');
}

export function buildRobots(): string {
	return [
		'User-agent: *',
		'Allow: /',
		'Disallow: /404',
		'',
		'User-agent: GPTBot',
		'Allow: /',
		'',
		'User-agent: ClaudeBot',
		'Allow: /',
		'',
		'User-agent: PerplexityBot',
		'Allow: /',
		'',
		'User-agent: Google-Extended',
		'Allow: /',
		'',
		'User-agent: CCBot',
		'Allow: /',
		'',
		`Sitemap: ${absoluteUrl('/sitemap.xml')}`,
		'',
	].join('\n');
}

export function buildLlms(): string {
	const lines = [
		`# ${SITE.name}`,
		'',
		`> ${SITE.description}`,
		'',
		'## Key facts',
		'',
		'- School type: private Christian boarding and day high school',
		'- Forms: Form 1–6 (secondary)',
		'- Pathways: day school and boarding school',
		`- Location: ${SITE.address.street}, ${SITE.address.suburb}, ${SITE.address.city}, ${SITE.address.country}`,
		`- Coordinates: ${SITE.coords.lat}, ${SITE.coords.lng}`,
		`- Phone: ${SITE.phones.join(', ')}`,
		`- Email: ${SITE.email}`,
		'- Results portal on this website: demonstration only, not live student data',
		'',
		'## Main pages',
		'',
		...INDEXABLE_ROUTES.map((route) => `- [${route.title}](${absoluteUrl(route.path)})`),
		'',
		'## Frequently asked questions',
		'',
		...FAQ_GROUPS.flatMap((group) => [
			`### ${group}`,
			'',
			...FAQS.filter((item) => item.group === group).flatMap((item) => [
				`**${item.q}**`,
				'',
				item.a,
				'',
			]),
		]),
		'## Contact',
		'',
		`${SITE.name}`,
		`${SITE.address.street}, ${SITE.address.suburb}, ${SITE.address.city}, ${SITE.address.country}`,
		`Phone: ${SITE.phones.join(' · ')}`,
		`Email: ${SITE.email}`,
		`Facebook: ${SITE.facebook}`,
		'',
		'Last updated: 15 January 2026',
		'',
	];
	return lines.join('\n');
}
