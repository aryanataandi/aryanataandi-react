import { useEffect } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Archive from './pages/Archive';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      offset: 240,
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <div className="my-container px-2">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/archive" element={<Archive />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
