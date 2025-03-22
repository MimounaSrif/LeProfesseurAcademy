import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Courses from './pages/Courses';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Footer from './components/Footer';

function App() {
  const [language, setLanguage] = useState('Français'); // 1️⃣ État global de la langue

  return (
    <Router>
      {/* 2️⃣ Passer language et setLanguage à Navbar */}
      <Navbar language={language} setLanguage={setLanguage} />
      <div className="pt-5 pb-5">
        <Routes>
          {/* 3️⃣ Passer la langue aux pages */}
          <Route path="/" element={<Home language={language} />} />
          <Route path="/courses" element={<Courses language={language} />} />
          <Route path="/about" element={<About language={language} />} />
          <Route path="/contact" element={<Contact language={language} />} />
          <Route path="/faq" element={<FAQ language={language} />} />
          <Route path="/signup" element={<Signup language={language} />} />
          <Route path="/login" element={<Login language={language} />} />
        </Routes>
      </div>
      <Footer language={language} />
    </Router>
  );
}

export default App;
