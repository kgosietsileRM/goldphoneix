import type { FaqItem } from '../content/site.js';
import { Icon } from './Icon.jsx';

export function FaqList({ items, start = 0 }: { items: FaqItem[]; start?: number }) {
	return (
		<div class="faq-list">
			{items.map((item, index) => (
				<details class="faq-item" open={start === 0 && index === 0}>
					<summary>
						<span>{item.q}</span>
						<span class="faq-icon" aria-hidden="true">
							<Icon name="chevron-down" size={20} />
						</span>
					</summary>
					<div class="faq-answer">
						<p>{item.a}</p>
					</div>
				</details>
			))}
		</div>
	);
}
