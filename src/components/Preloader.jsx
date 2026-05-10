import { useState, useEffect } from 'react';

export default function Preloader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-bg transition-all duration-600 ${
        hidden ? 'opacity-0 invisible pointer-events-none' : ''
      }`}
    >
      <div className="text-center">
        <div className="preloader-ring mx-auto mb-5"></div>
        <span className="font-display text-sm tracking-[6px] text-accent uppercase">
          Kalakriti&apos;26
        </span>
      </div>
    </div>
  );
}
