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
    <section id="contact" className="relative py-24 bg-surface border-t border-border overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-accent/[0.03] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-orange/[0.04] blur-[80px] pointer-events-none" />

      <div className="relative max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20" ref={headerRef}>
          <span className="font-calligraphy text-2xl text-orange-light block mb-2">reach out</span>
          <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] font-bold text-white leading-tight tracking-[3px] uppercase">
            Get in <span className="text-accent">Touch</span>
          </h2>
          <div className="mt-4 mx-auto w-20 h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent" />
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16" ref={gridRef}>
          {contactCards.map((card, i) => (
            <div
              key={i}
              className="contact-card group relative bg-bg-card border border-border rounded-sm overflow-hidden transition-all duration-500 hover:border-border-hover hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(192,57,43,0.08)]"
            >
              {/* Top gradient bar */}
              <div className={`h-[2px] w-full bg-gradient-to-r ${card.accent} opacity-40 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="p-8">
                {/* Icon + Title */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full border border-border bg-surface text-orange-light text-lg group-hover:border-accent/40 group-hover:bg-accent/[0.06] transition-all duration-300">
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
                        className="text-sm text-text-muted font-body font-mono tracking-wider mt-1 sm:mt-0 transition-colors duration-300 hover:text-accent"
                      >
                        {c.phone}
                      </a>
                    </li>
                  ))}
                </ul>

                {/* Decorative corner */}
                <div className="absolute bottom-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute bottom-2 right-2 w-6 h-[1px] bg-accent/30" />
                  <div className="absolute bottom-2 right-2 w-[1px] h-6 bg-accent/30" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-center gap-6" ref={socialRef}>
          <span className="text-xs text-text-dim font-mono uppercase tracking-[4px]">Follow us</span>
          <div className="flex gap-4">
            {socials.map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="group/icon w-12 h-12 flex items-center justify-center border border-border rounded-full text-xl text-text-muted transition-all duration-300 hover:border-accent hover:text-accent hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(192,57,43,0.15)]"
              >
                <i className={social.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
