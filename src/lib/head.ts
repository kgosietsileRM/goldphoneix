import { useEffect } from 'preact/hooks';
import { useLocation } from 'preact-iso';
import { stripBase } from './paths.js';
import { getPageSeo } from './seo.js';

function upsertMeta(attribute: 'name' | 'property', key: string, content: string) {
	let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
	if (!element) {
		element = document.createElement('meta');
		element.setAttribute(attribute, key);
		document.head.appendChild(element);
	}
	element.setAttribute('content', content);
}

function upsertLink(rel: string, href: string) {
	let element = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
	if (!element) {
		element = document.createElement('link');
		element.setAttribute('rel', rel);
		document.head.appendChild(element);
	}
	element.setAttribute('href', href);
}

function applyJsonLd(path: string, jsonLd: unknown[]) {
	let script = document.head.querySelector<HTMLScriptElement>('script[data-seo-jsonld]');
	if (!script) {
		script = document.createElement('script');
		script.type = 'application/ld+json';
		script.setAttribute('data-seo-jsonld', path);
		document.head.appendChild(script);
	}
	script.setAttribute('data-seo-jsonld', path);
	script.textContent = JSON.stringify(jsonLd);
}

export function applyPageHead(inputUrl: string) {
	const seo = getPageSeo(stripBase(inputUrl));
	const socialImage = seo.image;

	document.title = seo.title;
	document.documentElement.lang = 'en';
	upsertMeta('name', 'description', seo.description);
	upsertMeta(
		'name',
		'robots',
		seo.noindex ? 'noindex,follow,max-image-preview:large' : 'index,follow,max-image-preview:large',
	);
	upsertMeta('property', 'og:title', seo.title);
	upsertMeta('property', 'og:description', seo.description);
	upsertMeta('property', 'og:url', seo.canonical);
	upsertMeta('property', 'og:image', socialImage);
	upsertMeta('name', 'twitter:title', seo.title);
	upsertMeta('name', 'twitter:description', seo.description);
	upsertMeta('name', 'twitter:image', socialImage);
	upsertLink('canonical', seo.canonical);
	applyJsonLd(seo.path, seo.jsonLd);
}

export function usePageHead() {
	const { url } = useLocation();
	useEffect(() => {
		applyPageHead(url);
	}, [url]);
}

export function useRouteScroll() {
	const { url } = useLocation();
	useEffect(() => {
		const hash = url.includes('#') ? url.slice(url.indexOf('#') + 1) : '';
		const frame = window.requestAnimationFrame(() => {
			if (hash) {
				const target = document.getElementById(hash);
				if (target) {
					target.scrollIntoView({ behavior: 'smooth', block: 'start' });
					return;
				}
			}
			window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
		});
		return () => window.cancelAnimationFrame(frame);
	}, [url]);
}
