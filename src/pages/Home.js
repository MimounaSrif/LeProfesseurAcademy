import React from 'react';
import logo from '../assets/professeur.jpg';

function Home() {
  return (
    <div className="container-fluid d-flex align-items-center justify-content-center" style={{ minHeight: '100vh', paddingTop: '80px' }}>
      <div className="row w-100">
        {/* Colonne gauche avec logo en background */}
        <div
          className="col-md-6 d-none d-md-block"
          style={{
            backgroundImage: `url(${logo})`,
            backgroundSize: '75%', // Taille ajustée (agrandie par rapport à 50%)
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center left',
            minHeight: '80vh'
          }}
        >
        </div>

        {/* Colonne droite avec texte */}
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-start p-5">
          <h1 className="display-4 mb-4">Bienvenue sur <br /> <strong>Le Professeur Academy !</strong></h1>
          <p className="lead">Apprenez les langues avec les meilleurs professeurs.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
