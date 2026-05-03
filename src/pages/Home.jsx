import Hero from '../components/Hero';
import About from '../components/About';
import Schedule from '../components/Schedule';
import Events from '../components/Events';
import Contact from '../components/Contact';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        const el = document.getElementById(id);
        if (el) {
          window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <Hero />
      <About />
      <Schedule />
      <Events />
      <Contact />
    </>
  );
}
