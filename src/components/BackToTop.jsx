import { useState, useEffect } from 'react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      className={`fixed bottom-8 right-8 w-11 h-11 flex items-center justify-center bg-bg-card border border-border text-accent text-lg z-[99] cursor-pointer transition-all duration-300 hover:border-accent hover:bg-accent hover:text-bg ${
        visible ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2.5'
      }`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
    >
      <i className="ri-arrow-up-line"></i>
    </button>
  );
}
