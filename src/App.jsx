import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import Home from './pages/Home';
import EventDetails from './pages/EventDetails';

export default function App() {
  return (
    <BrowserRouter>
      <Preloader />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events/:eventName" element={<EventDetails />} />
      </Routes>
      <Footer />
      <BackToTop />
    </BrowserRouter>
  );
}
