import { useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Link } from 'react-router-dom';

const leads = [
  { id: 1, file: '1_20260503_132645_0000.png' },
  { id: 2, file: '2_20260503_132645_0001.png' },
  { id: 3, file: '3_20260503_132645_0002.png' },
  { id: 4, file: '4_20260503_132645_0003.png' },
  { id: 5, file: '5_20260503_132645_0004.png' },
  { id: 6, file: '6_20260503_132645_0005.png' },
  { id: 7, file: '7_20260503_132646_0006.png' },
  { id: 8, file: '8_20260503_132646_0007.png' },
  { id: 9, file: '9_20260503_132646_0008.png' },
  { id: 11, file: '11_20260503_132646_0010.png' },
  { id: 12, file: '12_20260503_132646_0011.png' },
  { id: 13, file: '13_20260503_132646_0012.png' },
  { id: 14, file: '14_20260503_132646_0013.png' },
];

export default function OrganisingCommittee() {
  const headerRef = useScrollReveal();
  const gridRef = useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-bg pt-32 pb-20 relative overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(ellipse_at_top,rgba(139,0,0,0.4)_0%,transparent_70%)]" />
        <div className="absolute top-1/2 left-0 w-[400px] h-[600px] -translate-y-1/2 bg-[radial-gradient(ellipse_at_left,rgba(201,168,76,0.1)_0%,transparent_60%)]" />
        {/* Scanline overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100%_38px] opacity-20" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="mb-8">
          <Link 
            to="kalakriti/"
            className="inline-flex items-center gap-2 text-[var(--color-gold)]/70 hover:text-[var(--color-gold)] transition-colors font-mono text-[10px] tracking-[3px] uppercase group"
          >
            <i className="ri-arrow-left-line text-sm transition-transform group-hover:-translate-x-1"></i> Back to Home
          </Link>
        </div>
        
        <div className="text-center mb-16 animate-in" ref={headerRef}>
          <span className="font-mono text-[10px] tracking-[5px] text-white/50 uppercase block mb-3">
            The Visionaries
          </span>
          <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-bold text-white uppercase tracking-[-1px] leading-[1.1] drop-shadow-[0_0_15px_rgba(201,168,76,0.3)]">
            Organising Committee
          </h1>
          
          {/* Diamond Divider */}
          <div className="flex items-center justify-center mt-8">
            <div className="h-[1px] bg-[var(--color-gold)]/40 w-16"></div>
            <div className="w-2.5 h-2.5 rotate-45 bg-[var(--color-gold)] mx-4"></div>
            <div className="h-[1px] bg-[var(--color-gold)]/40 w-16"></div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8" ref={gridRef}>
          {leads.map((lead, index) => (
            <div 
              key={lead.id} 
              className="group relative w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-22px)] lg:w-[calc(25%-24px)] xl:w-[calc(20%-26px)] aspect-[3/4] perspective-1000 stagger-reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-[#080606] border border-border transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-2 group-hover:scale-[1.03] group-hover:border-[var(--color-gold)]/60 group-hover:shadow-[0_15px_40px_rgba(201,168,76,0.25),inset_0_0_20px_rgba(139,0,0,0.1)] overflow-hidden rounded-sm">
                <img 
                  src={`/Leads/${lead.file}`}
                  alt={`Organising Committee Member`}
                  className="w-full h-full object-cover filter contrast-[1.1] transition-transform duration-700 group-hover:scale-[1.05]"
                  loading="lazy"
                />
                
                {/* Cinema Overlay & Vignette */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(8,6,6,0.6)_100%)] pointer-events-none"></div>

                {/* Glare effect */}
                <div className="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-25deg] group-hover:animate-shimmer pointer-events-none"></div>
                {/* Hover Veil */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>

                {/* Corner Ornaments */}
                <div className="absolute inset-2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20">
                  <span className="absolute top-0 left-0 w-3 h-3 border-t-[1.5px] border-l-[1.5px] border-[var(--color-gold)]"></span>
                  <span className="absolute top-0 right-0 w-3 h-3 border-t-[1.5px] border-r-[1.5px] border-[var(--color-gold)]"></span>
                  <span className="absolute bottom-0 left-0 w-3 h-3 border-b-[1.5px] border-l-[1.5px] border-[var(--color-gold)]"></span>
                  <span className="absolute bottom-0 right-0 w-3 h-3 border-b-[1.5px] border-r-[1.5px] border-[var(--color-gold)]"></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
