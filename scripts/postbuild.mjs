import { access, copyFile } from 'node:fs/promises';
import { constants } from 'node:fs';
import { resolve } from 'node:path';

const dist = resolve('dist');
const notFoundPage = resolve(dist, '404', 'index.html');
const notFoundFallback = resolve(dist, '404.html');

try {
	await access(notFoundPage, constants.F_OK);
	await copyFile(notFoundPage, notFoundFallback);
	console.log('Created dist/404.html for GitHub Pages fallback routing.');
} catch {
	console.warn('Skipped dist/404.html because dist/404/index.html was not found.');
}
