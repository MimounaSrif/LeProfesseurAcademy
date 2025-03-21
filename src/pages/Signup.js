import React, { useState } from 'react';
import logo from '../assets/professeur.jpg';

function Signup({ language = 'fr' }) { // Langue par défaut = Français
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Traductions intégrées
  const translations = {
    fr: {
      welcome: "Bienvenue à Le Professeur Academy !",
      desc1: "Nous vous offrons une expérience d’apprentissage exceptionnelle de différentes langues.",
      desc2: "Avec nos instructeurs qualifiés et un programme complet, nous vous aiderons à maîtriser vos compétences linguistiques.",
      signup: "Inscription",
      firstName: "Prénom",
      lastName: "Nom",
      email: "Adresse Email",
      password: "Mot de passe",
      confirmPassword: "Confirmer le mot de passe",
      submit: "S'inscrire"
    },
    en: {
      welcome: "Welcome to Le Professeur Academy!",
      desc1: "We offer you an exceptional language learning experience.",
      desc2: "With qualified instructors and a complete program, we help you master your language skills.",
      signup: "Sign Up",
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email Address",
      password: "Password",
      confirmPassword: "Confirm Password",
      submit: "Sign Up"
    },
    ar: {
      welcome: "مرحبًا بكم في أكاديمية البروفيسور!",
      desc1: "نقدم لكم تجربة استثنائية لتعلم اللغات.",
      desc2: "مع مدربين مؤهلين وبرنامج شامل، نساعدكم على إتقان مهاراتكم اللغوية.",
      signup: "التسجيل",
      firstName: "الاسم ",
      lastName: "النسب",
      email: "البريد الإلكتروني",
      password: "كلمة المرور",
      confirmPassword: "تأكيد كلمة المرور",
      submit: "التسجيل"
    }
  };

  const t = translations[language]; // Sélectionne les textes selon langue choisie

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isPasswordSecure = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;
    return regex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isPasswordSecure(formData.password)) {
      setError("Mot de passe : min 8 caractères, 1 majuscule, 1 chiffre, 1 caractère spécial.");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }

    setError('');
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
          <div className={`col-md-6 d-flex flex-column justify-content-center align-items-start p-5 ${language === 'ar' ? 'text-end' : ''}`}>
            <h2 className="mb-4">{t.welcome}</h2>
            <p>{t.desc1}</p>
            <p>{t.desc2}</p>
          </div>
        </div>
      </div>

      {/* Formulaire d'inscription */}
      <div className="container my-5">
        <h3 className="text-center mb-4">{t.signup}</h3>
        {error && <div className="alert alert-danger text-center">{error}</div>}
        <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '600px' }}>
          
          {/* Prénom */}
          <div className="mb-4">
            <label className="form-label mb-2">
              <i className="bi bi-person-fill me-2 text-primary"></i> {t.firstName}
            </label>
            <input 
              type="text" 
              className="form-control rounded-pill shadow-sm py-2" 
              name="firstName" 
              onChange={handleChange} 
              required 
            />
          </div>

          {/* Nom */}
          <div className="mb-4">
            <label className="form-label mb-2">
              <i className="bi bi-person-fill me-2 text-primary"></i> {t.lastName}
            </label>
            <input 
              type="text" 
              className="form-control rounded-pill shadow-sm py-2" 
              name="lastName" 
              onChange={handleChange} 
              required 
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="form-label mb-2">
              <i className="bi bi-envelope-fill me-2 text-primary"></i> {t.email}
            </label>
            <input 
              type="email" 
              className="form-control rounded-pill shadow-sm py-2" 
              name="email" 
              onChange={handleChange} 
              required 
            />
          </div>

          {/* Mot de passe */}
          <div className="mb-4">
            <label className="form-label mb-2">
              <i className="bi bi-lock-fill me-2 text-primary"></i> {t.password}
            </label>
            <div className="input-group">
              <input 
                type={showPassword ? "text" : "password"} 
                className="form-control rounded-start shadow-sm py-2" 
                name="password" 
                onChange={handleChange} 
                required 
              />
              <span className="input-group-text bg-white rounded-end" style={{ cursor: 'pointer' }} onClick={() => setShowPassword(!showPassword)}>
                <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'} text-secondary`}></i>
              </span>
            </div>
          </div>

          {/* Confirmer mot de passe */}
          <div className="mb-4">
            <label className="form-label mb-2">
              <i className="bi bi-lock-fill me-2 text-primary"></i> {t.confirmPassword}
            </label>
            <div className="input-group">
              <input 
                type={showConfirmPassword ? "text" : "password"} 
                className="form-control rounded-start shadow-sm py-2" 
                name="confirmPassword" 
                onChange={handleChange} 
                required 
              />
              <span className="input-group-text bg-white rounded-end" style={{ cursor: 'pointer' }} onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                <i className={`bi ${showConfirmPassword ? 'bi-eye-slash' : 'bi-eye'} text-secondary`}></i>
              </span>
            </div>
          </div>

          <button type="submit" className="btn btn-primary w-100 rounded-pill shadow-sm">{t.submit}</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
