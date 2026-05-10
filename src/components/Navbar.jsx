import { useState, useEffect, useCallback, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'schedule', label: 'Brochure' },
  { id: 'events', label: 'Events' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [popupOpen, setPopupOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setPopupOpen(false);
      }
    };
    if (popupOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [popupOpen]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(Boolean);
      const scrollY = window.scrollY + 200;
      for (let i = sections.length - 1; i >= 0; i--) {
        if (scrollY >= sections[i].offsetTop) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const location = useLocation();
  const navigate = useNavigate();

  const scrollTo = useCallback((id) => {
    setMobileOpen(false);
    if (location.pathname !== '/') {
      navigate('/#' + id);
      return;
    }
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' });
  }, [location, navigate]);

  return (
    <>
      <nav
        id="navbar"
        className={`navbar fixed top-0 left-0 w-full z-[1000] flex justify-between items-center py-[18px] px-8 md:px-10 border-b ${
          scrolled
            ? 'scrolled border-border'
            : 'bg-transparent border-transparent'
        }`}
      >
        {/* Left — Logo */}
        <span
          className="font-display text-xl font-bold text-white tracking-[3px] cursor-pointer uppercase"
          onClick={() => scrollTo('home')}
        >
          Kalakriti<span className="text-[var(--color-gold)]">&apos;26</span>
        </span>

        {/* Center — Nav Links */}
        <ul
          className="hidden md:flex justify-center gap-8 absolute left-1/2 -translate-x-1/2"
        >
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                className={`nav-link text-[11px] font-bold uppercase bg-transparent border-none cursor-pointer font-body ${
                  activeSection === item.id ? 'active' : ''
                }`}
                onClick={() => scrollTo(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Right — Register Button + Dropdown */}
        <div className="hidden md:flex justify-end items-center gap-6 relative" ref={dropdownRef}>
          <button
            className="nav-link text-[11px] font-bold uppercase bg-transparent border-none cursor-pointer font-body text-white hover:text-[var(--color-gold)] transition-colors"
            onClick={() => { navigate('/organising-committee'); window.scrollTo(0,0); }}
          >
            Organisers
          </button>

          <button
            className="nav-link text-[11px] font-bold uppercase bg-transparent border-none cursor-pointer font-body text-white hover:text-[var(--color-gold)] transition-colors"
            onClick={() => { navigate('/representatives'); window.scrollTo(0,0); }}
          >
            Representatives
          </button>

          <button
            className="register-btn flex items-center gap-2 text-[0.65rem] font-semibold tracking-[3px] uppercase py-2.5 pl-7 pr-5 cursor-pointer font-mono rounded-full"
            onClick={() => setPopupOpen((p) => !p)}
          >
            Register
            <i className={`ri-arrow-down-s-line text-sm transition-transform duration-300 ${popupOpen ? '-rotate-180' : ''}`} />
          </button>

          {/* Premium Dropdown */}
          <div 
            className={`absolute top-[calc(100%+12px)] right-0 w-[280px] bg-bg-card border border-border shadow-[0_16px_40px_rgba(0,0,0,0.8)] z-[1002] transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] origin-top-right ${
              popupOpen ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto visible' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none invisible'
            }`}
          >
            {/* Gold top accent bar */}
            <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent opacity-80" />

            {/* Corner Ornaments */}
            <div className="absolute inset-1 pointer-events-none z-20">
              <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[var(--color-gold)]/40"></span>
              <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[var(--color-gold)]/40"></span>
              <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[var(--color-gold)]/40"></span>
              <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[var(--color-gold)]/40"></span>
            </div>

            {/* — REGISTER — header */}
            <div className="flex items-center justify-center pt-5 pb-3">
              <div className="h-[1px] bg-[var(--color-gold)]/30 w-6"></div>
              <span className="mx-3 text-[10px] text-[var(--color-gold)] font-mono uppercase tracking-[3px]">Register</span>
              <div className="h-[1px] bg-[var(--color-gold)]/30 w-6"></div>
            </div>

            {/* Options */}
            <div className="flex flex-col relative z-10 pb-2">
              {/* Participant */}
              <button
                className="group relative w-full text-left flex items-center gap-4 py-4 px-6 bg-transparent border-none cursor-pointer transition-colors duration-300 overflow-hidden hover:bg-white/[0.02]"
                onClick={() => { setPopupOpen(false); scrollTo('events'); }}
              >
                {/* Glow sweep */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_50%,rgba(201,168,76,0.1)_0%,transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                {/* Icon */}
                <div className="w-9 h-9 shrink-0 flex items-center justify-center rounded-full border border-border bg-surface text-[var(--color-gold)] text-sm group-hover:border-[var(--color-gold)]/60 group-hover:text-[var(--color-gold)] transition-colors duration-300 relative z-10">
                  <i className="ri-user-add-line" />
                </div>
                
                {/* Text */}
                <div className="flex-1 relative z-10">
                  <div className="font-display text-[0.7rem] font-bold tracking-[1px] uppercase text-white mb-0.5">Participant</div>
                  <div className="text-[10px] text-text-muted font-body">Register for an event</div>
                </div>
                
                {/* Animated Arrow */}
                <i className="ri-arrow-right-line text-[var(--color-gold)] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 relative z-10" />
              </button>

              <div className="h-px bg-border/50 mx-6"></div>

              {/* Representative */}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdnXnSzhdwtj_7limcEhTA6AxYp-XVjqCOUgUL882DRgoF68A/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full text-left flex items-center gap-4 py-4 px-6 bg-transparent cursor-pointer transition-colors duration-300 overflow-hidden hover:bg-white/[0.02]"
              >
                {/* Glow sweep */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_50%,rgba(192,57,43,0.1)_0%,transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                {/* Icon */}
                <div className="w-9 h-9 shrink-0 flex items-center justify-center rounded-full border border-border bg-surface text-orange-light text-sm group-hover:border-accent/60 group-hover:text-accent transition-colors duration-300 relative z-10">
                  <i className="ri-group-line" />
                </div>
                
                {/* Text */}
                <div className="flex-1 relative z-10">
                  <div className="font-display text-[0.7rem] font-bold tracking-[1px] uppercase text-white mb-0.5">Representative</div>
                  <div className="text-[10px] text-text-muted font-body">College rep sign-up</div>
                </div>
                
                {/* Animated Arrow */}
                <i className="ri-arrow-right-line text-accent opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 relative z-10" />
              </a>
            </div>

            {/* Footer Micro-text */}
            <div className="py-2.5 bg-surface/80 text-center border-t border-border">
              <span className="text-[8px] text-text-dim font-mono tracking-[1px] uppercase">Powered by Arteza · MSIT</span>
            </div>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1 justify-self-end"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${mobileOpen ? 'rotate-45 translate-x-[5px] translate-y-[5px]' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${mobileOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${mobileOpen ? '-rotate-45 translate-x-[5px] -translate-y-[5px]' : ''}`}></span>
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 w-[280px] h-screen bg-bg-card border-l border-border z-[1001] flex flex-col pt-20 px-8 gap-6 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] md:hidden ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              className={`text-left text-sm font-medium tracking-[2px] uppercase bg-transparent border-none cursor-pointer font-body transition-colors duration-300 ${
                activeSection === item.id ? 'text-white' : 'text-text-muted hover:text-white'
              }`}
              onClick={() => scrollTo(item.id)}
            >
              {item.label}
            </button>
          ))}
          <div className="mt-4 flex flex-col gap-2">
            <button
              className="text-[0.7rem] font-semibold tracking-[2px] uppercase py-3 px-6 border border-border-hover text-white cursor-pointer font-mono transition-all duration-300 hover:text-[var(--color-gold)] hover:border-[var(--color-gold)] rounded-full text-center block mb-2"
              onClick={() => { setMobileOpen(false); navigate('/organising-committee'); window.scrollTo(0,0); }}
            >
              Organisers
            </button>
            <button
              className="text-[0.7rem] font-semibold tracking-[2px] uppercase py-3 px-6 border border-border-hover text-white cursor-pointer font-mono transition-all duration-300 hover:text-[var(--color-gold)] hover:border-[var(--color-gold)] rounded-full text-center block mb-2"
              onClick={() => { setMobileOpen(false); navigate('/representatives'); window.scrollTo(0,0); }}
            >
              Representatives
            </button>
            <button
              className="register-btn text-[0.7rem] font-semibold tracking-[3px] uppercase py-3 px-6 cursor-pointer font-mono rounded-full text-center"
              onClick={() => { setMobileOpen(false); scrollTo('events'); }}
            >
              Participant Registration
            </button>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdnXnSzhdwtj_7limcEhTA6AxYp-XVjqCOUgUL882DRgoF68A/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.7rem] font-semibold tracking-[2px] uppercase py-3 px-6 border border-border-hover text-text-muted cursor-pointer font-mono transition-all duration-300 hover:text-white hover:border-accent rounded-full text-center block"
            >
              Representative Registration
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
