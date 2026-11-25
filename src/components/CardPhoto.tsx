import { withBase } from '../lib/paths.js';

export function CardPhoto({ src, alt }: { src: string; alt: string }) {
	return (
		<div class="card-photo">
			<img src={withBase(src)} alt={alt} loading="lazy" decoding="async" />
		</div>
	);
}
