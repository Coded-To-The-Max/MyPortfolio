'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { userInfo } from '@/lib/data';

const navLinks = [
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#mission', label: 'Mission' },
];

export function Header() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const results = useMemo(() => navLinks.filter((item) => item.label.toLowerCase().includes(query.toLowerCase())), [query]);

  const closeCommand = () => dialogRef.current?.close();
  const openCommand = () => {
    setQuery('');
    setActiveIndex(0);
    dialogRef.current?.showModal();
    window.setTimeout(() => inputRef.current?.focus(), 0);
  };
  const visit = (href: string) => {
    closeCommand();
    window.location.hash = href.slice(1);
  };

  useEffect(() => {
    const handleShortcut = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        dialogRef.current?.open ? closeCommand() : openCommand();
      }
    };
    window.addEventListener('keydown', handleShortcut);
    return () => window.removeEventListener('keydown', handleShortcut);
  }, []);

  return (
    <header className="site-header">
      <div className="section-container header-inner">
        <Link href="#hero" className="brand" aria-label={`${userInfo.name}, home`}>
          <span className="brand-mark" aria-hidden="true">MZ</span><span>{userInfo.name}</span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navLinks.map((link) => <Link key={link.href} href={link.href} className="nav-link">{link.label}</Link>)}
        </nav>
        <button className="command-trigger" type="button" onClick={openCommand}><span>Jump to</span><kbd>⌘K</kbd></button>
        <button className="menu-trigger" type="button" aria-expanded={isMobileMenuOpen} aria-controls="mobile-navigation" onClick={() => setIsMobileMenuOpen((current) => !current)}>
          {isMobileMenuOpen ? 'Close' : 'Menu'}
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="mobile-menu" id="mobile-navigation">
          <nav className="section-container" aria-label="Mobile navigation">
            {navLinks.map((link) => <Link key={link.href} href={link.href} className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>{link.label}</Link>)}
          </nav>
        </div>
      )}
      <dialog ref={dialogRef} className="command-dialog" aria-label="Jump to a section" onClick={(event) => { if (event.target === dialogRef.current) closeCommand(); }}>
        <div className="command-form" onKeyDown={(event) => {
          if (event.key === 'ArrowDown') { event.preventDefault(); setActiveIndex((current) => (current + 1) % Math.max(results.length, 1)); }
          if (event.key === 'ArrowUp') { event.preventDefault(); setActiveIndex((current) => (current - 1 + Math.max(results.length, 1)) % Math.max(results.length, 1)); }
          if (event.key === 'Enter' && results[activeIndex]) { event.preventDefault(); visit(results[activeIndex].href); }
        }}>
          <div className="command-field">
            <span className="mono-label">Go</span>
            <input ref={inputRef} value={query} onChange={(event) => { setQuery(event.target.value); setActiveIndex(0); }} placeholder="Type a section name" aria-label="Filter sections" />
            <button className="command-close" type="button" onClick={closeCommand} aria-label="Close command menu">Esc</button>
          </div>
          <div className="command-results" role="listbox" aria-label="Sections">
            {results.map((item, index) => (
              <a key={item.href} href={item.href} className={`command-item${index === activeIndex ? ' is-active' : ''}`} role="option" aria-selected={index === activeIndex} onMouseEnter={() => setActiveIndex(index)} onClick={closeCommand}>
                <span className="command-index">0{index + 1}</span><span>{item.label}</span>
              </a>
            ))}
            {results.length === 0 && <p className="command-item">No matching section</p>}
          </div>
        </div>
      </dialog>
    </header>
  );
}
