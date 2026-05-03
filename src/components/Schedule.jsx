import { useState, useEffect, useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

function CountUp({ end, duration = 1200 }) {
  const [count, setCount] = useState(() => end === '∞' ? '∞' : 0);
  const ref = useRef(null);
  
  useEffect(() => {
    if (end === '∞') {
      return;
    }
    const endVal = parseInt(end);
    let startTimestamp = null;
    let observer = new IntersectionObserver((entries) => {
      if(entries[0].isIntersecting) {
        const step = (timestamp) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);
          const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
          setCount(Math.floor(easeOut * endVal));
          if (progress < 1) {
            window.requestAnimationFrame(step);
          }
        };
        window.requestAnimationFrame(step);
        observer.disconnect();
      }
    });
    if(ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function Schedule() {
  const headerRef = useScrollReveal();
  
  return (
    <section id="schedule" className="events-glow py-20 border-y border-white/5 relative min-h-screen flex items-center">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Content vertically centered */}
        <div className="flex flex-col items-start justify-center h-full py-4" ref={headerRef}>
          
          <div className="mb-8 text-left w-full">
            <span className="font-mono text-[10px] tracking-[5px] text-[var(--color-gold)]/70 uppercase block mb-3">
              The Sacred Scrolls
            </span>
            <h2 className="font-display text-[clamp(40px,5vw,64px)] font-bold uppercase leading-none flex flex-wrap items-baseline gap-2">
              <span className="text-[#F0E6D3] text-[0.85em] tracking-[0.12em]">Browse The</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-gold)] via-[#fff9e6] to-[var(--color-gold)] animate-gold-sweep pb-2">
                Brochure
              </span>
            </h2>
            
            {/* 3 Diamond Divider */}
            <div className="flex items-center mt-8 gap-2">
              <div className="w-1.5 h-1.5 rotate-45 bg-[var(--color-gold)]/60"></div>
              <div className="w-2.5 h-2.5 rotate-45 bg-[var(--color-gold)]"></div>
              <div className="w-1.5 h-1.5 rotate-45 bg-[var(--color-gold)]/60"></div>
            </div>
          </div>

          <p className="font-heading text-2xl md:text-3xl text-white/90 leading-[1.4] mb-8 clip-reveal" style={{ animationDelay: '0.1s' }}>
            Delve into the <span className="text-[var(--color-gold)] italic">sacred flame of creativity</span> —<br/>
            where art meets ancient purpose.
          </p>

          <blockquote className="border-l-2 border-[#C0392B] pl-5 py-1 mb-10 clip-reveal" style={{ animationDelay: '0.3s' }}>
            <p className="font-heading text-[16px] text-[rgba(255,255,255,0.58)] leading-[1.8] italic">
              Discover the complete breakdown of our <span className="text-[var(--color-gold)] not-italic font-medium">20+ curated competitions</span>, 
              detailed guidelines, scoring rubrics, and official rules for Kalakriti &apos;26.<br/><br/>
              One document. Every answer.
            </p>
          </blockquote>

          {/* Decorative Temple Frieze Line */}
          <div className="w-full max-w-[560px] h-[3px] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxwYXRoIGQ9Ik00IDBMOCA0TDQgOEwwIDRaIiBmaWxsPSIjQzlBODRDIiBmaWxsLW9wYWNpdHk9IjEuMCIvPjwvc3ZnPg==')] bg-repeat-x opacity-30 mb-10"></div>

          {/* Stats Box */}
          <div className="grid grid-cols-2 sm:grid-cols-4 w-full max-w-[560px] border border-[var(--color-gold)]/45 rounded-sm mb-12 relative clip-reveal" style={{ animationDelay: '0.5s' }}>
            {/* Corner Filigree */}
            <div className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t border-l border-[var(--color-gold)]"></div>
            <div className="absolute -top-1.5 -right-1.5 w-3 h-3 border-t border-r border-[var(--color-gold)]"></div>
            <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 border-b border-l border-[var(--color-gold)]"></div>
            <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b border-r border-[var(--color-gold)]"></div>

            <div className="flex flex-col items-center justify-center p-4 sm:border-r border-b sm:border-b-0 border-[var(--color-gold)]/45 transition-colors duration-300 hover:bg-[#3c0404]/30 group">
              <span className="font-display text-[28px] sm:text-[32px] font-bold text-[var(--color-gold)] leading-none mb-2 transition-transform duration-300 group-hover:scale-[1.05] inline-block"><CountUp end="20"/>+</span>
              <span className="font-mono text-[8px] tracking-[2px] text-white/50 uppercase text-center">Competitions</span>
            </div>
            <div className="flex flex-col items-center justify-center p-4 border-l sm:border-l-0 sm:border-r border-b sm:border-b-0 border-[var(--color-gold)]/45 transition-colors duration-300 hover:bg-[#3c0404]/30 group">
              <span className="font-display text-[28px] sm:text-[32px] font-bold text-[var(--color-gold)] leading-none mb-2 transition-transform duration-300 group-hover:scale-[1.05] inline-block"><CountUp end="5"/></span>
              <span className="font-mono text-[8px] tracking-[2px] text-white/50 uppercase text-center">Art<br/>Domains</span>
            </div>
            <div className="flex flex-col items-center justify-center p-4 sm:border-r border-[var(--color-gold)]/45 transition-colors duration-300 hover:bg-[#3c0404]/30 group">
              <span className="font-display text-[28px] sm:text-[32px] font-bold text-[var(--color-gold)] leading-none mb-2 transition-transform duration-300 group-hover:scale-[1.05] inline-block"><CountUp end="1"/></span>
              <span className="font-mono text-[8px] tracking-[2px] text-white/50 uppercase text-center">Grand<br/>Day</span>
            </div>
            <div className="flex flex-col items-center justify-center p-4 border-l sm:border-l-0 transition-colors duration-300 hover:bg-[#3c0404]/30 group">
              <span className="font-display text-[32px] sm:text-[36px] font-bold text-[var(--color-gold)] leading-none mb-2 transition-transform duration-300 group-hover:scale-[1.05] inline-block"><CountUp end="∞"/></span>
              <span className="font-mono text-[8px] tracking-[2px] text-white/50 uppercase text-center">Possibilities</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 clip-reveal" style={{ animationDelay: '0.7s' }}>
            <a 
              href="#" 
              className="relative overflow-hidden font-mono text-[11px] font-bold tracking-[4px] uppercase py-4 px-8 bg-transparent text-[var(--color-gold)] border border-[var(--color-gold)] transition-all duration-400 hover:bg-[var(--color-gold)] hover:text-[#0a0404] hover:shadow-[0_0_20px_rgba(201,168,76,0.3)] flex items-center gap-3 group w-full sm:w-auto justify-center"
            >
              <i className="ri-book-read-line text-[14px]"></i> View Official Brochure
            </a>
            
            <a 
              href="#" 
              className="font-mono text-[10px] font-bold tracking-[3px] uppercase text-white/60 hover:text-[var(--color-gold)] transition-colors border-b border-white/20 hover:border-[var(--color-gold)] pb-1 w-auto"
            >
              Download PDF
            </a>
          </div>

        </div>

        {/* Right Side: Brochure Image / Poster */}
        <div className="relative flex justify-center lg:justify-end items-center perspective-1000 hidden md:flex">
          {/* Apply animate-float class for breathing oscillation */}
          <div className="relative w-[80%] max-w-[400px] aspect-[1/1.4] transform-3d rotate-y-[-15deg] rotate-x-[5deg] hover:rotate-y-[0deg] hover:rotate-x-[0deg] transition-transform duration-700 ease-out shadow-[inset_20px_0_40px_-15px_rgba(40,10,5,0.9),0_0_50px_rgba(139,0,0,0.3)] border border-[var(--color-gold)]/30 rounded-md overflow-hidden group" style={{ animation: 'float 6s ease-in-out infinite' }}>
            {/* Mock Brochure Cover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#2a0505] to-[#0a0202] z-0"></div>
            
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-8">
              <img src="/Herobg/avatar.png" alt="Kalakriti Avatar" className="w-[120px] mb-8 opacity-90 drop-shadow-[0_0_15px_rgba(201,168,76,0.3)]" />
              <h3 className="font-display text-2xl text-[var(--color-gold)] tracking-[4px] mb-2 drop-shadow-[0_0_10px_rgba(201,168,76,0.5)]">KALAKRITI</h3>
              <p className="font-mono text-[10px] tracking-[4px] text-white/50 uppercase">
                &apos;26 — Official Brochure
              </p>
            </div>

            {/* Inner Gold Border */}
            <div className="absolute inset-4 border border-[var(--color-gold)]/20 z-20 pointer-events-none rounded-sm"></div>
            
            {/* Spine Highlight Line */}
            <div className="absolute left-[3%] top-0 bottom-0 w-[1px] bg-white/5 z-20 pointer-events-none"></div>

            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(201,168,76,0.15),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-30 pointer-events-none"></div>
          </div>
        </div>

      </div>
    </section>
  );
}
