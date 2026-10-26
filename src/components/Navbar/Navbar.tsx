import { useState, useEffect, useCallback, useRef } from 'react';
import './Navbar.css';
import logoImg from '../../assets/logo-navbar.png';
import fundoNavbar from '../../assets/fundoNavbar.png';

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Início', href: '#hero' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Votação', href: '#votacao' },
  { label: 'Participar', href: '#participar' },
  { label: 'FANE', href: '#fane' },
  { label: 'FAQ', href: '#faq' },
];

const SCROLL_THRESHOLD = 60;

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  /* Fecha menu com Escape ou clique fora */
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setIsMobileOpen(false);
    }
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setIsMobileOpen(false);
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const closeMobile = useCallback(() => {
    setIsMobileOpen(false);
  }, []);

  const toggleMobile = useCallback(() => {
    setIsMobileOpen(prev => !prev);
  }, []);

  return (
    <header
      id="navbar"
      ref={navRef}
      className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}
      role="banner"
    >
      {/* Área central — background + conteúdo */}
      <div
        className="navbar__bg"
        style={{
          backgroundImage: `url(${fundoNavbar})`,
        }}
      >
        <div className="navbar__inner">
          {/* Logo */}
          <a href="#hero" className="navbar__logo" aria-label="Festival de Espetinhos — Início">
            <img
              src={logoImg}
              alt="Festival Gastronômico de Espetinhos — Encontro de Sabores"
              className="navbar__logo-img"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="navbar__nav" aria-label="Navegação principal">
            {NAV_ITEMS.map(item => (
              <a
                key={item.href}
                href={item.href}
                className="navbar__link"
              >
                <span className="navbar__link-label">{item.label}</span>
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="navbar__cta">
            <a href="#participar" className="navbar__cta-btn">
              Quero Participar
            </a>
          </div>

          {/* Mobile Toggle — SVG icons */}
          <button
            className="navbar__toggle"
            onClick={toggleMobile}
            aria-label={isMobileOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMobileOpen}
            aria-controls="mobile-menu"
          >
            {isMobileOpen ? (
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu — slide-down panel */}
      <nav
        id="mobile-menu"
        className={`navbar__mobile-menu ${isMobileOpen ? 'navbar__mobile-menu--open' : ''}`}
        aria-label="Menu mobile"
        aria-hidden={!isMobileOpen}
      >
        <div className="navbar__mobile-inner">
          {NAV_ITEMS.map(item => (
            <a
              key={item.href}
              href={item.href}
              className="navbar__mobile-link"
              onClick={closeMobile}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#participar"
            className="navbar__mobile-cta-btn"
            onClick={closeMobile}
          >
            Quero Participar
          </a>
        </div>
      </nav>
    </header>
  );
}
