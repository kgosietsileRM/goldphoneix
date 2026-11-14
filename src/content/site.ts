export const SITE = {
	name: 'Goldphoenix Christian College',
	shortName: 'Goldphoenix',
	tagline: 'Learning with Purpose',
	description:
		'Goldphoenix Christian College is a private Christian day and boarding school in Daylesford, Gweru, Zimbabwe, offering Grade 1–7 and Form 1–6.',
	url: 'https://goldphoenixchristiancollege.co.zw',
	email: 'goldphoenixchristiancollege@gmail.com',
	phones: ['+263 77 604 5757', '+263 713 056 741', '+263 716 166 326'],
	address: {
		street: '13 Claremont Road',
		suburb: 'Daylesford',
		city: 'Gweru',
		country: 'Zimbabwe',
	},
	coords: {
		lat: -19.492362,
		lng: 29.869037,
	},
	mapUrl: 'https://www.google.com/maps/search/?api=1&query=-19.492362%2C29.869037',
	directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=-19.492362%2C29.869037',
	mapEmbedUrl: 'https://www.google.com/maps?q=-19.492362,29.869037&z=16&output=embed',
	facebook: 'https://www.facebook.com/profile.php?id=61581874334790',
	grades: 'Grade 1–7 · Form 1–6',
	pathways: 'Day & boarding',
	logo: '/media/crest.png',
	logoSmall: '/media/crest-128.png',
	heroImage: '/media/students.jpg',
	campusImage: '/media/campus.jpg',
	themeColor: '#0b1059',
};

export type NavItem = {
	label: string;
	href: string;
};

export const NAV: NavItem[] = [
	{ label: 'Home', href: '/' },
	{ label: 'Our School', href: '/about' },
	{ label: 'Academics', href: '/academics' },
	{ label: 'School Life', href: '/school-life' },
	{ label: 'Admissions', href: '/admissions' },
	{ label: 'Contact', href: '/contact' },
];

export type SeoRoute = {
	path: string;
	title: string;
	description: string;
	noindex?: boolean;
	preloadImage?: string;
	updated?: string;
};

export const SEO_ROUTES: Record<string, SeoRoute> = {
	'/': {
		path: '/',
		title: 'Goldphoenix Christian College | Learning with Purpose in Gweru',
		description:
			'Goldphoenix Christian College is a private Christian day and boarding school in Daylesford, Gweru, offering Grade 1–7 and Form 1–6.',
		preloadImage: '/media/students.jpg',
		updated: '2026-01-15',
	},
	'/about': {
		path: '/about',
		title: 'About Our School | Goldphoenix Christian College',
		description:
			'Discover the Christian ethos, values and learning community behind Goldphoenix Christian College in Daylesford, Gweru, Zimbabwe.',
		updated: '2026-01-15',
	},
	'/academics': {
		path: '/academics',
		title: 'Academics: Grade 1–7 and Form 1–6 | Goldphoenix Christian College',
		description:
			'Explore primary and secondary learning at Goldphoenix Christian College, from Grade 1–7 foundations to Form 1–6 subject depth and support.',
		updated: '2026-01-15',
	},
	'/school-life': {
		path: '/school-life',
		title: 'School Life: Day and Boarding | Goldphoenix Christian College',
		description:
			'Learn about day and boarding school life at Goldphoenix Christian College, including pastoral care, routines and co-curricular opportunities.',
		updated: '2026-01-15',
	},
	'/admissions': {
		path: '/admissions',
		title: 'Admissions and Enquiries | Goldphoenix Christian College',
		description:
			'Start an admissions enquiry for Goldphoenix Christian College. See the application steps, what to prepare, and how to contact the school.',
		updated: '2026-01-15',
	},
	'/contact': {
		path: '/contact',
		title: 'Contact and Directions | Goldphoenix Christian College',
		description:
			'Contact Goldphoenix Christian College in Daylesford, Gweru. Find the school address, phone numbers, email, Facebook page and directions.',
		updated: '2026-01-15',
	},
	'/faq': {
		path: '/faq',
		title: 'Frequently Asked Questions | Goldphoenix Christian College',
		description:
			'Answers to common questions about grades, day and boarding, admissions, the results portal and the location of Goldphoenix Christian College.',
		updated: '2026-01-15',
	},
	'/results': {
		path: '/results',
		title: 'Student Results Portal (Demo) | Goldphoenix Christian College',
		description:
			'Preview the Goldphoenix Christian College student results portal with a clearly marked demonstration account and sample academic report.',
		noindex: true,
		updated: '2026-01-15',
	},
	'/404': {
		path: '/404',
		title: 'Page Not Found | Goldphoenix Christian College',
		description:
			'The page you are looking for could not be found. Return to Goldphoenix Christian College or explore our school pages.',
		noindex: true,
	},
};

export const INDEXABLE_ROUTES = Object.values(SEO_ROUTES).filter((route) => !route.noindex);

export const PRERENDER_ROUTES = [
	'/',
	'/about',
	'/academics',
	'/school-life',
	'/admissions',
	'/contact',
	'/faq',
	'/results',
	'/404',
];

export const FACTS = [
	{ value: 'Grade 1–7', label: 'Primary school' },
	{ value: 'Form 1–6', label: 'Secondary school' },
	{ value: 'Day & boarding', label: 'Two pathways' },
	{ value: 'Gweru, Zimbabwe', label: 'Daylesford campus' },
];

export const STATS = [
	{ value: 13, suffix: '', label: 'Grade and form levels', detail: 'Grade 1–7 and Form 1–6' },
	{ value: 7, suffix: '', label: 'Primary grades', detail: 'A connected start to school' },
	{ value: 6, suffix: '', label: 'Secondary forms', detail: 'Growing subject depth and confidence' },
	{ value: 2, suffix: '', label: 'School pathways', detail: 'Day and boarding options' },
];

export const VALUES = [
	{
		icon: 'compass',
		title: 'Purposeful learning',
		text: 'Strong foundations, thoughtful questions and a clear sense of direction.',
	},
	{
		icon: 'shield',
		title: 'Character and integrity',
		text: 'An education that shapes how learners think, choose and treat others.',
	},
	{
		icon: 'spark',
		title: 'A Christian ethos',
		text: 'Faith, care and service sit at the heart of the school community.',
	},
	{
		icon: 'growth',
		title: 'Growth and confidence',
		text: 'Room to discover strengths, build resilience and take the next step.',
	},
	{
		icon: 'people',
		title: 'Community and belonging',
		text: 'Positive relationships between learners, families and staff.',
	},
	{
		icon: 'hand',
		title: 'Service and leadership',
		text: 'Opportunities to contribute, lead and look beyond oneself.',
	},
];

export const PROGRAMS = [
	{
		number: '01',
		symbol: 'primary',
		title: 'Primary School',
		grades: 'Grade 1–7',
		text: 'Building confident readers, curious thinkers and strong foundations for lifelong learning.',
		href: '/academics#primary',
		link: 'Explore primary learning',
		featured: false,
	},
	{
		number: '02',
		symbol: 'secondary',
		title: 'Secondary School',
		grades: 'Form 1–6',
		text: 'Deepening subject knowledge, discovering strengths and preparing for the next step.',
		href: '/academics#secondary',
		link: 'Explore secondary learning',
		featured: true,
	},
	{
		number: '03',
		symbol: 'home',
		title: 'Day & Boarding',
		grades: 'Two pathways',
		text: 'Two school-life options, so families can choose the arrangement that fits their learner.',
		href: '/school-life',
		link: 'Explore school life',
		featured: false,
	},
];

export const PATHWAYS = [
	{
		label: 'For day learners',
		title: 'Learning alongside family life.',
		text: 'Day learners attend school and return home after the school day. Families can contact the school for the daily timetable, transport information and current arrangements.',
		href: '/school-life#day',
		link: 'Ask about day school',
		tone: 'day',
	},
	{
		label: 'For boarding learners',
		title: 'A residential school experience.',
		text: 'Boarding offers families a residential pathway. Speak with the college about accommodation, supervision, meals, weekend routines and what learners should bring.',
		href: '/school-life#boarding',
		link: 'Ask about boarding',
		tone: 'boarding',
	},
];

export const DAY_IN_LIFE = [
	{
		time: 'Morning',
		title: 'Arrival and belonging',
		text: 'Learners settle into the day with routine, pastoral care and a clear start to learning.',
	},
	{
		time: 'Morning lessons',
		title: 'Focused foundations',
		text: 'Literacy, numeracy and subject knowledge are built through purposeful teaching.',
	},
	{
		time: 'Break',
		title: 'Connection and reset',
		text: 'Time to move, talk, play and return to class ready to learn.',
	},
	{
		time: 'Afternoon',
		title: 'Discovery and practice',
		text: 'Subjects, projects and guided practice that turn understanding into confidence.',
	},
	{
		time: 'Close of day',
		title: 'Reflection and next steps',
		text: 'A calm finish, clear routines and preparation for the day ahead.',
	},
];

export const BEYOND_CLASSROOM = [
	{
		icon: 'sport',
		title: 'Sport and movement',
		text: 'Physical activity, teamwork and the habits that support a healthy life.',
	},
	{
		icon: 'art',
		title: 'Arts and creativity',
		text: 'Space to imagine, perform, make and express ideas with confidence.',
	},
	{
		icon: 'hand',
		title: 'Service and leadership',
		text: 'Opportunities to contribute, serve others and grow as responsible leaders.',
	},
	{
		icon: 'people',
		title: 'Clubs and interests',
		text: 'Ask the college about current clubs, societies and co-curricular offerings.',
	},
];

export const ADMISSION_STEPS = [
	{
		step: '01',
		title: 'Start an enquiry',
		text: 'Share your child’s details, the grade or form you are considering, and your preferred pathway.',
	},
	{
		step: '02',
		title: 'Talk with the school',
		text: 'The admissions team can explain available places, requirements, fees and boarding arrangements.',
	},
	{
		step: '03',
		title: 'Prepare and apply',
		text: 'Complete the school’s current application requirements and provide the requested documents.',
	},
	{
		step: '04',
		title: 'Confirm and enrol',
		text: 'Once placement is confirmed, the college guides your family through the next steps.',
	},
];

export const REQUIREMENTS = [
	'Completed admissions enquiry and application',
	'Learner’s birth certificate or identification',
	'Previous school reports or academic records',
	'Transfer letter where applicable',
	'Parent or guardian contact details',
	'Boarding requirements discussed with the school',
];

export const LEADERSHIP = [
	{
		initials: 'GCC',
		title: 'School Leadership',
		role: 'Principal / Head of School',
		text: 'Guiding the school’s ethos, learning direction and community life.',
	},
	{
		initials: 'G1–7',
		title: 'Primary Department',
		role: 'Primary teachers and grade leads',
		text: 'Supporting foundational learning, confidence and curiosity.',
	},
	{
		initials: 'F1–6',
		title: 'Secondary Department',
		role: 'Subject teachers and form leads',
		text: 'Guiding subject depth, study habits and next-step readiness.',
	},
	{
		initials: '✦',
		title: 'Student Support',
		role: 'Pastoral care and boarding team',
		text: 'Helping learners feel safe, known and supported at school.',
	},
];

export const NOTICES = [
	{
		tag: 'Admissions',
		title: 'Enrolment enquiries are welcome',
		text: 'Grade 1–7 and Form 1–6 enquiries can be started online, by phone or by email.',
		href: '/admissions',
		link: 'Start an enquiry',
	},
	{
		tag: 'School life',
		title: 'Choose day or boarding',
		text: 'Families can discuss the pathway that best fits their learner and circumstances.',
		href: '/school-life',
		link: 'Compare pathways',
	},
	{
		tag: 'For families',
		title: 'Preview the results portal',
		text: 'A clearly marked demonstration account shows how learner reports could be viewed.',
		href: '/results',
		link: 'Open the demo portal',
	},
];

export type FaqGroup =
	| 'Admissions'
	| 'Grades and stages'
	| 'Day and boarding'
	| 'Results portal'
	| 'Location and contact';

export type FaqItem = {
	q: string;
	a: string;
	group: FaqGroup;
};

export const FAQS: FaqItem[] = [
	{
		q: 'Which grades and forms does Goldphoenix Christian College offer?',
		a: 'Goldphoenix Christian College offers primary education from Grade 1 to Grade 7 and secondary education from Form 1 to Form 6.',
		group: 'Grades and stages',
	},
	{
		q: 'Where is Goldphoenix Christian College located?',
		a: `The school is at 13 Claremont Road, Daylesford, Gweru, Zimbabwe. Families can use the directions link on the contact page or open the exact pin at ${SITE.coords.lat}, ${SITE.coords.lng} in Google Maps.`,
		group: 'Location and contact',
	},
	{
		q: 'Does the college offer both day and boarding education?',
		a: 'Yes. The college advertises both day and boarding education. Please contact the school for current availability, boarding arrangements and related requirements.',
		group: 'Day and boarding',
	},
	{
		q: 'How do I apply for admission?',
		a: 'Start with the admissions enquiry form on this website, or contact the college by phone or email. The admissions team can explain available places, entry requirements, documents and current fees.',
		group: 'Admissions',
	},
	{
		q: 'What documents should a family prepare for an application?',
		a: 'The college will confirm the current document list. Families should generally be ready to share the learner’s birth certificate or identification, previous school reports, a transfer letter where applicable, and parent or guardian contact details.',
		group: 'Admissions',
	},
	{
		q: 'How can parents access student results?',
		a: 'Use the Student Results Portal link. The version on this website is a demonstration only and accepts the sample student number DEMO-001 with PIN 2026. Official access should be provided by the college through its secure student records system.',
		group: 'Results portal',
	},
	{
		q: 'Is the results portal on this website live?',
		a: 'No. The portal on this website is a clearly marked demonstration. It does not contain real learner information and must not be used for admissions or academic decisions.',
		group: 'Results portal',
	},
	{
		q: 'Which contact numbers can families use?',
		a: 'The college lists +263 77 604 5757, +263 713 056 741 and +263 716 166 326. You can also email goldphoenixchristiancollege@gmail.com.',
		group: 'Location and contact',
	},
	{
		q: 'Can families visit the school before applying?',
		a: 'Contact the admissions team to ask about a visit or conversation with the school. The team can advise on the best time and what to prepare for the discussion.',
		group: 'Admissions',
	},
	{
		q: 'What is the difference between primary and secondary at the college?',
		a: 'Primary school covers Grade 1–7 and focuses on strong foundations, confident reading and curiosity. Secondary school covers Form 1–6 and supports deeper subject knowledge, study habits and preparation for the next step.',
		group: 'Grades and stages',
	},
	{
		q: 'How do I ask about fees and available places?',
		a: 'Fees and availability can change, so the college handles these details directly. Contact the admissions team by phone or email for the current information.',
		group: 'Admissions',
	},
	{
		q: 'What school-life arrangements are available?',
		a: 'The college offers day and boarding pathways. Contact the school to discuss timetables, transport, accommodation, supervision, meals, weekend routines and what learners should bring.',
		group: 'Day and boarding',
	},
];

export const FAQ_GROUPS: FaqGroup[] = [
	'Admissions',
	'Grades and stages',
	'Day and boarding',
	'Results portal',
	'Location and contact',
];

export const PORTAL_DEMO = {
	studentId: 'DEMO-001',
	pin: '2026',
	learner: 'Sample Learner',
	class: 'Grade 7',
	term: 'Term 2 · 2026',
	marks: [
		{ subject: 'English Language', mark: '78%', grade: 'A' },
		{ subject: 'Mathematics', mark: '84%', grade: 'A' },
		{ subject: 'General Science', mark: '76%', grade: 'B' },
		{ subject: 'Social Studies', mark: '81%', grade: 'A' },
		{ subject: 'Religious & Moral Education', mark: '88%', grade: 'A' },
		{ subject: 'Agriculture', mark: '73%', grade: 'B' },
	],
};
