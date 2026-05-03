import { useState, useEffect, useCallback } from 'react';

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

  const scrollTo = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' });
    setMobileOpen(false);
  }, []);

  return (
    <>
      <nav
        id="navbar"
        className={`navbar fixed top-0 left-0 w-full z-[1000] grid grid-cols-[auto_1fr_auto] items-center py-[18px] px-8 md:px-10 border-b ${
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
          className="hidden md:flex justify-center gap-8"
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
        <div className="hidden md:flex justify-end relative">
          <button
            className="register-btn text-[0.65rem] font-semibold tracking-[3px] uppercase py-2.5 px-7 cursor-pointer font-mono rounded-full"
            onClick={() => setPopupOpen((p) => !p)}
          >
            Register
          </button>

          {/* Small dropdown */}
          {popupOpen && (
            <div className="absolute top-full right-0 mt-2 w-60 bg-bg-card border border-border shadow-[0_8px_30px_rgba(0,0,0,0.5)] z-[1002] overflow-hidden">
              <button
                className="w-full text-center font-display text-[0.7rem] font-bold tracking-[1.5px] uppercase py-4 px-5 text-accent bg-transparent border-none cursor-pointer transition-colors duration-200 hover:bg-accent/10"
                onClick={() => { setPopupOpen(false); scrollTo('events'); }}
              >
                Participant Registration
              </button>
              <div className="h-px bg-border mx-4"></div>
              <a
                href="https://forms.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center font-display text-[0.7rem] font-bold tracking-[1.5px] uppercase py-4 px-5 text-accent bg-transparent cursor-pointer transition-colors duration-200 hover:bg-accent/10"
              >
                Representative Registration
              </a>
            </div>
          )}
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
              className="register-btn text-[0.7rem] font-semibold tracking-[3px] uppercase py-3 px-6 cursor-pointer font-mono rounded-full text-center"
              onClick={() => { setMobileOpen(false); scrollTo('events'); }}
            >
              Participant Registration
            </button>
            <a
              href="https://forms.google.com"
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
