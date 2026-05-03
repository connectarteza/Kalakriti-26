export default function Footer() {
  return (
    <footer className="relative py-12 border-t border-border bg-bg overflow-hidden">
      {/* Atmospheric Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-[radial-gradient(ellipse_at_top,rgba(139,0,0,0.55)_0%,transparent_70%)]" />
        <div className="absolute top-0 right-0 w-[400px] h-full bg-[radial-gradient(ellipse_at_right,rgba(201,168,76,0.15)_0%,transparent_60%)]" />
      </div>

      <div className="relative max-w-[1200px] mx-auto px-6 flex flex-col items-center z-10">
        
        {/* Top Diamond Divider */}
        <div className="flex items-center justify-center mb-10">
          <div className="h-[1px] bg-[var(--color-gold)]/30 w-16"></div>
          <div className="w-2 h-2 rotate-45 bg-[var(--color-gold)] mx-3"></div>
          <div className="h-[1px] bg-[var(--color-gold)]/30 w-16"></div>
        </div>

        {/* Brand Group */}
        <div className="flex items-center justify-center gap-5 sm:gap-8">
          <img src="/footer/Msit25%20years.png" alt="MSIT 25 Years" className="w-[130px] h-[130px] object-contain" />
          
          <div className="w-[1px] h-[100px] bg-gradient-to-b from-transparent via-[var(--color-gold)]/60 to-transparent"></div>
          
          <div className="flex flex-col items-start">
            <span className="font-display text-xl sm:text-2xl font-bold text-white tracking-[5px] uppercase">
              Kalakriti<span className="text-accent">&apos;26</span>
            </span>
            <div className="w-[80%] h-[1.5px] mt-1.5 bg-gradient-to-r from-[var(--color-gold)] to-transparent"></div>
          </div>
        </div>

        {/* Bottom Diamond Divider */}
        <div className="flex items-center justify-center mt-10 mb-8">
          <div className="h-[1px] bg-[var(--color-gold)]/30 w-16"></div>
          <div className="w-2 h-2 rotate-45 bg-[var(--color-gold)] mx-3"></div>
          <div className="h-[1px] bg-[var(--color-gold)]/30 w-16"></div>
        </div>

        {/* Tagline */}
        <p className="font-calligraphy text-2xl sm:text-3xl text-[var(--color-gold)] mb-8 text-center">
          Bringing Forth the Revolution Through Art
        </p>

        {/* Credits */}
        <p className="text-[0.8rem] text-text-muted font-body tracking-wide mb-3 text-center">
          Curated by <span className="text-orange-light font-medium">Arteza</span> &bull; <span className="text-white/70">Meghnad Saha Institute of Technology</span>
        </p>

        {/* Copyright */}
        <p className="text-[0.7rem] text-white/60 font-body opacity-60 text-center">
          &copy; 2026 Kalakriti. All rights reserved.
        </p>

        {/* Bottom closure */}
        <div className="flex items-center justify-center mt-8 opacity-40">
          <div className="h-[1px] bg-[var(--color-gold)]/30 w-8"></div>
          <div className="w-1 h-1 rotate-45 bg-[var(--color-gold)] mx-2"></div>
          <div className="h-[1px] bg-[var(--color-gold)]/30 w-8"></div>
        </div>
      </div>
    </footer>
  );
}
