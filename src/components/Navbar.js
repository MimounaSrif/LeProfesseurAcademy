import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/professeur.jpg';

function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [language, setLanguage] = useState('Français');
  const [direction, setDirection] = useState('ltr');

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    if (lang === 'Arabe') {
      setDirection('rtl');
    } else {
      setDirection('ltr');
    }
  };

  useEffect(() => {
    document.documentElement.dir = direction;
  }, [direction]);

  const navLinks = {
    Français: {
      home: 'Accueil',
      courses: 'Cours',
      about: 'À propos',
      contact: 'Contact',
      faq: 'FAQ',
      signup: "S'inscrire",
      login: 'Se connecter'
    },
    Anglais: {
      home: 'Home',
      courses: 'Courses',
      about: 'About',
      contact: 'Contact',
      faq: 'FAQ',
      signup: 'Sign In',
      login: 'Log In'
    },
    Arabe: {
      home: 'الرئيسية',
      courses: 'الدورات',
      about: 'معلومات عنا',
      contact: 'اتصل بنا',
      faq: 'الأسئلة الشائعة',
      signup: 'تسجيل',
      login: 'تسجيل الدخول'
    }
  };

  const currentLinks = navLinks[language];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ backgroundColor: '#0033cc' }}>
      <div className="container">
        {/* Logo + Texte */}
        <Link 
          className={`navbar-brand d-flex flex-column align-items-center ${direction === 'rtl' ? 'ms-3' : 'me-3'}`} 
          to="/"
        >
          <img 
            src={logo} 
            alt="Logo" 
            width="40" 
            height="40" 
            className="rounded-circle mb-1"
          />
          <span className="text-white small">
            {language === 'Arabe' 
              ? 'البروفيسور أكاديمي' 
              : (language === 'Anglais' 
                  ? 'The Professor Academy' 
                  : 'Le Professeur Academy')}
          </span>
        </Link>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse justify-content-end ${!isCollapsed ? 'show' : ''}`}>
          <ul className="navbar-nav me-3">
            {/* Liens dynamiques */}
            {[
              { path: "/", label: currentLinks.home },
              { path: "/courses", label: currentLinks.courses },
              { path: "/about", label: currentLinks.about },
              { path: "/contact", label: currentLinks.contact },
              { path: "/faq", label: currentLinks.faq }
            ].map((link, index) => (
              <li key={index} className="nav-item mx-1">
                <Link
                  className="nav-link px-2 py-2 rounded-pill text-center"
                  to={link.path}
                  style={{ transition: '0.3s', minWidth: '100px' }}
                  onMouseEnter={e => e.target.classList.add('bg-danger', 'text-white')}
                  onMouseLeave={e => e.target.classList.remove('bg-danger', 'text-white')}
                >
                  {link.label}
                </Link>
              </li>
            ))}

            {/* Dropdown Langue */}
            <li className="nav-item dropdown mx-1">
              <button 
                className="nav-link bg-transparent border-0 text-white d-flex align-items-center"
                style={{ minWidth: '100px' }}
                data-bs-toggle="dropdown"
              >
                {language === 'Arabe' ? 'العربية' : (language === 'Anglais' ? 'English' : 'Français')} 
                <span className="ms-1">&#x25BC;</span>
              </button>
              <ul className="dropdown-menu">
                <li><button className="dropdown-item" onClick={() => handleLanguageChange('Français')}>Français</button></li>
                <li><button className="dropdown-item" onClick={() => handleLanguageChange('Anglais')}>English</button></li>
                <li><button className="dropdown-item" onClick={() => handleLanguageChange('Arabe')}>العربية</button></li>
              </ul>
            </li>
          </ul>

          {/* Boutons */}
          <div className="d-flex gap-2 my-3 my-lg-0">
            <Link
              to="/signup"
              className="btn btn-outline-light rounded-pill text-center"
              style={{ minWidth: '120px' }}
            >
              {currentLinks.signup}
            </Link>
            <Link
              to="/login"
              className="btn btn-danger rounded-pill text-center"
              style={{ minWidth: '120px' }}
            >
              {currentLinks.login}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
