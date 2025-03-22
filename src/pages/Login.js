import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import logo from '../assets/professeur.jpg';

function Login({ language = 'Français' }) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [showPassword, setShowPassword] = useState(false);

  const translations = {
    Français: {
      welcome: "Bienvenue à Le Professeur Academy !",
      desc1: "Connectez-vous pour accéder à nos cours et ressources.",
      desc2: "Nous sommes ravis de vous revoir parmi nos apprenants.",
      login: "Se connecter",
      email: "Adresse Email",
      password: "Mot de passe",
      forgotPassword: "Mot de passe oublié ?",
      noAccount: "Vous n'avez pas de compte ?",
      signup: "S'inscrire"
    },
    Anglais: {
      welcome: "Welcome to Le Professeur Academy!",
      desc1: "Log in to access our courses and resources.",
      desc2: "We are happy to see you back among our learners.",
      login: "Log In",
      email: "Email Address",
      password: "Password",
      forgotPassword: "Forgot password?",
      noAccount: "Don't have an account?",
      signup: "Sign Up"
    },
    Arabe: {
      welcome: "مرحبًا بكم في أكاديمية البروفيسور!",
      desc1: "سجّل الدخول للوصول إلى دوراتنا ومواردنا.",
      desc2: "نحن سعداء بعودتكم بين طلابنا.",
      login: "تسجيل الدخول",
      email: "البريد الإلكتروني",
      password: "كلمة المرور",
      forgotPassword: "هل نسيت كلمة المرور؟",
      noAccount: "ليس لديك حساب؟",
      signup: "التسجيل"
    }
  };

  const t = translations[language];

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
          <div className={`col-md-6 d-flex flex-column justify-content-center align-items-${language === 'Arabe' ? 'end' : 'start'} p-5`}>
            <h2 className="mb-4">{t.welcome}</h2>
            <p>{t.desc1}</p>
            <p>{t.desc2}</p>
          </div>
        </div>
      </div>

      {/* Formulaire de connexion */}
      <div className="container my-5">
        <h3 className="text-center mb-4">{t.login}</h3>
        <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '600px' }}>
          {/* Email */}
          <div className="mb-4">
            <label className="form-label mb-2">
              <i className="bi bi-envelope-fill me-2 text-primary"></i> {t.email}
            </label>
            <input
              type="email"
              className="form-control rounded-pill shadow-sm py-2"
              name="email"
              required
              onChange={handleChange}
              style={{ direction: language === 'Arabe' ? 'rtl' : 'ltr' }}
            />
          </div>

          {/* Mot de passe */}
          <div className="mb-4">
            <label className="form-label mb-2">
              <i className="bi bi-lock-fill me-2 text-primary"></i> {t.password}
            </label>
            <div className="position-relative">
              <input
                type={showPassword ? "text" : "password"}
                className="form-control rounded-pill shadow-sm py-2"
                name="password"
                required
                onChange={handleChange}
                style={{ direction: language === 'Arabe' ? 'rtl' : 'ltr', paddingRight: language === 'Arabe' ? '2.5rem' : '1rem', paddingLeft: language === 'Arabe' ? '1rem' : '2.5rem' }}
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  cursor: 'pointer',
                  [language === 'Arabe' ? 'left' : 'right']: '0.75rem',
                  color: '#6c757d'
                }}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          <div className="mb-3 text-end">
            <Link to="/forgot-password" className="small">{t.forgotPassword}</Link>
          </div>
          <button type="submit" className="btn btn-primary w-100 rounded-pill shadow-sm">{t.login}</button>
        </form>

        <div className="text-center mt-3">
          <small>{t.noAccount} <Link to="/signup">{t.signup}</Link></small>
        </div>
      </div>
    </div>
  );
}

export default Login;
