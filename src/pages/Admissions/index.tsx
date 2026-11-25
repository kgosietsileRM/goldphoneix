import { ScrollTilt } from 'pax3d/react';
import { CardPhoto } from '../../components/CardPhoto.jsx';
import { CtaBand } from '../../components/CtaBand.jsx';
import { EnquiryForm } from '../../components/EnquiryForm.jsx';
import { FaqList } from '../../components/FaqList.jsx';
import { Icon } from '../../components/Icon.jsx';
import { PageHero } from '../../components/PageHero.jsx';
import { RevealCard, RevealGrid } from '../../components/Reveal.jsx';
import { SectionHeading } from '../../components/SectionHeading.jsx';
import { ADMISSION_STEPS, FAQS, REQUIREMENTS, SITE } from '../../content/site.js';

const admissionFaqs = FAQS.filter((item) => item.group === 'Admissions').slice(0, 5);

export function Admissions() {
	return (
		<>
			<PageHero
				eyebrow="Admissions"
				title="A clear, personal start to the conversation."
				intro={
					<p>
						Enquiries are welcome for Form 1–6, including day and boarding pathways. Tell the
						college a little about your learner and the team can explain the next steps.
					</p>
				}
				image="/media/img-2-passage-boy-girl-outside.jpg"
				imageAlt="Goldphoenix learners in the school passage"
				crumbs={[{ label: 'Admissions' }]}
			>
				<a class="btn btn-gold" href="#enquiry">
					Start an enquiry
					<Icon name="arrow-up-right" size={18} />
				</a>
				<a class="btn btn-ghost-light" href={`tel:${SITE.phones[0].replace(/\s/g, '')}`}>
					<Icon name="phone" size={18} />
					{SITE.phones[0]}
				</a>
			</PageHero>

			<section class="section quick-answer-section">
				<div class="container quick-answer-grid">
					<div>
						<p class="eyebrow">Admissions at a glance</p>
						<h2 class="quick-answer-title">Start with a conversation.</h2>
					</div>
					<div class="quick-answer">
						<p class="quick-answer-label">Quick answer</p>
						<p>
							To enquire about a place at Goldphoenix Christian College, contact the school by
							phone, email or the website form. The admissions team can confirm available places,
							current requirements, fees and day or boarding arrangements.
						</p>
						<div class="quick-answer-links">
							<a href={`tel:${SITE.phones[0].replace(/\s/g, '')}`}>
								<Icon name="phone" size={17} />
								{SITE.phones[0]}
							</a>
							<a href={`mailto:${SITE.email}`}>
								<Icon name="mail" size={17} />
								Email the college
							</a>
						</div>
					</div>
				</div>
			</section>

			<section class="section">
				<div class="container">
					<SectionHeading
						eyebrow="The process"
						title="Four straightforward steps."
						text={
							<p>
								The college will guide your family through its current application process. Start
								with an enquiry and the admissions team will explain what applies to your child.
							</p>
						}
					/>
					<RevealGrid as="ol" className="steps-grid" amount={0.07} perspective={1100}>
						{ADMISSION_STEPS.map((step) => (
							<RevealCard as="li" class="step-card" y={['28%', '0%']} rotateX={[8, 0]}>
								<CardPhoto src={step.image} alt={step.alt} />
								<span class="step-number">{step.step}</span>
								<h3>{step.title}</h3>
								<p>{step.text}</p>
							</RevealCard>
						))}
					</RevealGrid>
				</div>
			</section>

			<section class="section section-cream" id="requirements">
				<div class="container requirement-grid">
					<div class="requirement-copy">
						<SectionHeading
							eyebrow="What to prepare"
							title="Documents to have ready."
							text={
								<p>
									The college will confirm the current document list. Preparing the essentials
									early helps the conversation move forward.
								</p>
							}
						/>
						<ul class="requirement-list">
							{REQUIREMENTS.map((item) => (
								<li>
									<Icon name="check" size={18} />
									{item}
								</li>
							))}
						</ul>
					</div>
					<ScrollTilt className="fee-card" max={6} perspective={1000}>
						<span class="fee-icon">
							<Icon name="award" size={28} />
						</span>
						<p class="eyebrow">Fees and availability</p>
						<h2>Ask for the current information.</h2>
						<p>
							Fees, places and boarding arrangements can change. The college handles these details
							directly, so families receive accurate, current information for their learner.
						</p>
						<div class="fee-actions">
							<a class="btn btn-navy" href={`tel:${SITE.phones[0].replace(/\s/g, '')}`}>
								<Icon name="phone" size={18} />
								Call admissions
							</a>
							<a class="text-link" href={`mailto:${SITE.email}`}>
								Email the college
								<Icon name="arrow-right" size={17} />
							</a>
						</div>
					</ScrollTilt>
				</div>
			</section>

			<section class="section" id="enquiry">
				<div class="container enquiry-grid">
					<div class="enquiry-intro">
						<SectionHeading
							eyebrow="Admissions enquiry"
							title="Tell us about your learner."
							text={
								<p>
									Share the form you are considering and your preferred pathway. The form
									prepares an email for you to review and send.
								</p>
							}
						/>
						<div class="enquiry-contact">
							<a href={`tel:${SITE.phones[0].replace(/\s/g, '')}`}>
								<Icon name="phone" size={19} />
								<span>
									<strong>Call</strong>
									{SITE.phones[0]}
								</span>
							</a>
							<a href={`mailto:${SITE.email}`}>
								<Icon name="mail" size={19} />
								<span>
									<strong>Email</strong>
									{SITE.email}
								</span>
							</a>
							<a href={SITE.mapUrl} target="_blank" rel="noopener noreferrer">
								<Icon name="pin" size={19} />
								<span>
									<strong>Visit</strong>
									13 Claremont Road, Daylesford
								</span>
							</a>
						</div>
					</div>
					<EnquiryForm />
				</div>
			</section>

			<section class="section section-cream">
				<div class="container faq-preview-grid">
					<div>
						<SectionHeading
							eyebrow="Admissions questions"
							title="A few things families often ask."
							text={
								<p>
									If your question is not here, the full FAQ page covers forms, day and boarding,
									the results portal and contact details.
								</p>
							}
							link={{ href: '/faq', label: 'Read all FAQs' }}
						/>
					</div>
					<FaqList items={admissionFaqs} start={1} />
				</div>
			</section>

			<CtaBand
				title="Ready to take the next step?"
				text="The admissions team can talk you through the form, pathway, documents and timing."
				primaryLabel="Go to the enquiry form"
				primaryHref="#enquiry"
				secondaryHref={`mailto:${SITE.email}`}
				secondaryLabel="Email admissions"
			/>
		</>
	);
}
