import { useState } from 'react';
import { EVENTS, CATEGORIES } from '../data/events';
import { useScrollReveal } from '../hooks/useScrollReveal';

function EventCard({ event }) {
  return (
    <div className="group flex flex-col">
      {/* Poster Image */}
      <div className="relative overflow-hidden aspect-[3/4]">
        <img
          src={event.poster}
          alt={event.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Badge */}
        {event.badge && (
          <span className="absolute top-3 right-3 font-display text-[0.58rem] tracking-[0.22em] uppercase py-1 px-3 bg-accent text-white font-bold z-10">
            {event.badge}
          </span>
        )}
      </div>

      {/* Event Name */}
      <div className="bg-bg-card py-3.5 px-4 border-x border-border flex items-center justify-center">
        <h3 className="font-display text-[0.95rem] font-[600] text-[#F0E6D3] text-center tracking-[0.06em]">
          {event.name}
        </h3>
      </div>

      {/* Register Button */}
      {event.link ? (
        <a
          href={event.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center font-display text-[0.58rem] font-bold tracking-[0.22em] uppercase py-3.5 bg-accent text-white transition-all duration-300 hover:bg-accent-hover"
        >
          Register Now
        </a>
      ) : (
        <span className="block w-full text-center font-display text-[0.58rem] font-bold tracking-[0.22em] uppercase py-3.5 bg-border text-text-muted">
          Coming Soon
        </span>
      )}
    </div>
  );
}

export default function Events() {
  const [activeFilter, setActiveFilter] = useState('all');
  const headerRef = useScrollReveal();
  const filterRef = useScrollReveal();

  const filtered = activeFilter === 'all' ? EVENTS : EVENTS.filter((e) => e.category === activeFilter);

  return (
    <section id="events" className="events-section py-24 md:py-32 relative">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-in" ref={headerRef}>
          <span className="font-mono text-[10px] tracking-[5px] text-white/50 uppercase block mb-3">explore</span>
          <h2 className="font-display text-[clamp(2rem,5vw,3.2rem)] font-bold text-white leading-tight tracking-[0.15em] uppercase">
            : <span className="text-accent">Events</span> :
          </h2>
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
          {filtered.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}
