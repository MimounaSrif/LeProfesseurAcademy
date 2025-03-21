import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/professeur.jpg';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Section Présentation Logo + Texte */}
      <div className="container-fluid d-flex align-items-center justify-content-center" style={{ minHeight: '70vh' }}>
        <div className="row w-100">
          {/* Logo à gauche */}
          <div
            className="col-md-6 d-none d-md-block"
            style={{
              backgroundImage: `url(${logo})`,
              backgroundSize: '60%',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center left',
              minHeight: '70vh'
            }}
          ></div>

          {/* Texte à droite */}
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-start p-5">
            <h2 className="mb-4">Bienvenue à Le Professeur Academy !</h2>
            <p>Connectez-vous pour accéder à nos cours et ressources.</p>
            <p>Nous sommes ravis de vous revoir parmi nos apprenants.</p>
          </div>
        </div>
      </div>

      {/* Formulaire de connexion */}
      <div className="container my-5">
        <h3 className="text-center mb-4">Se connecter</h3>
        <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '600px' }}>
          
          {/* Email */}
          <div className="mb-4">
            <label className="form-label mb-2">
              <i className="bi bi-envelope-fill me-2 text-primary"></i> Adresse Email
            </label>
            <input 
              type="email" 
              className="form-control rounded-pill shadow-sm py-2" 
              name="email" 
              required 
              onChange={handleChange} 
            />
          </div>

          {/* Mot de passe */}
          <div className="mb-4">
            <label className="form-label mb-2">
              <i className="bi bi-lock-fill me-2 text-primary"></i> Mot de passe
            </label>
            <div className="input-group">
              <input 
                type={showPassword ? "text" : "password"} 
                className="form-control rounded-start-pill shadow-sm py-2" 
                name="password" 
                required 
                onChange={handleChange} 
              />
              <button 
                type="button"
                className="btn btn-outline-secondary rounded-end-pill"
                style={{ padding: '0.375rem 0.75rem', display: 'flex', alignItems: 'center' }}
                onClick={() => setShowPassword(!showPassword)}
              >
                <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
              </button>
            </div>
          </div>

          <div className="mb-3 text-end">
            <Link to="/forgot-password" className="small">Mot de passe oublié ?</Link>
          </div>
          <button type="submit" className="btn btn-primary w-100 rounded-pill shadow-sm">Se connecter</button>
        </form>

        <div className="text-center mt-3">
          <small>Vous n'avez pas de compte ? <Link to="/signup">S'inscrire</Link></small>
        </div>
      </div>
    </div>
  );
}

export default Login;
