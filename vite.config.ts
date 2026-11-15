import { defineConfig, type Plugin } from 'vite';
import preact from '@preact/preset-vite';

import { PRERENDER_ROUTES } from './src/content/site.ts';
import { buildLlms, buildRobots, buildSitemap } from './src/lib/seo.ts';

const env =
	(globalThis as { process?: { env: Record<string, string | undefined> } }).process?.env ?? {};
const repo = env.GITHUB_REPOSITORY?.split('/')[1];
const repositoryBase = repo
	? repo.toLowerCase().endsWith('.github.io')
		? '/'
		: `/${repo}/`
	: '/goldphoneix/';
const configuredBase =
	env.BASE_PATH ?? (env.GITHUB_ACTIONS ? repositoryBase : '/goldphoneix/');
const base = configuredBase.endsWith('/') ? configuredBase : `${configuredBase}/`;

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
	base,
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
