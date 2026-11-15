import { useState } from 'preact/hooks';
import { Layer, Scene } from 'pax3d/react';
import { Icon } from '../../components/Icon.jsx';
import { PageHero } from '../../components/PageHero.jsx';
import { PORTAL_DEMO } from '../../content/site.js';
import { withBase } from '../../lib/paths.js';

function averageMark() {
	const total = PORTAL_DEMO.marks.reduce((sum, item) => sum + Number.parseInt(item.mark, 10), 0);
	return Math.round(total / PORTAL_DEMO.marks.length);
}

export function Results() {
	const [studentId, setStudentId] = useState('');
	const [pin, setPin] = useState('');
	const [error, setError] = useState('');
	const [signedIn, setSignedIn] = useState(false);
	const [showPin, setShowPin] = useState(false);

	const handleSubmit = (event: Event) => {
		event.preventDefault();
		const id = studentId.trim().toUpperCase();
		const code = pin.trim();
		if (id === PORTAL_DEMO.studentId && code === PORTAL_DEMO.pin) {
			setError('');
			setSignedIn(true);
			return;
		}
		setError('The demo details do not match. Use DEMO-001 and PIN 2026.');
	};

	const signOut = () => {
		setSignedIn(false);
		setStudentId('');
		setPin('');
		setError('');
	};

	return (
		<>
			<PageHero
				eyebrow="Student results portal"
				title="A demonstration of the results experience."
				intro={
					<p>
						This portal is a clearly marked demonstration for the website. It contains fictional
						sample data only. Official results are issued by the college through its secure
						student records process.
					</p>
				}
				crumbs={[{ label: 'Results portal' }]}
			>
				<span class="demo-pill">
					<Icon name="shield" size={17} />
					Demonstration only · No real learner data
				</span>
			</PageHero>

			<section class="section results-section">
				<Scene className="container results-layout" perspective={1200}>
					<Layer
						class="results-note"
						y={['0%', '4%']}
						rotateY={[-3, 0]}
						range={[0, 0.35]}
						reduced="disable"
					>
						<div class="results-note-icon">
							<Icon name="lock" size={28} />
						</div>
						<h2>About this demo</h2>
						<p>
							The portal shows how a learner report could be displayed. It does not connect to a
							school database and cannot retrieve official marks.
						</p>
						<ul>
							<li>
								<Icon name="check" size={17} />
								Sample student number: <strong>{PORTAL_DEMO.studentId}</strong>
							</li>
							<li>
								<Icon name="check" size={17} />
								Sample PIN: <strong>{PORTAL_DEMO.pin}</strong>
							</li>
							<li>
								<Icon name="check" size={17} />
								Fictional learner and marks
							</li>
						</ul>
						<a class="text-link" href={withBase('/contact')}>
							Ask about official results
							<Icon name="arrow-right" size={17} />
						</a>
					</Layer>

					<Layer
						class="portal-card"
						y={['4%', '0%']}
						rotateY={[4, 0]}
						z={[0, 70]}
						scale={[0.98, 1]}
						range={[0, 0.4]}
						reduced="disable"
					>
						{!signedIn ? (
							<div class="portal-login">
								<div class="portal-head">
									<img src={withBase('/media/crest-128.png')} alt="" width="56" height="53" />
									<div>
										<p class="eyebrow">Goldphoenix portal</p>
										<h2>Sign in to the demo</h2>
									</div>
								</div>

								<form class="portal-form" onSubmit={handleSubmit}>
									<label class="field">
										<span>Student number</span>
										<input
											type="text"
											name="studentId"
											value={studentId}
											onInput={(event) => setStudentId((event.currentTarget as HTMLInputElement).value)}
											autocomplete="off"
											placeholder={PORTAL_DEMO.studentId}
											required
										/>
									</label>
									<label class="field">
										<span>PIN</span>
										<div class="pin-field">
											<input
												type={(showPin ? 'text' : 'password') as 'text'}
												name="pin"
												value={pin}
												onInput={(event) => setPin((event.currentTarget as HTMLInputElement).value)}
												autocomplete="off"
												placeholder={PORTAL_DEMO.pin}
												required
											/>
											<button
												type="button"
												class="pin-toggle"
												onClick={() => setShowPin((value) => !value)}
												aria-label={showPin ? 'Hide PIN' : 'Show PIN'}
											>
												{showPin ? 'Hide' : 'Show'}
											</button>
										</div>
									</label>

									<button class="btn btn-navy" type="submit">
										<Icon name="lock" size={18} />
										Open sample report
									</button>

									<div class="form-status" role="status" aria-live="polite">
										{error && <span class="form-error">{error}</span>}
									</div>
								</form>

								<p class="portal-disclaimer">
									Do not enter real learner credentials into this demonstration.
								</p>
							</div>
						) : (
							<div class="report">
								<div class="report-head">
									<div class="report-brand">
										<img src={withBase('/media/crest-128.png')} alt="" width="52" height="49" />
										<div>
											<strong>Goldphoenix Christian College</strong>
											<span>Sample academic report</span>
										</div>
									</div>
									<span class="demo-badge">DEMO</span>
								</div>

								<div class="report-meta">
									<div>
										<span>Learner</span>
										<strong>{PORTAL_DEMO.learner}</strong>
									</div>
									<div>
										<span>Class</span>
										<strong>{PORTAL_DEMO.class}</strong>
									</div>
									<div>
										<span>Term</span>
										<strong>{PORTAL_DEMO.term}</strong>
									</div>
									<div>
										<span>Student number</span>
										<strong>{PORTAL_DEMO.studentId}</strong>
									</div>
								</div>

								<div class="report-table-wrap">
									<table class="report-table">
										<thead>
											<tr>
												<th scope="col">Subject</th>
												<th scope="col">Mark</th>
												<th scope="col">Grade</th>
											</tr>
										</thead>
										<tbody>
											{PORTAL_DEMO.marks.map((mark) => (
												<tr>
													<td>{mark.subject}</td>
													<td>{mark.mark}</td>
													<td>
														<span class="grade-pill">{mark.grade}</span>
													</td>
												</tr>
											))}
										</tbody>
									</table>
								</div>

								<div class="report-summary">
									<div>
										<span>Sample average</span>
										<strong>{averageMark()}%</strong>
									</div>
									<div>
										<span>Subjects</span>
										<strong>{PORTAL_DEMO.marks.length}</strong>
									</div>
									<div>
										<span>Status</span>
										<strong>Fictional sample</strong>
									</div>
								</div>

								<div class="report-actions">
									<button class="btn btn-navy" type="button" onClick={() => window.print()}>
										<Icon name="printer" size={18} />
										Print sample
									</button>
									<button class="btn btn-outline" type="button" onClick={signOut}>
										Sign out of demo
									</button>
								</div>

								<p class="report-note">
									This report is a demonstration. It is not an official academic record and
									should not be used for admissions or other decisions.
								</p>
							</div>
						)}
					</Layer>
				</Scene>
			</section>
		</>
	);
}
