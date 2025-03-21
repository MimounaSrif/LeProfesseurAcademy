import React from 'react';
import logo from '../assets/professeur.jpg';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Partie principale : Logo + Texte */}
      <div 
        className="container-fluid d-flex align-items-center justify-content-center" 
        style={{ minHeight: '80vh' }}
      >
        <div className="row w-100">
          {/* Colonne gauche avec logo en background */}
          <div
            className="col-md-6 d-none d-md-block"
            style={{
              backgroundImage: `url(${logo})`,
              backgroundSize: '75%',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center left',
              minHeight: '80vh'
            }}
          ></div>

          {/* Colonne droite avec texte */}
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-start p-5">
            <h1 className="display-4 mb-4">Bienvenue sur <br /> <strong>Le Professeur Academy !</strong></h1>
            <p className="lead">Apprenez les langues avec les meilleurs professeurs.</p>
            <Link to="/courses" className="btn btn-primary mt-3 rounded-pill">Voir nos cours</Link>
          </div>
        </div>
      </div>

      {/* Section Activités */}
      <section className="container py-5 text-center">
        <h2 className="mb-4">Nos Activités</h2>
        <div className="row">
          <div className="col-md-4 mb-3">
            <i className="bi bi-book-half display-4 text-primary"></i>
            <h5 className="mt-3">Cours de langues</h5>
            <p>Des cours pour tous les niveaux : débutants à avancés.</p>
          </div>
          <div className="col-md-4 mb-3">
            <i className="bi bi-people-fill display-4 text-success"></i>
            <h5 className="mt-3">Clubs et Ateliers</h5>
            <p>Clubs de conversation, ateliers de grammaire et activités culturelles.</p>
          </div>
          <div className="col-md-4 mb-3">
            <i className="bi bi-award-fill display-4 text-warning"></i>
            <h5 className="mt-3">Certifications</h5>
            <p>Obtenez des certifications reconnues après chaque cycle.</p>
          </div>
        </div>
      </section>

      {/* Section Groupes Gradués */}
      <section className="bg-light py-5 text-center">
        <h2 className="mb-4">Nos Groupes Gradués</h2>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-3 mb-3">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Promotion 2022</h5>
                  <p className="card-text">50 étudiants diplômés</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Promotion 2023</h5>
                  <p className="card-text">60 étudiants diplômés</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Promotion 2024</h5>
                  <p className="card-text">70 étudiants diplômés</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
