import { useEffect, useState, useRef } from 'react';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- Audio Management ---
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Attempt autoplay immediately (might be blocked)
    if (audioRef.current) {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          // If blocked, wait for the first user interaction anywhere on the screen
          const playOnInteraction = () => {
            if (audioRef.current && audioRef.current.paused) {
              audioRef.current.play()
                .then(() => setIsPlaying(true))
                .catch(e => console.log('Audio play failed:', e));
            }
            // Remove listeners after first interaction
            window.removeEventListener('click', playOnInteraction);
            window.removeEventListener('scroll', playOnInteraction);
            window.removeEventListener('touchstart', playOnInteraction);
            window.removeEventListener('keydown', playOnInteraction);
          };

          window.addEventListener('click', playOnInteraction, { once: true });
          window.addEventListener('scroll', playOnInteraction, { once: true, passive: true });
          window.addEventListener('touchstart', playOnInteraction, { once: true, passive: true });
          window.addEventListener('keydown', playOnInteraction, { once: true });
        });
    }
  }, []);

  const handlePlayToggle = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(e => console.log('Audio play failed:', e));
    }
  };

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    const time = audioRef.current.currentTime;
    
    // Loop back to 0 when hitting 30 seconds
    if (time >= 30) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } 
    // Fade out between 27 and 30 seconds
    else if (time > 27) {
      audioRef.current.volume = Math.max(0, (30 - time) / 3);
    } 
    // Fade in between 0 and 3 seconds
    else if (time < 3) {
      audioRef.current.volume = Math.min(1, time / 3);
    } 
    // Normal volume
    else {
      audioRef.current.volume = 1;
    }
  };

  const [particles] = useState(() => {
    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${20 + Math.random() * 80}%`,
      delay: `${Math.random() * 6}s`,
      duration: `${4 + Math.random() * 4}s`,
    }));
  });

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' });
  };

  const orbitingElements = [
    { label: 'Videography', icon: 'ri-clapperboard-line', color: 'text-orange-light', category: 'videography' },
    { label: 'Photography', icon: 'ri-camera-lens-line', color: 'text-white', category: 'photography' },
    { label: 'Visual Arts', icon: 'ri-palette-line', color: 'text-[var(--color-gold)]', category: 'visual' },
    { label: 'Performing Arts', icon: 'ri-mic-line', color: 'text-accent', category: 'performing' },
    { label: 'Literary', icon: 'ri-quill-pen-line', color: 'text-cream', category: 'writing' },
  ];

  const handleCategoryClick = (category) => {
    scrollTo('events');
    window.dispatchEvent(new CustomEvent('filter-events', { detail: category }));
  };

  return (
    <section
      id="home"
      className="hero-glow min-h-screen flex items-center justify-center overflow-hidden pt-20 noise-overlay"
    >
      {/* Ghosted "KK" */}
      <div className="absolute left-[5%] top-[15%] font-display font-bold leading-none text-white opacity-[0.03] text-[300px] pointer-events-none select-none z-0">
        KK
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none perspective-1000 z-10">
        {particles.map((p) => (
          <div
            key={p.id}
            className="particle absolute w-[2px] h-[2px] bg-orange-light rounded-full opacity-0 transform-3d"
            style={{ left: p.left, top: p.top, animationDelay: p.delay, animationDuration: p.duration }}
          />
        ))}
      </div>

      <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
        
        {/* Left Side: Typography & CTA (Sacred Flame & Gold Typography) */}
        <div className="flex flex-col items-start text-left perspective-1000 pt-10">
          
          {/* Arteza Badge */}
          <div className="inline-flex items-center gap-3 mb-6 stagger-reveal" style={{ animationDelay: '0.1s' }}>
            <img
              src="/kalakriti-26/Images/arteza-logo.png"
              alt="Arteza"
              className="w-8 h-8 rounded-full border border-white/10"
            />
            <span className="font-mono text-xs tracking-[4px] text-text-dim uppercase font-semibold">
              Arteza Presents
            </span>
          </div>

          {/* Main Title - Staggered & Gold Shimmer */}
          <h1 className="font-display text-[clamp(4rem,8vw,9rem)] font-bold leading-[0.9] tracking-[4px] uppercase mb-6 flex flex-wrap items-baseline">
            <span className="flex">
              {['K','A','L','A','K','R','I','T','I'].map((char, index) => (
                <span 
                  key={index} 
                  className="stagger-reveal inline-block gold-shimmer" 
                  style={{ animationDelay: `${0.2 + (index * 0.08)}s` }}
                >
                  {char}
                </span>
              ))}
            </span>
            <span className="text-[var(--color-gold)] text-[0.4em] self-start mt-2 ml-3 tracking-normal inline-block stagger-reveal drop-shadow-[0_0_15px_rgba(201,168,76,0.5)]" style={{ animationDelay: '0.9s' }}>
              &apos;26
            </span>
          </h1>

          {/* Decorative Gold Rule */}
          <div className="w-20 h-[1.5px] bg-gradient-to-r from-[var(--color-gold)] to-transparent mb-8 stagger-reveal" style={{ animationDelay: '0.95s' }}></div>

          {/* Tagline */}
          <p className="font-heading text-2xl md:text-3xl italic text-white/80 tracking-[2px] mb-10 max-w-xl leading-snug border-l-[3px] border-l-[var(--color-gold)] pl-6 stagger-reveal" style={{ animationDelay: '1.0s' }}>
            Bringing Forth the Revolution Through Art
          </p>

          {/* Micro-cards Stats (Gold Border) */}
          <div className="flex flex-wrap items-center gap-8 mb-12 stagger-reveal" style={{ animationDelay: '1.1s' }}>
            <div className="flex flex-col items-start border-t border-t-[var(--color-gold)] pt-3 w-32">
              <span className="font-display text-[32px] font-bold text-white leading-none mb-1">1</span>
              <span className="font-mono text-[9px] tracking-[3px] text-text-muted uppercase">Grand Day</span>
            </div>
            
            <div className="flex flex-col items-start border-t border-t-[var(--color-gold)] pt-3 w-32">
              <span className="font-display text-[32px] font-bold text-white leading-none mb-1">20+</span>
              <span className="font-mono text-[9px] tracking-[3px] text-text-muted uppercase">Events</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex items-center gap-6 stagger-reveal" style={{ animationDelay: '1.2s' }}>
            <button
              className="relative overflow-hidden font-mono text-[11px] font-bold tracking-[4px] uppercase py-4 px-12 bg-transparent text-white border border-[var(--color-gold)] transition-all hover:bg-[var(--color-gold)] hover:text-black hover:shadow-[0_0_20px_rgba(201,168,76,0.4)] group"
              onClick={() => scrollTo('events')}
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore <i className="ri-arrow-down-line group-hover:translate-y-1 transition-transform"></i>
              </span>
            </button>
          </div>
          
        </div>

        {/* Right Side: 3D Floating Avatar with Parallax */}
        <div className="relative w-full h-[70vh] min-h-[600px] flex items-center justify-center perspective-1000 mt-10 lg:mt-0">
          
          <div 
            className="relative w-full max-w-[550px] aspect-square flex items-center justify-center transform-3d animate-float-3d"
            style={{ transform: `translateY(${scrollY * -0.15}px)` }}
          >
            
            {/* Free Floating Avatar Image without card frame */}
            <img 
              src="/kalakriti-26/Herobg/avatar.png" 
              alt="Kalakriti '26" 
              className="relative z-20 w-[90%] h-auto object-contain drop-shadow-[0_0_50px_rgba(139,0,0,0.6)] filter contrast-[1.15]"
            />
            
            {/* Master Orbiting Ring */}
            <div className="absolute inset-[15%] z-30 pointer-events-none" style={{ animation: 'spin 40s linear infinite' }}>
              {orbitingElements.map((el, i) => {
                const angle = i * (360 / 5); // 0, 72, 144, 216, 288
                
                return (
                  <div 
                    key={i}
                    className="absolute inset-0 pointer-events-none"
                    style={{ transform: `rotate(${angle}deg)` }}
                  >
                    {/* The Spoke Tip - Centered on the ring's border */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 pointer-events-auto">
                      
                      {/* 1. Un-tilt the static angle */}
                      <div style={{ transform: `rotate(-${angle}deg)`, width: '100%', height: '100%' }}>
                        
                        {/* 2. Counter-rotate the master spin to stay upright */}
                        <div className="w-full h-full flex flex-col items-center gap-2 group cursor-pointer hover:scale-110 transition-transform" style={{ animation: 'spin-reverse 40s linear infinite' }} onClick={() => handleCategoryClick(el.category)}>
                          
                          <div className="w-12 h-12 rounded-full bg-[#111111]/80 backdrop-blur-md border border-[var(--color-gold)]/40 flex items-center justify-center shadow-[0_0_25px_rgba(201,168,76,0.25)] group-hover:border-[var(--color-gold)] transition-colors relative">
                            <i className={`${el.icon} text-xl ${el.color} relative z-10`}></i>
                            {/* Subtle inner glow */}
                            <div className="absolute inset-0 rounded-full bg-[var(--color-gold)]/5 blur-[8px] pointer-events-none"></div>
                          </div>
                          
                          <span className="font-mono text-[10px] tracking-[2px] text-white/80 uppercase opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap absolute top-[115%] bg-black/80 px-3 py-1.5 rounded-md border border-white/10 shadow-xl">
                            {el.label}
                          </span>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
          </div>
        </div>
        
      </div>

      {/* Floating Audio Toggle */}
      <div className="absolute bottom-10 right-10 z-50 flex items-center gap-4 stagger-reveal" style={{ animationDelay: '1.5s' }}>
        <span className="font-mono text-[9px] tracking-[3px] text-white/50 uppercase">
          {isPlaying ? 'Sound On' : 'Sound Off'}
        </span>
        <button 
          onClick={handlePlayToggle}
          className={`w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-md border transition-all duration-500 hover:scale-110 ${
            isPlaying 
              ? 'bg-[var(--color-gold)]/20 border-[var(--color-gold)] shadow-[0_0_20px_rgba(201,168,76,0.3)] text-[var(--color-gold)]' 
              : 'bg-black/40 border-white/20 text-white/50 hover:border-white/50'
          }`}
        >
          <i className={`text-lg ${isPlaying ? 'ri-volume-up-line' : 'ri-volume-mute-line'}`}></i>
          
          {/* Animated sound waves when playing */}
          {isPlaying && (
            <div className="absolute inset-0 rounded-full border border-[var(--color-gold)] animate-ping opacity-20"></div>
          )}
        </button>
      </div>

      {/* Hidden Audio Element */}
      <audio 
        ref={audioRef} 
        src="/kalakriti-26/mp3/pinkyloll-my-she-wolf-eara_-my-wolf-blood-aj-490559 (1).mp3" 
        onTimeUpdate={handleTimeUpdate}
        preload="auto"
        autoPlay
      />
    </section>
  );
}
