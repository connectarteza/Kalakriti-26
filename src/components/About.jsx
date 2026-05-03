// import { useState, useEffect } from 'react';

// const EVENT_DATE = new Date(2026, 8, 1, 10, 0, 0);
//
// function getTimeLeft() {
//   const diff = EVENT_DATE - new Date();
//   if (diff <= 0) return { days: '00', hours: '00', mins: '00', secs: '00' };
//   return {
//     days: String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, '0'),
//     hours: String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
//     mins: String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, '0'),
//     secs: String(Math.floor((diff / 1000) % 60)).padStart(2, '0'),
//   };
// }

export default function About() {
  // const [time, setTime] = useState(getTimeLeft);
  //
  // useEffect(() => {
  //   const interval = setInterval(() => setTime(getTimeLeft()), 1000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <section id="about" className="about-section py-20 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 about-content">
        {/* Header - Editorial Two-Tier */}
        <div className="text-center mb-20">
          <span className="font-mono text-[10px] tracking-[5px] text-white/50 uppercase block mb-3">
            About the Fest
          </span>
          <h2 className="font-display text-[clamp(48px,8vw,96px)] font-bold text-white tracking-[-1px] uppercase leading-none">
            Kalakriti
          </h2>
          
          {/* Gold diamond divider */}
          <div className="flex items-center justify-center mt-8">
            <div className="h-[1px] bg-[var(--color-gold)]/30 w-16"></div>
            <div className="w-2 h-2 rotate-45 bg-[var(--color-gold)] mx-3"></div>
            <div className="h-[1px] bg-[var(--color-gold)]/30 w-16"></div>
          </div>
        </div>

        {/* Centered Manuscript Layout */}
        <div className="flex flex-col items-center max-w-[700px] mx-auto">
          
          <div className="text-left w-full">
            <p className="font-heading text-[16px] text-[rgba(255,255,255,0.58)] leading-[1.95] mb-5">
              <span 
                className="text-[4rem] text-[#C0392B] italic float-left leading-[0.78] font-display" 
                style={{ margin: '6px 12px 0 0' }}
              >
                K
              </span>
              <span className="font-display font-bold text-white tracking-[2px] text-sm">ALAKRITI&apos; 26</span> marks a landmark moment as the first-ever open-ground art fest under the Techno India Group.
            </p>

            <p className="font-heading text-[16px] text-[rgba(255,255,255,0.58)] leading-[1.95] mb-8">
              Designed as a living canvas, the fest brings together a vibrant community of artists, performers, and creators through <span className="text-[var(--color-gold)] font-medium">16 curated competitions</span> spanning videography, photography, literary, and performing arts.
            </p>

            <blockquote className="border-l-[3px] border-[var(--color-gold)] pl-5 py-2 mb-12 bg-gradient-to-r from-[var(--color-gold)]/5 to-transparent">
              <p className="font-heading text-[16px] text-[rgba(255,255,255,0.48)] leading-[1.95] italic">
                More than just a fest — a celebration of individuality and creative freedom across the Techno India community.
              </p>
            </blockquote>
          </div>

          {/* Huge Gold Stats Row */}
          <div className="flex justify-center w-full mt-4 pt-10 border-t border-[var(--color-gold)]/30">
            <div className="flex flex-col items-center px-8 md:px-12 border-r border-white/10">
              <span className="font-display text-[56px] font-bold text-[var(--color-gold)] leading-[1]">1</span>
              <span className="font-mono text-[9px] tracking-[4px] text-white/30 uppercase mt-4">Grand Day</span>
            </div>
            <div className="flex flex-col items-center px-8 md:px-12 border-r border-white/10">
              <span className="font-display text-[56px] font-bold text-[var(--color-gold)] leading-[1]">20+</span>
              <span className="font-mono text-[9px] tracking-[4px] text-white/30 uppercase mt-4">Events</span>
            </div>
            <div className="flex flex-col items-center pl-8 md:pl-12">
              <span className="font-display text-[32px] mt-4 font-bold text-[var(--color-gold)] leading-[1] mb-[12px]">MSIT</span>
              <span className="font-mono text-[9px] tracking-[4px] text-white/30 uppercase mt-[2px]">Campus Ground</span>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
