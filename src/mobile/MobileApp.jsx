import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Preloader from '../components/Preloader';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import Home from '../pages/Home';
import EventDetails from '../pages/EventDetails';
import OrganisingCommittee from '../pages/OrganisingCommittee';
import './mobile.css';

export default function MobileApp() {
  if (window.location.pathname === '/') {
    window.location.replace('kalakriti-26/');
    return null;
  }

  return (
    <div className="mobile-view-wrapper">
      <BrowserRouter basename="kalakriti-26/">
        <Preloader />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="events/:eventName/" element={<EventDetails />} />
          <Route path="organising-committee/" element={<OrganisingCommittee />} />
        </Routes>
        <Footer />
        <BackToTop />
      </BrowserRouter>
    </div>
  );
}
