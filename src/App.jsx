import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import Home from './pages/Home';
import EventDetails from './pages/EventDetails';
import OrganisingCommittee from './pages/OrganisingCommittee';
import Representatives from './pages/Representatives';

export default function App() {


  return (
    <BrowserRouter basename="kalakriti-26/">
      <Preloader />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="events/:eventName/" element={<EventDetails />} />
        <Route path="organising-committee/" element={<OrganisingCommittee />} />
        <Route path="representatives/" element={<Representatives />} />
      </Routes>
      <Footer />
      <BackToTop />
    </BrowserRouter>
  );
}
