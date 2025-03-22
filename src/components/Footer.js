import React from 'react';
import { Link } from 'react-router-dom';

function Footer({ language = 'Français' }) {
  const translations = {
    Français: {
      address: 'Notre Adresse',
      street: '123 Rue du Centre',
      city: 'Rabat, Maroc',
      quickLinks: 'Liens Rapides',
      home: 'Accueil',
      courses: 'Cours',
      about: 'À propos',
      contact: 'Contact',
      followUs: 'Suivez-nous',
      rights: 'Tous droits réservés.',
      powered: 'Powered by Le Professeur Academy'
    },
    Anglais: {
      address: 'Our Address',
      street: '123 Center Street',
      city: 'Rabat, Morocco',
      quickLinks: 'Quick Links',
      home: 'Home',
      courses: 'Courses',
      about: 'About',
      contact: 'Contact',
      followUs: 'Follow us',
      rights: 'All rights reserved.',
      powered: 'Powered by Le Professeur Academy'
    },
    Arabe: {
      address: 'عنواننا',
      street: '123 شارع المركز',
      city: 'الرباط، المغرب',
      quickLinks: 'روابط سريعة',
      home: 'الرئيسية',
      courses: 'الدورات',
      about: 'معلومات عنا',
      contact: 'اتصل بنا',
      followUs: 'تابعنا',
      rights: 'جميع الحقوق محفوظة.',
      powered: 'البروفيسور أكاديمي'
    }
  };

  const t = translations[language];

  return (
    <footer style={{ backgroundColor: '#0033cc', color: 'white' }} className="pt-5 pb-3 mt-5">
      <div className="container">

        <div className="row text-center text-md-start">

          {/* Section Adresse */}
          <div className="col-md-4 mb-4">
            <h5>{t.address}</h5>
            <p className="mt-3">
              {t.street}<br />
              {t.city}
            </p>
          </div>

          {/* Section Liens Rapides */}
          <div className="col-md-4 mb-4">
            <h5>{t.quickLinks}</h5>
            <div className="mt-3 d-flex flex-column">
              <Link to="/" className="text-white mb-2 text-decoration-none">{t.home}</Link>
              <Link to="/courses" className="text-white mb-2 text-decoration-none">{t.courses}</Link>
              <Link to="/about" className="text-white mb-2 text-decoration-none">{t.about}</Link>
              <Link to="/contact" className="text-white mb-2 text-decoration-none">{t.contact}</Link>
            </div>
          </div>

          {/* Section Réseaux Sociaux */}
          <div className="col-md-4 mb-4 text-center text-md-start">
            <h5>{t.followUs}</h5>
            <div className="mt-3">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-white mx-2 fs-4">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-white mx-2 fs-4">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-white mx-2 fs-4">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-white mx-2 fs-4">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

        </div>

        {/* Bas du Footer */}
        <div className="d-flex justify-content-between mt-4 flex-column flex-md-row text-center text-md-start">
          <div className="small">
            &copy; {new Date().getFullYear()} Le Professeur Academy. {t.rights}
          </div>
          <div className="small">
            {t.powered}
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
