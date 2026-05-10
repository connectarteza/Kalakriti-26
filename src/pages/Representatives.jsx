import { useEffect, useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Link } from 'react-router-dom';

const representatives = [
  { 
    id: 1, 
    name: 'Aswat Jana', 
    initials: 'AJ',
    contacts: [
      { type: 'phone', label: 'Phone', value: '7003480969', icon: 'ri-phone-line', link: 'tel:+917003480969' }
    ],
    file: 'Aswatjana.png' 
  },
  { 
    id: 2, 
    name: 'Lopamudra Behuria', 
    initials: 'LB',
    contacts: [
      { type: 'phone', label: 'Phone', value: '7980808935', icon: 'ri-phone-line', link: 'tel:+917980808935' },
      { type: 'whatsapp', label: 'WhatsApp', value: '8337024845', icon: 'ri-whatsapp-line text-[#25D366]', link: 'https://wa.me/918337024845' }
    ],
    file: 'lopa.webp' 
  }
];

const RepCard = ({ rep, index }) => {
  const [imgError, setImgError] = useState(!rep.file);

  return (
    <div 
      className="group relative w-full max-w-[320px] sm:w-[320px] h-[460px] md:h-[480px] perspective-1000 stagger-reveal"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="absolute inset-0 bg-[#080606] border border-[rgba(201,168,76,0.25)] shadow-[0_8px_40px_rgba(139,0,0,0.4)] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-[6px] group-hover:scale-[1.02] group-hover:border-[rgba(201,168,76,0.6)] overflow-hidden rounded-sm flex flex-col">
        
        {/* Role Badge */}
        <div className="absolute top-3 right-3 z-40 bg-[#8B0000] px-2.5 py-1 flex flex-col items-center justify-center border border-white/20 shadow-lg transform scale-90 origin-top-right">
          <span className="text-[6px] font-mono tracking-[2px] text-white/80 leading-none mb-1">· INTRODUCING ·</span>
          <span className="text-[10px] font-display font-bold tracking-[2px] text-white leading-none">REPRESENTATIVE</span>
        </div>

        <div className="w-full h-full relative overflow-hidden">
          {imgError ? (
            <div className="w-full h-full flex items-center justify-center bg-[#0a0808] border-b border-[var(--color-gold)]/10">
              <span className="font-display text-6xl text-[var(--color-gold)]/20 tracking-widest">{rep.initials}</span>
            </div>
          ) : (
            <img 
              src={`/Representative/${rep.file}`}
              alt={rep.name}
              onError={() => setImgError(true)}
              className="w-full h-full object-cover filter grayscale-[80%] transition-all duration-500 group-hover:grayscale-0 group-hover:scale-[1.05]"
              loading="lazy"
            />
          )}

          {/* Cinema Overlay & Vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(8,6,6,0.6)_100%)] pointer-events-none z-10"></div>

          {/* Gradient Overlay for Name */}
          <div className="absolute inset-x-0 bottom-0 h-[70%] bg-[linear-gradient(to_top,rgba(6,2,2,0.95)_0%,rgba(6,2,2,0.6)_40%,transparent_100%)] z-20 pointer-events-none"></div>

          {/* Glare effect */}
          <div className="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-25deg] group-hover:animate-shimmer pointer-events-none z-30"></div>
          
          {/* Content Overlay */}
          <div className="absolute inset-0 z-40 flex flex-col justify-end p-5 pb-6">
            <h3 className="font-display text-xl md:text-2xl font-bold text-white uppercase tracking-[2px] mb-3 drop-shadow-lg leading-tight">{rep.name}</h3>
            
            <div className="flex flex-col gap-2 relative z-50">
              {rep.contacts.map((contact, i) => (
                <a 
                  key={i}
                  href={contact.link}
                  target={contact.type === 'whatsapp' ? '_blank' : '_self'}
                  rel={contact.type === 'whatsapp' ? 'noopener noreferrer' : ''}
                  className="flex items-center gap-3 bg-black/40 hover:bg-black/60 backdrop-blur-sm border border-white/10 hover:border-[var(--color-gold)] transition-all duration-300 py-2 px-3 rounded-xl w-full group/contact cursor-pointer"
                >
                  <i className={`${contact.icon} text-lg group-hover/contact:text-[var(--color-gold)] transition-colors`}></i>
                  <div className="flex flex-col justify-center">
                    <span className="text-[8px] text-white/50 font-display tracking-[1px] uppercase leading-none mb-[2px]">{contact.label}</span>
                    <span className="font-mono text-[0.7rem] md:text-[0.75rem] tracking-widest text-white/90 group-hover/contact:text-[var(--color-gold)] transition-colors leading-none">{contact.value}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Corner Ornaments */}
        <div className="absolute inset-2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-50">
          <span className="absolute top-0 left-0 w-3 h-3 border-t-[1.5px] border-l-[1.5px] border-[var(--color-gold)]"></span>
          <span className="absolute top-0 right-0 w-3 h-3 border-t-[1.5px] border-r-[1.5px] border-[var(--color-gold)]"></span>
          <span className="absolute bottom-0 left-0 w-3 h-3 border-b-[1.5px] border-l-[1.5px] border-[var(--color-gold)]"></span>
          <span className="absolute bottom-0 right-0 w-3 h-3 border-b-[1.5px] border-r-[1.5px] border-[var(--color-gold)]"></span>
        </div>
      </div>
    </div>
  );
};

export default function Representatives() {
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
        {/* Soft Golden Aura behind cards */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_60%,rgba(201,168,76,0.06),transparent_70%)] pointer-events-none z-0" />
        {/* Scanline overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100%_38px] opacity-20" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="mb-8">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-[var(--color-gold)]/70 hover:text-[var(--color-gold)] transition-colors font-mono text-[10px] tracking-[3px] uppercase group"
          >
            <i className="ri-arrow-left-line text-sm transition-transform group-hover:-translate-x-1"></i> Back to Home
          </Link>
        </div>
        
        <div className="text-center mb-16 w-full px-2" ref={headerRef}>
          <span className="font-mono text-[10px] tracking-[5px] text-white/50 uppercase block mb-3">
            Official Points of Contact
          </span>
          <h1 className="font-display text-[clamp(1.75rem,7vw,4.5rem)] font-bold uppercase tracking-[-1px] leading-[1.1] drop-shadow-[0_0_15px_rgba(201,168,76,0.3)] flex flex-col md:block items-center">
            <span className="text-white">Our</span> 
            <span className="text-[#8B0000] md:ml-4">Representatives</span>
          </h1>
          
          {/* Diamond Divider */}
          <div className="flex items-center justify-center mt-8">
            <div className="h-[1px] bg-[var(--color-gold)]/40 w-16"></div>
            <div className="w-2.5 h-2.5 rotate-45 bg-[var(--color-gold)] mx-4"></div>
            <div className="h-[1px] bg-[var(--color-gold)]/40 w-16"></div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-10 md:gap-12 relative z-10 w-full" ref={gridRef}>
          {representatives.map((rep, index) => (
            <RepCard key={rep.id} rep={rep} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
