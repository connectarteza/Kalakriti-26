import { useScrollReveal } from '../hooks/useScrollReveal';

const contactCards = [
  {
    icon: 'ri-user-star-line',
    title: 'General Convenors',
    accent: 'from-orange-light to-orange',
    contacts: [
      { name: 'Srija Banerjee', phone: '+91 94348 77001' },
      { name: 'Soham Debnath', phone: '+91 74399 63731' },
    ],
  },
  {
    icon: 'ri-calendar-event-line',
    title: 'Event Coordinators',
    accent: 'from-accent to-accent-hover',
    contacts: [
      { name: 'SK Ikbal Hossain', phone: '+91 73843 98982' },
      { name: 'Piyush Dawn', phone: '+91 82504 66681' },
    ],
  },
  {
    icon: 'ri-money-dollar-circle-line',
    title: 'Finance Convenors',
    accent: 'from-cream to-orange-light',
    contacts: [
      { name: 'Abhishi Das', phone: '+91 81006 73159' },
    ],
  },
];

const socials = [
  { icon: 'ri-instagram-line', label: 'Instagram', href: 'https://www.instagram.com/kalakriti_festival/' },
  { icon: 'ri-facebook-circle-line', label: 'Facebook', href: 'https://www.facebook.com/artezamsit1/' },
  { icon: 'ri-youtube-line', label: 'YouTube', href: 'https://www.youtube.com/@arteza_msit' },
  { icon: 'ri-linkedin-box-line', label: 'LinkedIn', href: 'https://www.linkedin.com/company/106442472/' },
];

export default function Contact() {
  const headerRef = useScrollReveal();
  const gridRef = useScrollReveal();
  const socialRef = useScrollReveal();

  return (
    <section id="contact" className="contact-section relative py-24 border-t border-border overflow-hidden bg-bg">
      {/* Decorative background elements matching Events section */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(ellipse_at_top,rgba(139,0,0,0.60)_0%,transparent_70%)]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(ellipse_at_bottom,rgba(139,0,0,0.55)_0%,transparent_70%)]" />
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-full bg-[radial-gradient(ellipse_at_left,rgba(201,168,76,0.05)_0%,transparent_60%)]" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-full bg-[radial-gradient(ellipse_at_right,rgba(139,0,0,0.15)_0%,transparent_60%)]" />
      </div>
      {/* Scanline texture */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-30 mix-blend-overlay" style={{ background: 'repeating-linear-gradient(transparent, transparent 37px, rgba(255,255,255,0.03) 38px)' }}></div>

      <div className="relative max-w-[1200px] mx-auto px-6 z-10">
        {/* Header */}
        <div className="text-center mb-20" ref={headerRef}>
          <div className="flex items-center justify-center mb-6">
            <div className="h-[1px] bg-[var(--color-gold)]/30 w-12"></div>
            <div className="w-1.5 h-1.5 rotate-45 bg-[var(--color-gold)] mx-3"></div>
            <div className="h-[1px] bg-[var(--color-gold)]/30 w-12"></div>
          </div>
          <h2 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-bold text-white leading-tight tracking-[-1px] uppercase">
            Get in Touch
          </h2>
          <div className="flex items-center justify-center mt-6">
            <div className="h-[1px] bg-[var(--color-gold)]/30 w-16"></div>
            <div className="w-2 h-2 rotate-45 bg-[var(--color-gold)] mx-3"></div>
            <div className="h-[1px] bg-[var(--color-gold)]/30 w-16"></div>
          </div>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16" ref={gridRef}>
          {contactCards.map((card, i) => (
            <div
              key={i}
              className={`contact-card group relative bg-[#080606] border ${i === 1 ? 'border-[var(--color-gold)]/30 hover:border-[var(--color-gold)]/60 hover:shadow-[0_8px_40px_rgba(201,168,76,0.15)]' : 'border-border hover:border-border-hover hover:shadow-[0_8px_40px_rgba(192,57,43,0.08)]'} rounded-sm overflow-hidden transition-all duration-500 hover:-translate-y-1`}
            >
              {/* Top gradient bar */}
              <div className={`h-[2px] w-full bg-gradient-to-r ${i === 1 ? 'from-[var(--color-gold)] to-yellow-600' : card.accent} opacity-40 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Watermark */}
              <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[12rem] font-bold opacity-[0.02] group-hover:opacity-[0.06] pointer-events-none transition-all duration-500 z-0 ${i === 1 ? 'text-[var(--color-gold)]' : 'text-accent'}`}>
                {['I', 'II', 'III'][i]}
              </div>

              <div className="p-8 relative z-10">
                {/* Icon + Title */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 flex items-center justify-center rounded-full border border-border bg-surface text-lg transition-all duration-300 ${i === 1 ? 'text-[var(--color-gold)] group-hover:border-[var(--color-gold)]/40 group-hover:bg-[var(--color-gold)]/[0.06]' : 'text-orange-light group-hover:border-accent/40 group-hover:bg-accent/[0.06]'}`}>
                    <i className={card.icon} />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-white tracking-wide">
                    {card.title}
                  </h3>
                </div>

                {/* Contact list */}
                <ul className="space-y-0">
                  {card.contacts.map((c, j) => (
                    <li
                      key={j}
                      className={`flex flex-col sm:flex-row sm:items-center sm:justify-between py-3 ${j < card.contacts.length - 1 ? 'border-b border-border/60' : ''}`}
                    >
                      <span className="text-sm text-text font-body font-medium tracking-wide">{c.name}</span>
                      <a
                        href={`tel:${c.phone.replace(/\s/g, '')}`}
                        className={`text-sm font-body font-mono tracking-wider mt-1 sm:mt-0 transition-colors duration-300 flex items-center ${i === 1 ? 'text-text-muted hover:text-[var(--color-gold)]' : 'text-text-muted hover:text-accent'}`}
                      >
                        <i className={`ri-phone-line mr-2 opacity-70 ${i === 1 ? 'text-[var(--color-gold)]' : 'text-accent'}`} />
                        {c.phone}
                      </a>
                    </li>
                  ))}
                </ul>

                {/* Decorative corner */}
                <div className="absolute bottom-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className={`absolute bottom-2 right-2 w-6 h-[1px] ${i === 1 ? 'bg-[var(--color-gold)]/30' : 'bg-accent/30'}`} />
                  <div className={`absolute bottom-2 right-2 w-[1px] h-6 ${i === 1 ? 'bg-[var(--color-gold)]/30' : 'bg-accent/30'}`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-center gap-6 group" ref={socialRef}>
          <div className="flex items-center gap-4 mb-2">
            <div className="h-[1px] bg-[var(--color-gold)]/30 w-12 transition-all duration-500 group-hover:w-20 group-hover:bg-[var(--color-gold)]" />
            <span className="text-xs text-text-dim font-mono uppercase tracking-[4px] transition-colors duration-500 group-hover:text-[var(--color-gold)]">Follow Us</span>
            <div className="h-[1px] bg-[var(--color-gold)]/30 w-12 transition-all duration-500 group-hover:w-20 group-hover:bg-[var(--color-gold)]" />
          </div>
          <div className="flex gap-4">
            {socials.map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="group/icon relative w-12 h-12 flex items-center justify-center border border-border rounded-none text-xl text-text-muted transition-all duration-300 hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] hover:-translate-y-1 overflow-hidden"
              >
                {/* Radial Glow inside square */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-gold)_0%,transparent_70%)] opacity-0 group-hover/icon:opacity-15 transition-opacity duration-300 pointer-events-none" />
                <i className={`${social.icon} relative z-10`} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
