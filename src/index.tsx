import { LocationProvider, Route, Router, hydrate, prerender as ssr } from 'preact-iso';
import { ScrollProgress } from 'pax3d/react';

import { Footer } from './components/Footer.jsx';
import { Header } from './components/Header.jsx';
import { usePageHead, useRouteScroll } from './lib/head.js';
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

function AppFrame() {
	usePageHead();
	useRouteScroll();

	return (
		<>
			<a class="skip-link" href="#main">
				Skip to content
			</a>
			<ScrollProgress className="scroll-progress" position="top" height={3} color="#f0c51b" />
			{/* <NoScriptReducedMotion css="[data-pax-layer]{opacity:1 !important;transform:none !important;filter:none !important}.purpose-scene{height:auto !important}.purpose-scene-sticky{position:relative !important;top:auto !important;height:auto !important;overflow:visible !important}.purpose-scene-word,.purpose-scene-cards,.purpose-scene-aura{display:none !important}.purpose-scene-inner{min-height:0 !important;padding:4rem 1.5rem !important}" /> */}
			<Header />
			<main id="main">
				<Router>
					<Route path="/" component={Home} />
					<Route path="/about" component={About} />
					<Route path="/academics" component={Academics} />
					<Route path="/school-life" component={SchoolLife} />
					<Route path="/admissions" component={Admissions} />
					<Route path="/contact" component={Contact} />
					<Route path="/faq" component={FAQ} />
					<Route path="/results" component={Results} />
					<Route default component={NotFound} />
				</Router>
			</main>
			<Footer />
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
	return typeof result === 'string' ? { html: result, head } : { ...result, head };
}
