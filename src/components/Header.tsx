import { useCallback, useEffect, useState } from 'preact/hooks';
import { useLocation } from 'preact-iso';
import { NAV, SITE } from '../content/site.js';
import { stripBase, withBase } from '../lib/paths.js';
import { normalizePath } from '../lib/seo.js';
import { Icon } from './Icon.jsx';
import { Logo } from './Logo.jsx';
import { Layer } from 'pax3d/react';

import React from 'react'

export const EnrollHeader = () => {
  return (
	<div>EnrollHeader</div>
  )
}

export const BaseHeader = () => {
  return (
	<div>BaseHeader</div>
  )
}


export function Header() {
	const { url } = useLocation();
	const path = normalizePath(stripBase(url));
	const [open, setOpen] = useState(false);

	useEffect(() => {
		setOpen(false);
	}, [url]);

	useEffect(() => {
		document.body.classList.toggle('nav-locked', open);
		return () => document.body.classList.remove('nav-locked');
	}, [open]);

	useEffect(() => {
		const handleKey = (event: KeyboardEvent) => {
			if (event.key === 'Escape') setOpen(false);
		};
		window.addEventListener('keydown', handleKey);
		return () => window.removeEventListener('keydown', handleKey);
	}, []);

	const isActive = (href: string) => (href === '/' ? path === '/' : path.startsWith(href));

	return (
		<header class="site-header">
			<div class="utility-bar">
				<div class="container utility-inner">
					<p class="utility-note">
						<span class="status-dot" aria-hidden="true" />
						Day &amp; boarding · Grade 1–7 · Form 1–6 · Gweru, Zimbabwe
					</p>
					<div class="utility-links">
						<a href={`tel:${SITE.phones[0].replace(/\s/g, '')}`}>
							<Icon name="phone" size={15} />
							{SITE.phones[0]}
						</a>
						<a href={`mailto:${SITE.email}`} class="utility-email">
							<Icon name="mail" size={15} />
							{SITE.email}
						</a>
						<a href={SITE.facebook} target="_blank" rel="noopener noreferrer" aria-label="Goldphoenix Christian College on Facebook">
							<Icon name="facebook" size={16} />
						</a>
					</div>
				</div>
			</div>

			<div class="navbar">
				<div class="container navbar-inner">
					<a class="brand" href={withBase('/')} aria-label="Goldphoenix Christian College home">
						<Logo />
					</a>

					<nav class="desktop-nav" aria-label="Primary">
						{NAV.map((item) => (
							<a
								href={withBase(item.href)}
								class={isActive(item.href) ? 'nav-link is-active' : 'nav-link'}
								aria-current={isActive(item.href) ? 'page' : undefined}
							>
								{item.label}
							</a>
						))}
					</nav>

					<div class="nav-actions">
						<a class="portal-link" href={withBase('/results')}>
							<Icon name="lock" size={16} />
							Results
						</a>
						<a class="btn btn-gold btn-sm" href={withBase('/admissions#enquiry')}>
							Enquire
							<Icon name="arrow-up-right" size={16} />
						</a>
						<button
							class="menu-toggle"
							type="button"
							aria-expanded={open}
							aria-controls="mobile-menu"
							aria-label={open ? 'Close menu' : 'Open menu'}
							onClick={() => setOpen((value) => !value)}
						>
							<Icon name={open ? 'close' : 'menu'} size={24} />
						</button>
					</div>
				</div>
			</div>

			<div class={open ? 'mobile-menu is-open' : 'mobile-menu'} id="mobile-menu">
				<nav class="mobile-nav" aria-label="Mobile">
					{NAV.map((item, index) => (
						<a
							href={withBase(item.href)}
							class={isActive(item.href) ? 'mobile-link is-active' : 'mobile-link'}
							style={{ '--i': String(index) }}
							aria-current={isActive(item.href) ? 'page' : undefined}
						>
							<span>{item.label}</span>
							<Icon name="arrow-right" size={20} />
						</a>
					))}
					<a class="mobile-link mobile-link-accent" href={withBase('/results')} style={{ '--i': String(NAV.length) }}>
						<span>Results portal</span>
						<Icon name="lock" size={18} />
					</a>
				</nav>

				<div class="mobile-contact">
					<a class="btn btn-gold" href={withBase('/admissions#enquiry')}>
						Start an enquiry
						<Icon name="arrow-up-right" size={18} />
					</a>
					<a class="mobile-direct" href={`tel:${SITE.phones[0].replace(/\s/g, '')}`}>
						<Icon name="phone" size={18} />
						{SITE.phones[0]}
					</a>
					<a class="mobile-direct" href={`mailto:${SITE.email}`}>
						<Icon name="mail" size={18} />
						{SITE.email}
					</a>
				</div>
			</div>

			{open && <button class="nav-backdrop" type="button" aria-label="Close menu" onClick={() => setOpen(false)} />}
		</header>
	);
}

