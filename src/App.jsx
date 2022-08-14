import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Archive from './components/Archive';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PageNotFound from './components/PageNotFound';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router basename="/">
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
