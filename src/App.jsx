import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import Home from './pages/Home';
import EventDetails from './pages/EventDetails';
import OrganisingCommittee from './pages/OrganisingCommittee';

export default function App() {
  if (window.location.pathname === '/') {
    window.location.replace('/kalakriti-26/');
    return null;
  }

  return (
    <BrowserRouter basename="/kalakriti-26">
      <Preloader />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events/:eventName" element={<EventDetails />} />
        <Route path="/organising-committee" element={<OrganisingCommittee />} />
      </Routes>
      <Footer />
      <BackToTop />
    </BrowserRouter>
  );
}
