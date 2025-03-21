import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#0033cc', color: 'white' }} className="pt-5 pb-3 mt-5">
      <div className="container">

        <div className="row text-center text-md-start">

          {/* Section Adresse */}
          <div className="col-md-4 mb-4">
            <h5>Notre Adresse</h5>
            <p className="mt-3">
              123 Rue du Centre<br />
              Rabat, Maroc
            </p>
          </div>

          {/* Section Liens Rapides */}
          <div className="col-md-4 mb-4">
            <h5>Liens Rapides</h5>
            <div className="mt-3 d-flex flex-column">
              <Link to="/" className="text-white mb-2 text-decoration-none">Accueil</Link>
              <Link to="/courses" className="text-white mb-2 text-decoration-none">Cours</Link>
              <Link to="/about" className="text-white mb-2 text-decoration-none">À propos</Link>
              <Link to="/contact" className="text-white mb-2 text-decoration-none">Contact</Link>
            </div>
          </div>

          {/* Section Réseaux Sociaux */}
          <div className="col-md-4 mb-4 text-center text-md-start">
            <h5>Suivez-nous</h5>
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
            &copy; {new Date().getFullYear()} Le Professeur Academy. Tous droits réservés.
          </div>
          <div className="small">
            Powered by Le Professeur Academy
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
