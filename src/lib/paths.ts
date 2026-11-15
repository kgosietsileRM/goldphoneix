const envBase = import.meta.env?.BASE_URL;

export const BASE_PATH = (envBase ?? '/goldphoneix/').replace(/\/+$/, '');

export function stripBase(input: string): string {
	const path = input.split('#')[0].split('?')[0] || '/';
	if (!BASE_PATH) return path;
	if (path === BASE_PATH) return '/';
	if (path.startsWith(`${BASE_PATH}/`)) return path.slice(BASE_PATH.length) || '/';
	return path;
}

export function withBase(path: string): string {
	if (!path || !path.startsWith('/') || path.startsWith('//')) return path;
	if (!BASE_PATH) return path;
	if (path === BASE_PATH || path.startsWith(`${BASE_PATH}/`)) return path;
	return `${BASE_PATH}${path}`;
}
