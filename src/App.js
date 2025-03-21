import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import Courses from './pages/Courses';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Footer from './components/Footer'; // si Footer présent

function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-5 pb-5"> {/* Pour éviter que le contenu soit caché */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
