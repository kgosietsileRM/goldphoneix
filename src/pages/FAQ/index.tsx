import { CtaBand } from '../../components/CtaBand.jsx';
import { withBase } from '../../lib/paths.js';
import { FaqList } from '../../components/FaqList.jsx';
import { Icon } from '../../components/Icon.jsx';
import { PageHero } from '../../components/PageHero.jsx';
import { RevealCard, RevealGrid } from '../../components/Reveal.jsx';
import { FAQS, FAQ_GROUPS } from '../../content/site.js';

export function FAQ() {
	return (
		<>
			<PageHero
				eyebrow="Frequently asked questions"
				title="Answers for families, in one place."
				intro={
					<p>
						Find clear answers about forms, day and boarding, admissions, the demonstration
						results portal, and contacting Goldphoenix Christian College.
					</p>
				}
				image="/media/img%201%20-%203%20girls%20outside%20v2.jpg"
				imageAlt="Goldphoenix learners outside"
				crumbs={[{ label: 'FAQ' }]}
			/>

			<section class="section">
				<div class="container faq-layout">
					<aside class="faq-nav" aria-label="FAQ sections">
						<p class="eyebrow">Jump to</p>
						{FAQ_GROUPS.map((group) => (
							<a href={`#${group.toLowerCase().replace(/[^a-z]+/g, '-')}`}>
								{group}
								<span>{FAQS.filter((item) => item.group === group).length}</span>
							</a>
						))}
						<div class="faq-nav-help">
							<Icon name="mail" size={20} />
							<p>Still have a question?</p>
							<a href={withBase('/contact')}>Contact the college</a>
						</div>
					</aside>

					<RevealGrid className="faq-sections" amount={0.12} perspective={1100}>
						{FAQ_GROUPS.map((group) => {
							const items = FAQS.filter((item) => item.group === group);
							return (
								<RevealCard
									as="section"
									class="faq-group"
									id={group.toLowerCase().replace(/[^a-z]+/g, '-')}
									y={['24%', '0%']}
									rotateX={[6, 0]}
									scale={[0.99, 1]}
								>
									<div class="faq-group-head">
										<h2>{group}</h2>
										<span>{items.length} questions</span>
									</div>
									<FaqList items={items} start={-1} />
								</RevealCard>
							);
						})}
					</RevealGrid>
				</div>
			</section>

			<CtaBand
				title="Couldn’t find your answer?"
				text="The college can help with admissions, forms, boarding arrangements and current school information."
			/>
		</>
	);
}
