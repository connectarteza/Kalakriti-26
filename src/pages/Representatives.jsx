import { useEffect, useState, useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Link } from 'react-router-dom';
import { getLiveRepresentatives } from '../data/representatives';

// Individual College Representative Card (Ultra-Compact & Elegant)
const CollegeRepCard = ({ item, index }) => {
  const [copiedRep, setCopiedRep] = useState(null);

  const handleCopy = (name) => {
    navigator.clipboard.writeText(name);
    setCopiedRep(name);
    setTimeout(() => setCopiedRep(null), 1500);
  };

  return (
    <div 
      className="group relative w-full bg-[#080606] border border-[rgba(201,168,76,0.2)] shadow-[0_6px_25px_rgba(139,0,0,0.15)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[4px] hover:border-[rgba(201,168,76,0.5)] overflow-hidden rounded-sm flex flex-col p-4 sm:p-5 stagger-reveal"
      style={{ animationDelay: `${index * 0.04}s` }}
    >
      {/* Decorative Top Accent */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--color-gold)]/20 to-transparent group-hover:via-[var(--color-gold)] transition-all duration-500" />
      
      {/* Corner Ornaments */}
      <div className="absolute inset-1.5 pointer-events-none opacity-20 group-hover:opacity-75 transition-opacity duration-500 z-30">
        <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[var(--color-gold)]"></span>
        <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[var(--color-gold)]"></span>
        <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[var(--color-gold)]"></span>
        <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[var(--color-gold)]"></span>
      </div>

      {/* College Title */}
      <div className="mb-4 relative z-10">
        <span className="font-mono text-[7px] tracking-[2px] text-white/30 uppercase block mb-0.5">Institution</span>
        <h3 className="font-heading text-base font-bold text-white uppercase tracking-[0.5px] leading-tight group-hover:text-[var(--color-gold)] transition-colors duration-300 min-h-[40px] flex items-center">
          {item.college}
        </h3>
      </div>

      {/* Divider */}
      <div className="h-px bg-border/40 w-full mb-4 relative z-10" />

      {/* Representatives Name List */}
      <div className="flex flex-col gap-3 flex-1 relative z-10">
        {item.reps.map((rep, idx) => (
          <div 
            key={idx} 
            className="flex items-center justify-between gap-2 p-1.5 sm:p-2 rounded bg-white/[0.01] hover:bg-white/[0.02] border border-transparent hover:border-white/[0.03] transition-all duration-300"
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-6 h-6 rounded-full bg-[rgba(201,168,76,0.08)] border border-[rgba(201,168,76,0.15)] flex items-center justify-center shrink-0">
                <i className="ri-user-line text-[10px] text-[var(--color-gold)]" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-mono text-[7px] uppercase tracking-[1px] text-white/30 leading-none mb-0.5">
                  Representative {item.reps.length > 1 ? idx + 1 : ''}
                </span>
                <span className="font-display text-xs md:text-sm font-semibold text-white tracking-[0.5px] truncate">
                  {rep.name}
                </span>
              </div>
            </div>

            {/* Premium Sleek Icon Toolbar */}
            <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
              {/* Copy Name Button */}
              <button
                onClick={() => handleCopy(rep.name)}
                title="Copy Name"
                className="w-7 h-7 rounded-full bg-black/40 border border-white/5 hover:border-[var(--color-gold)]/50 text-white/40 hover:text-[var(--color-gold)] flex items-center justify-center cursor-pointer transition-all duration-300 p-0 relative group/btn"
              >
                {copiedRep === rep.name ? (
                  <i className="ri-checkbox-circle-fill text-[11px] text-[#25D366] animate-bounce" />
                ) : (
                  <i className="ri-file-copy-line text-[11px]" />
                )}
                <span className="absolute bottom-[calc(100%+6px)] left-1/2 -translate-x-1/2 bg-[#0d0707] text-[8px] font-mono tracking-[1px] text-white py-1 px-2 rounded opacity-0 group-hover/btn:opacity-100 pointer-events-none transition-opacity duration-300 whitespace-nowrap border border-border/80 shadow-[0_4px_10px_rgba(0,0,0,0.5)] z-[50]">
                  {copiedRep === rep.name ? 'Copied!' : 'Copy Name'}
                </span>
              </button>

              {/* Contact / Whatsapp Button */}
              {rep.whatsapp && (
                <a
                  href={`https://wa.me/91${rep.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="WhatsApp Representative"
                  className="w-7 h-7 rounded-full bg-black/40 border border-white/5 hover:border-[#25D366]/50 text-white/40 hover:text-[#25D366] flex items-center justify-center cursor-pointer transition-all duration-300 p-0 relative group/btn"
                >
                  <i className="ri-whatsapp-line text-[11px]" />
                  <span className="absolute bottom-[calc(100%+6px)] left-1/2 -translate-x-1/2 bg-[#0d0707] text-[8px] font-mono tracking-[1px] text-white py-1 px-2 rounded opacity-0 group-hover/btn:opacity-100 pointer-events-none transition-opacity duration-300 whitespace-nowrap border border-border/80 shadow-[0_4px_10px_rgba(0,0,0,0.5)] z-[50]">
                    WhatsApp
                  </span>
                </a>
              )}

              {/* Contact / Phone Call Button */}
              {rep.whatsapp && (
                <a
                  href={`tel:${rep.whatsapp}`}
                  title="Call Representative"
                  className="w-7 h-7 rounded-full bg-black/40 border border-white/5 hover:border-[var(--color-gold)]/50 text-white/40 hover:text-[var(--color-gold)] flex items-center justify-center cursor-pointer transition-all duration-300 p-0 relative group/btn"
                >
                  <i className="ri-phone-line text-[11px]" />
                  <span className="absolute bottom-[calc(100%+6px)] left-1/2 -translate-x-1/2 bg-[#0d0707] text-[8px] font-mono tracking-[1px] text-white py-1 px-2 rounded opacity-0 group-hover/btn:opacity-100 pointer-events-none transition-opacity duration-300 whitespace-nowrap border border-border/80 shadow-[0_4px_10px_rgba(0,0,0,0.5)] z-[50]">
                    Call
                  </span>
                </a>
              )}

              {/* Email Button */}
              {rep.email && (
                <a
                  href={`mailto:${rep.email}`}
                  title="Email Representative"
                  className="w-7 h-7 rounded-full bg-black/40 border border-white/5 hover:border-[var(--color-gold)]/50 text-white/40 hover:text-[var(--color-gold)] flex items-center justify-center cursor-pointer transition-all duration-300 p-0 relative group/btn"
                >
                  <i className="ri-mail-line text-[11px]" />
                  <span className="absolute bottom-[calc(100%+6px)] left-1/2 -translate-x-1/2 bg-[#0d0707] text-[8px] font-mono tracking-[1px] text-white py-1 px-2 rounded opacity-0 group-hover/btn:opacity-100 pointer-events-none transition-opacity duration-300 whitespace-nowrap border border-border/80 shadow-[0_4px_10px_rgba(0,0,0,0.5)] z-[50]">
                    Email
                  </span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Representatives() {
  const headerRef = useScrollReveal();
  const searchSectionRef = useScrollReveal();
  const dropdownRef = useRef(null);
  
  const [repsData, setRepsData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  
  // Autocomplete suggestions
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdnXnSzhdwtj_7limcEhTA6AxYp-XVjqCOUgUL882DRgoF68A/viewform?usp=dialog";



  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Load dynamic representatives list on mount
  useEffect(() => {
    let isMounted = true;
    async function loadRepresentatives() {
      setLoading(true);
      const data = await getLiveRepresentatives();
      if (isMounted) {
        setRepsData(data);
        setFilteredData(data);
        setLoading(false);
      }
    }
    loadRepresentatives();
    return () => { isMounted = false; };
  }, []);

  // Filter representatives list and build autocomplete suggestions
  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredData(repsData);
      setSuggestions([]);
    } else {
      const query = searchQuery.toLowerCase().trim();
      
      // Main filter
      const filtered = repsData.filter(item => 
        item.college.toLowerCase().includes(query) ||
        item.reps.some(rep => rep.name.toLowerCase().includes(query))
      );
      setFilteredData(filtered);

      // Suggestions builder (Max 5 items)
      const matches = repsData
        .filter(item => item.college.toLowerCase().includes(query))
        .map(item => item.college)
        .slice(0, 5);
      setSuggestions(matches);
    }
  }, [searchQuery, repsData]);



  return (
    <div className="min-h-screen bg-bg pt-32 pb-24 relative overflow-hidden noise-overlay">
      {/* Atmosphere Glow & Scanlines */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(ellipse_at_top,rgba(139,0,0,0.45)_0%,transparent_70%)] animate-flame" />
        <div className="absolute top-1/2 left-0 w-[450px] h-[600px] -translate-y-1/2 bg-[radial-gradient(ellipse_at_left,rgba(201,168,76,0.12)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_60%,rgba(201,168,76,0.06),transparent_70%)] pointer-events-none z-0" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100%_38px] opacity-20" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Top Header Row with Back Link & Register Shortcut */}
        <div className="mb-8 flex items-center justify-between flex-wrap gap-4">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-[var(--color-gold)]/70 hover:text-[var(--color-gold)] transition-colors font-mono text-[10px] tracking-[3px] uppercase group cursor-pointer"
          >
            <i className="ri-arrow-left-line text-sm transition-transform group-hover:-translate-x-1"></i> Back to Home
          </Link>
          
          <a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/55 hover:text-[var(--color-gold)] transition-all font-mono text-[9px] tracking-[2px] uppercase group cursor-pointer"
          >
            <i className="ri-add-circle-line text-sm text-[var(--color-gold)] group-hover:scale-110 transition-transform" /> Register as Rep
          </a>
        </div>
        
        {/* Main Header Section */}
        <div className="text-center mb-12 w-full px-2" ref={headerRef}>
          <span className="font-mono text-[10px] tracking-[5px] text-white/50 uppercase block mb-3">
            Official Points of Contact
          </span>
          <h1 className="font-display text-[clamp(1.75rem,5.5vw,4rem)] font-bold uppercase tracking-[-1.5px] leading-[1.1] drop-shadow-[0_0_15px_rgba(201,168,76,0.2)] flex flex-col md:block items-center">
            <span className="text-white">Find Your College</span> 
            <span className="text-[var(--color-gold)] md:ml-4">Representative</span>
          </h1>
          
          {/* Diamond Divider */}
          <div className="flex items-center justify-center mt-6">
            <div className="h-[1px] bg-[var(--color-gold)]/40 w-16"></div>
            <div className="w-2.5 h-2.5 rotate-45 bg-[var(--color-gold)] mx-4 shadow-[0_0_8px_rgba(201,168,76,0.8)]"></div>
            <div className="h-[1px] bg-[var(--color-gold)]/40 w-16"></div>
          </div>
        </div>

        {/* Search Bar & Auto-Complete suggestions */}
        <div className="max-w-[650px] mx-auto mb-16 px-2 text-center relative" ref={searchSectionRef}>
          <p className="text-[13px] text-text-muted font-body mb-6 leading-relaxed">
            Need to fill in your representative&apos;s name on the registration form? Type your college name below to find who is registered. You can directly coordinate with them!
          </p>

          <div className="relative group" ref={dropdownRef}>
            {/* Input border glowing sweep */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[rgba(201,168,76,0.35)] to-[rgba(139,0,0,0.45)] rounded-xl blur opacity-30 group-hover:opacity-75 transition duration-500" />
            
            <div className="relative flex items-center">
              <i className="ri-search-2-line absolute left-5 text-xl text-white/40 group-focus-within:text-[var(--color-gold)] transition-colors duration-300" />
              <input
                type="text"
                placeholder="Type your college name (e.g. Netaji Subhash)..."
                value={searchQuery}
                onFocus={() => setShowSuggestions(true)}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowSuggestions(true);
                }}
                className="w-full bg-[#0d0707] border border-border/80 focus:border-[var(--color-gold)]/80 text-white placeholder-white/30 text-sm md:text-base rounded-xl py-4 pl-14 pr-12 outline-none transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.5)] focus:shadow-[0_0_20px_rgba(201,168,76,0.12)]"
              />
              {searchQuery && (
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setShowSuggestions(false);
                  }}
                  className="absolute right-5 text-white/40 hover:text-white bg-transparent border-none cursor-pointer p-1"
                >
                  <i className="ri-close-line text-lg" />
                </button>
              )}
            </div>

            {/* Autocomplete Dropdown List */}
            {showSuggestions && searchQuery.trim() && (
              <div className="absolute top-[calc(100%+8px)] left-0 w-full bg-[#0d0707] border border-border-hover/80 rounded-xl shadow-[0_16px_40px_rgba(0,0,0,0.85)] z-[1000] overflow-hidden text-left origin-top transition-all duration-300">
                
                {/* Scrollable list */}
                <div className="flex flex-col max-h-[220px] overflow-y-auto">
                  {suggestions.length > 0 ? (
                    suggestions.map((college, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setSearchQuery(college);
                          setShowSuggestions(false);
                        }}
                        className="w-full py-3 px-5 text-left text-xs font-mono tracking-[0.5px] text-white/80 hover:text-[var(--color-gold)] hover:bg-white/[0.02] border-b border-border/30 transition-colors bg-transparent border-none cursor-pointer flex items-center justify-between"
                      >
                        <span>{college}</span>
                        <i className="ri-arrow-right-s-line text-white/30" />
                      </button>
                    ))
                  ) : (
                    <div className="py-4 px-5 text-xs text-text-dim font-mono italic">
                      No matching colleges found in roster.
                    </div>
                  )}
                </div>

                {/* Footer Link in Dropdown */}
                <div className="bg-surface/80 border-t border-border/40 py-2.5 px-5 flex items-center justify-between">
                  <span className="text-[9px] text-white/40 font-mono tracking-[1.5px] uppercase">College not listed?</span>
                  <a
                    href={FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setShowSuggestions(false)}
                    className="text-[9px] font-mono text-[var(--color-gold)] hover:text-white uppercase tracking-[1.5px] font-bold flex items-center gap-1 transition-all cursor-pointer"
                  >
                    Register College <i className="ri-add-line" />
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Stats Roster */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-4 px-2 font-mono text-[9px] tracking-[2px] uppercase text-white/40">
            <span>Roster Status: <span className="text-[#25D366] font-bold shadow-[0_0_10px_rgba(37,211,102,0.2)]">Live &amp; Auto-Syncing</span></span>
            <span>Colleges Listed: <span className="text-white font-bold">{repsData.length}</span></span>
          </div>
        </div>

        {/* Loading Roster */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="preloader-ring shadow-[0_0_15px_rgba(154,0,0,0.3)] mb-4" />
            <span className="font-mono text-[9px] tracking-[3px] text-[var(--color-gold)] uppercase animate-pulse">Syncing representative data...</span>
          </div>
        ) : (
          <>
            {/* Grid layout */}
            {filteredData.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative z-10 w-full">
                {filteredData.map((item, index) => (
                  <CollegeRepCard 
                    key={item.id} 
                    item={item} 
                    index={index} 
                  />
                ))}
              </div>
            ) : (
              /* Upgraded Glassmorphism Empty State */
              <div className="max-w-[700px] mx-auto bg-bg-card/45 border border-[rgba(201,168,76,0.2)] rounded-sm p-8 md:p-10 text-center shadow-[0_12px_50px_rgba(139,0,0,0.15)] relative z-10 stagger-reveal">
                {/* Accent top gradient */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent opacity-60" />
                
                <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-6 shadow-[0_0_20px_rgba(139,0,0,0.2)]">
                  <i className="ri-group-line text-3xl text-[var(--color-gold)] animate-pulse" />
                </div>
                
                <h3 className="font-display text-lg md:text-xl font-bold uppercase tracking-[1.5px] text-white mb-3">
                  College Not Registered Yet?
                </h3>
                
                <p className="text-[12px] md:text-sm text-text-muted font-body mb-8 leading-relaxed max-w-[500px] mx-auto">
                  We don&apos;t have an official Representative registered for <span className="text-[var(--color-gold)] font-bold italic font-mono">&ldquo;{searchQuery}&rdquo;</span> yet. 
                  Be the leader! Sign up as the first representative for your college to verify student IDs, coordinate group registrations, and unlock exciting perks.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href={FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="register-btn flex items-center justify-center gap-2 text-[10px] font-semibold tracking-[3px] uppercase py-3.5 px-8 cursor-pointer font-mono rounded-full w-full sm:w-auto text-center"
                  >
                    Be The Representative
                  </a>
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="text-[10px] tracking-[2px] uppercase font-mono text-white/50 hover:text-white transition-colors bg-transparent border-none cursor-pointer py-2.5 px-5"
                    >
                      Clear Search &amp; View All
                    </button>
                  )}
                </div>
              </div>
            )}
          </>
        )}
      </div>



    </div>
  );
}
