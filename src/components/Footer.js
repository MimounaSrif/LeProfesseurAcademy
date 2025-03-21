import React from 'react';

function Footer() {
  return (
    <footer className="py-3 mt-5" style={{ backgroundColor: '#0033cc', color: 'white' }}>
      <div className="container text-center">
        &copy; {new Date().getFullYear()} Le Professeur Academy. Tous droits réservés.
      </div>
    </footer>
  );
}

export default Footer;
