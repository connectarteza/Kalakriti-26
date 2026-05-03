import { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { EVENTS } from '../data/events';

export default function EventDetails() {
  const { eventName } = useParams();

  // Find the event by slugifying its name
  const event = EVENTS.find(
    (e) => e.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') === eventName
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [eventName]);

  if (!event) {
    return <Navigate to="/" replace />;
  }

  // Fallback dummy data if not provided in events.js
  const guidelines = event.guidelines || [
    "Participants must carry their college ID cards.",
    "On-spot registration is subject to availability.",
    "The decision of the judges will be final and binding.",
    "Any form of misbehavior will lead to immediate disqualification."
  ];

  const rules = event.rules || [
    "Time limit: 5-7 minutes.",
    "No pre-recorded audio is allowed for live performances.",
    "Props must be arranged by the participants themselves.",
    "Use of fire, water, or hazardous materials on stage is strictly prohibited."
  ];

  const coordinators = event.coordinators || [
    { name: "John Doe", phone: "+91 98765 43210" },
    { name: "Jane Smith", phone: "+91 87654 32109" }
  ];

  return (
    <div className="min-h-screen bg-bg pt-28 pb-20 relative overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(ellipse_at_top,rgba(139,0,0,0.4)_0%,transparent_70%)]" />
        <div className="absolute top-1/2 left-0 w-[400px] h-[600px] -translate-y-1/2 bg-[radial-gradient(ellipse_at_left,rgba(201,168,76,0.1)_0%,transparent_60%)]" />
        {/* Scanline overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100%_38px] opacity-20" />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10 mb-8">
        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-[var(--color-gold)]/70 hover:text-[var(--color-gold)] transition-colors font-mono text-[10px] tracking-[3px] uppercase group"
        >
          <i className="ri-arrow-left-line text-sm transition-transform group-hover:-translate-x-1"></i> Back to Home
        </Link>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">
        
        {/* Left Side: Floating Poster */}
        <div className="flex flex-col items-center">
          <div className="relative w-[85%] sm:w-[70%] lg:w-full animate-float-3d perspective-1000">
            {/* The Poster */}
            <div className="relative bg-[#080606] border border-border shadow-[0_0_50px_rgba(139,0,0,0.3)] overflow-hidden rounded-md group">
              <img 
                src={event.poster} 
                alt={event.name} 
                className="w-full h-auto object-contain filter contrast-[1.1]"
              />
              {/* Corner Ornaments */}
              <div className="absolute inset-2 pointer-events-none z-20">
                <span className="absolute top-0 left-0 w-4 h-4 border-t-[2px] border-l-[2px] border-gold/70"></span>
                <span className="absolute top-0 right-0 w-4 h-4 border-t-[2px] border-r-[2px] border-gold/70"></span>
                <span className="absolute bottom-0 left-0 w-4 h-4 border-b-[2px] border-l-[2px] border-gold/70"></span>
                <span className="absolute bottom-0 right-0 w-4 h-4 border-b-[2px] border-r-[2px] border-gold/70"></span>
              </div>
            </div>
            
            {/* Badge overlay on poster */}
            {event.badge && (
              <div className="absolute -top-3 -right-3 font-display text-[0.65rem] tracking-[0.25em] uppercase py-2 px-4 bg-accent text-white font-bold z-30 shadow-[0_4px_20px_rgba(139,0,0,0.5)] border border-white/20">
                {event.badge}
              </div>
            )}
          </div>
          
          {/* Main Action Button */}
          <div className="w-[85%] sm:w-[70%] lg:w-full mt-8">
            <a
              href={event.link && event.link !== '#' ? event.link : "https://forms.google.com"}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center font-display text-[0.8rem] font-bold tracking-[4px] uppercase py-5 bg-accent text-white transition-all duration-300 hover:bg-accent-hover hover:shadow-[0_0_30px_rgba(139,0,0,0.6)] btn-shimmer-sweep border border-accent relative overflow-hidden group"
            >
              <span className="relative z-10">Register Now</span>
            </a>
          </div>
        </div>

        {/* Right Side: Details & Rules */}
        <div className="flex flex-col">
          
          <div className="mb-4 inline-flex">
            <span className="font-mono text-[10px] tracking-[4px] text-orange-light uppercase px-3 py-1 border border-orange-light/30 bg-orange-light/10 rounded-full">
              {event.category.toUpperCase()}
            </span>
          </div>

          <h1 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-bold text-white uppercase tracking-[-1px] leading-[1.1] mb-6 drop-shadow-[0_0_15px_rgba(201,168,76,0.3)]">
            {event.name}
          </h1>

          {/* Diamond Divider */}
          <div className="flex items-center mb-10">
            <div className="h-[1px] bg-[var(--color-gold)]/40 w-24"></div>
            <div className="w-2.5 h-2.5 rotate-45 bg-[var(--color-gold)] mx-4"></div>
            <div className="h-[1px] bg-[var(--color-gold)]/40 flex-1"></div>
          </div>

          {/* Guidelines Section */}
          <div className="mb-10">
            <h3 className="font-display text-xl text-[var(--color-gold)] font-bold uppercase tracking-[2px] mb-5 flex items-center gap-3">
              <i className="ri-file-list-3-line"></i> Guidelines
            </h3>
            <ul className="space-y-3">
              {guidelines.map((g, i) => (
                <li key={i} className="flex items-start gap-3 text-text-muted font-body text-[0.95rem] leading-relaxed">
                  <span className="text-[var(--color-gold)] mt-1 opacity-70">◆</span>
                  {g}
                </li>
              ))}
            </ul>
          </div>

          {/* Rules Section */}
          <div className="mb-12">
            <h3 className="font-display text-xl text-[var(--color-gold)] font-bold uppercase tracking-[2px] mb-5 flex items-center gap-3">
              <i className="ri-scales-3-line"></i> Rules & Regulations
            </h3>
            <ul className="space-y-3">
              {rules.map((r, i) => (
                <li key={i} className="flex items-start gap-3 text-white/80 font-body text-[0.95rem] leading-relaxed">
                  <span className="text-accent mt-1 opacity-80">◆</span>
                  {r}
                </li>
              ))}
            </ul>
          </div>

          {/* Coordinators Section */}
          <div className="p-6 bg-surface/50 border border-[var(--color-gold)]/20 backdrop-blur-sm relative overflow-hidden group">
            {/* Glow sweep effect */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(201,168,76,0.05)_0%,transparent_50%)] pointer-events-none" />
            
            <h3 className="font-display text-sm text-[var(--color-gold)] font-bold uppercase tracking-[3px] mb-5 text-center">
              Event Coordinators
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {coordinators.map((c, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <span className="font-bold text-white tracking-wide font-body">{c.name}</span>
                  <a href={`tel:${c.phone}`} className="text-sm text-text-muted mt-1 font-mono tracking-wider hover:text-[var(--color-gold)] transition-colors">
                    {c.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
