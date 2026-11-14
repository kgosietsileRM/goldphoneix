import { defineConfig, type Plugin } from 'vite';
import preact from '@preact/preset-vite';

import { PRERENDER_ROUTES } from './src/content/site.ts';
import { buildLlms, buildRobots, buildSitemap } from './src/lib/seo.ts';

function seoAssets(): Plugin {
	return {
		name: 'goldphoenix-seo-assets',
		apply: 'build',
		generateBundle() {
			this.emitFile({
				type: 'asset',
				fileName: 'sitemap.xml',
				source: buildSitemap(),
			});
			this.emitFile({
				type: 'asset',
				fileName: 'robots.txt',
				source: buildRobots(),
			});
			this.emitFile({
				type: 'asset',
				fileName: 'llms.txt',
				source: buildLlms(),
			});
		},
	};
}

export default defineConfig({
	plugins: [
		preact({
			prerender: {
				enabled: true,
				renderTarget: '#app',
				additionalPrerenderRoutes: PRERENDER_ROUTES,
				previewMiddlewareEnabled: true,
				previewMiddlewareFallback: '/404',
			},
		}),
		seoAssets(),
	],
});
