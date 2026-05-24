import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { EVENTS, CATEGORIES } from '../data/events';
import { useScrollReveal } from '../hooks/useScrollReveal';

function EventCard({ event }) {
  return (
    <div className="group flex flex-col h-full event-card-lift">
      {/* Poster Image */}
      <div className="relative overflow-hidden bg-bg aspect-[3/4]">
        <img
          src={event.poster}
          alt={event.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Hover Veil */}
        <div className="absolute inset-0 bg-gradient-to-t from-accent/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
        
        {/* Corner Ornaments */}
        <div className="absolute inset-2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20">
          <span className="absolute top-0 left-0 w-3 h-3 border-t-[1.5px] border-l-[1.5px] border-gold"></span>
          <span className="absolute top-0 right-0 w-3 h-3 border-t-[1.5px] border-r-[1.5px] border-gold"></span>
          <span className="absolute bottom-0 left-0 w-3 h-3 border-b-[1.5px] border-l-[1.5px] border-gold"></span>
          <span className="absolute bottom-0 right-0 w-3 h-3 border-b-[1.5px] border-r-[1.5px] border-gold"></span>
        </div>

        {/* Mode Badge (Top-Left Corner) */}
        {event.badge && (
          <span className="absolute top-3 left-3 font-display text-[0.52rem] sm:text-[0.58rem] tracking-[0.15em] uppercase py-1 px-2.5 bg-black/75 backdrop-blur-md text-white font-bold shadow-md border border-white/10 rounded-sm flex items-center gap-1.5 z-30 select-none">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff4040] shrink-0 animate-pulse"></span>
            {event.badge}
          </span>
        )}

        {/* Perforated Ticket Price Tag (Top-Right Corner) */}
        {(() => {
          const feeRule = event.rules?.find(r => r.includes("Reg. Fees :"));
          if (feeRule) {
            const match = feeRule.match(/₹\s*(\d+)/);
            if (match) {
              const amount = parseInt(match[1], 10);
              let themeClass = "t-crimson";
              if (amount === 0) themeClass = "t-free";
              else if (amount >= 150) themeClass = "t-gold";
              else if (amount < 50) themeClass = "t-forest";

              return (
                <div className="absolute top-2.5 right-2.5 z-30 select-none scale-[0.80] sm:scale-[0.85] origin-top-right">
                  <div className={`ticket ${themeClass}`}>
                    {amount === 0 ? (
                      <>
                        <div className="free-glow"></div>
                        <div className="ticket-body">
                          <span className="free-label">FREE</span>
                        </div>
                      </>
                    ) : (
                      <div className="ticket-body">
                        <div className="flex items-start gap-0.5">
                          <span className="t-currency mt-0.5">₹</span>
                          <span className="t-amount">{amount}</span>
                        </div>
                        <div className="ticket-shimmer"></div>
                      </div>
                    )}
                    <div className="ticket-notch"></div>
                  </div>
                </div>
              );
            }
          }
          return null;
        })()}
      </div>

      {/* Event Name */}
      <div className="bg-bg-card py-4 px-3 border-x border-border flex flex-col items-center justify-center relative z-20 min-h-[72px] flex-grow gap-1.5">
        <h3 className="font-display text-[0.9rem] font-[600] text-[#F0E6D3] text-center tracking-[0.05em] flex items-center justify-center gap-2 w-full">
          <span className="h-[1px] bg-gold/30 transition-all duration-500 w-2 sm:w-3 group-hover:w-5 group-hover:bg-gold shrink-0"></span>
          <span className="leading-tight" style={{ textWrap: 'balance' }}>{event.name}</span>
          <span className="h-[1px] bg-gold/30 transition-all duration-500 w-2 sm:w-3 group-hover:w-5 group-hover:bg-gold shrink-0"></span>
        </h3>
        {event.tagline && (
          <span className="block font-mono text-[0.55rem] sm:text-[0.65rem] text-[var(--color-gold)] font-medium uppercase tracking-widest text-center w-full px-1 leading-[1.4]" style={{ textWrap: 'balance' }}>
            {event.tagline}
          </span>
        )}
      </div>

      {/* Explore Button */}
      {event.link ? (
        <Link
          to={`/events/${event.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
          className="block w-full text-center font-display text-[0.58rem] font-bold tracking-[0.22em] uppercase py-3.5 bg-accent text-white transition-all duration-300 hover:bg-accent-hover btn-shimmer-sweep mt-auto"
        >
          Explore Event
        </Link>
      ) : (
        <span className="block w-full text-center font-display text-[0.58rem] font-bold tracking-[0.22em] uppercase py-3.5 bg-border text-text-muted mt-auto">
          Coming Soon
        </span>
      )}
    </div>
  );
}

export default function Events() {
  const [activeFilter, setActiveFilter] = useState(() => {
    return sessionStorage.getItem('eventsActiveFilter') || 'all';
  });

  useEffect(() => {
    sessionStorage.setItem('eventsActiveFilter', activeFilter);
  }, [activeFilter]);
  const headerRef = useScrollReveal();
  const filterRef = useScrollReveal();

  useEffect(() => {
    const handleFilter = (e) => {
      if (e.detail) {
        setActiveFilter(e.detail);
      }
    };
    window.addEventListener('filter-events', handleFilter);
    return () => window.removeEventListener('filter-events', handleFilter);
  }, []);

  const filtered = activeFilter === 'all' ? EVENTS : EVENTS.filter((e) => e.category === activeFilter);

  return (
    <section id="events" className="events-section py-24 md:py-32 relative">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header - Editorial Two-Tier */}
        <div className="text-center mb-20 animate-in" ref={headerRef}>
          <span className="font-mono text-[10px] tracking-[5px] text-white/50 uppercase block mb-3">
            Explore
          </span>
          <h2 className="font-display text-[clamp(48px,8vw,96px)] font-bold text-white tracking-[-1px] uppercase leading-none">
            Events
          </h2>
          
          {/* Gold diamond divider */}
          <div className="flex items-center justify-center mt-8">
            <div className="h-[1px] bg-[var(--color-gold)]/30 w-16"></div>
            <div className="w-2 h-2 rotate-45 bg-[var(--color-gold)] mx-3"></div>
            <div className="h-[1px] bg-[var(--color-gold)]/30 w-16"></div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center flex-wrap gap-2 mb-14 animate-in" ref={filterRef}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              className={`font-display text-[0.58rem] tracking-[0.22em] uppercase py-2.5 px-5 border cursor-pointer transition-all duration-300 ${
                activeFilter === cat.key
                  ? 'border-accent text-accent bg-accent-glow'
                  : 'border-border text-text-muted bg-transparent hover:border-border-hover hover:text-white'
              }`}
              onClick={() => setActiveFilter(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="flex flex-wrap justify-center gap-5 md:gap-6">
          {filtered.map((event) => (
            <div 
              key={event.id} 
              className="w-[calc(50%-10px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)]"
            >
              <EventCard event={event} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
