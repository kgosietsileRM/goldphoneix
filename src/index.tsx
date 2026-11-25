import { LocationProvider, Route, Router, hydrate, prerender as ssr } from 'preact-iso';
import { NoScriptReducedMotion, ScrollProgress } from 'pax3d/react';

import { Footer } from './components/Footer.jsx';
import { Header } from './components/Header.jsx';
import { WhatsAppButton } from './components/WhatsAppButton.jsx';
import { usePageHead, useRouteScroll } from './lib/head.js';
import { BASE_PATH, stripBase } from './lib/paths.js';
import { getSeoHead } from './lib/seo.js';
import { About } from './pages/About/index.jsx';
import { Academics } from './pages/Academics/index.jsx';
import { Admissions } from './pages/Admissions/index.jsx';
import { Contact } from './pages/Contact/index.jsx';
import { FAQ } from './pages/FAQ/index.jsx';
import { Home } from './pages/Home/index.jsx';
import { Results } from './pages/Results/index.jsx';
import { SchoolLife } from './pages/SchoolLife/index.jsx';
import { NotFound } from './pages/_404.jsx';
import './style.css';
import { useEffect, useState } from 'preact/compat';

const APP_ROUTES = [
	{ path: '/', component: Home },
	{ path: '/about', component: About },
	{ path: '/academics', component: Academics },
	{ path: '/school-life', component: SchoolLife },
	{ path: '/admissions', component: Admissions },
	{ path: '/contact', component: Contact },
	{ path: '/faq', component: FAQ },
	{ path: '/results', component: Results },
];

function AppFrame() {
	usePageHead();
	useRouteScroll();

	const [headeLogoOpac,setHeadeLogoOpac] = useState(0)

	const handleScroll = (e:any)=>{
		if (e.target.scrollingElement.scrollTop>200) {
			setHeadeLogoOpac(0.35)
		}
		if (e.target.scrollingElement.scrollTop>300) {
			setHeadeLogoOpac(0.65)
		}
		if (e.target.scrollingElement.scrollTop>400) {
			setHeadeLogoOpac(1)
		}
		if (e.target.scrollingElement.scrollTop<100) {
			setHeadeLogoOpac(0)
		}

	}

	useEffect(()=>{
		document.addEventListener('scroll',handleScroll)
	})

	return (
		<>
			<a class="skip-link" href="#main">
				Skip to content
			</a>
			<ScrollProgress className="scroll-progress" position="top" height={3} color="#f0c51b" />
			<NoScriptReducedMotion css="[data-pax-layer]{opacity:1 !important;transform:none !important;filter:none !important}.purpose-scene{height:auto !important}.purpose-scene-sticky{position:relative !important;top:auto !important;height:auto !important;overflow:visible !important}.purpose-scene-word,.purpose-scene-cards,.purpose-scene-aura{display:none !important}.purpose-scene-inner{min-height:0 !important;padding:4rem 1.5rem !important}" />
			<Header headerLogoOpac={headeLogoOpac}/>
			<main id="main">
				<Router>
					{APP_ROUTES.map(({ path, component }) => (
						<Route path={path} component={component} />
					))}
					{BASE_PATH
						? APP_ROUTES.map(({ path, component }) => (
								<Route
									path={path === '/' ? `${BASE_PATH}/` : `${BASE_PATH}${path}`}
									component={component}
								/>
							))
						: []}
					<Route default component={NotFound} />
				</Router>
			</main>
			<Footer />
			<WhatsAppButton />
		</>
	);
}

export function App() {
	return (
		<LocationProvider>
			<AppFrame />
		</LocationProvider>
	);
}

if (typeof window !== 'undefined') {
	const root = document.getElementById('app');
	if (root) hydrate(<App />, root);
}

export async function prerender(data: { url: string }) {
	const result = await ssr(<App />);
	const head = getSeoHead(data.url);
	if (typeof result === 'string') return { html: result, head };
	const links = result.links ? Array.from(result.links, (link) => stripBase(link)) : result.links;
	return { ...result, links, head };
}
