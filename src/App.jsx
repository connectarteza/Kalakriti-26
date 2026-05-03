import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Schedule from './components/Schedule';
import Events from './components/Events';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function App() {
  return (
    <>
      <Preloader />
      <Navbar />
      <Hero />
      <About />
      <Schedule />
      <Events />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
}
