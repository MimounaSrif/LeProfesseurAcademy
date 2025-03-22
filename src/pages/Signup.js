import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import logo from '../assets/professeur.jpg';

function Signup({ language }) {
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

  const translations = {
    Français: {
      welcome: "Bienvenue à Le Professeur Academy !",
      desc1: "Nous vous offrons une expérience d’apprentissage exceptionnelle de différentes langues.",
      desc2: "Avec nos instructeurs qualifiés et un programme complet, nous vous aiderons à maîtriser vos compétences linguistiques.",
      signup: "Inscription",
      firstName: "Prénom",
      lastName: "Nom",
      email: "Adresse Email",
      password: "Mot de passe",
      confirmPassword: "Confirmer le mot de passe",
      submit: "S'inscrire",
      loginLink: "Se connecter",
      noAccount:"Vous avez déjà un compte ? ",
      passwordError: "Mot de passe : min 8 caractères, 1 majuscule, 1 chiffre, 1 caractère spécial.",
      passwordMismatch: "Les mots de passe ne correspondent pas."
    },
    Anglais: {
      welcome: "Welcome to Le Professeur Academy!",
      desc1: "We offer you an exceptional language learning experience.",
      desc2: "With qualified instructors and a complete program, we help you master your language skills.",
      signup: "Sign Up",
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email Address",
      password: "Password",
      confirmPassword: "Confirm Password",
      submit: "Sign Up",
      loginLink: "Log In",
      noAccount:"Already have an account?",
      passwordError: "Password: min 8 characters, 1 uppercase, 1 number, 1 special character.",
      passwordMismatch: "Passwords do not match."
    },
    Arabe: {
      welcome: "مرحبًا بكم في أكاديمية البروفيسور!",
      desc1: "نقدم لكم تجربة استثنائية لتعلم اللغات.",
      desc2: "مع مدربين مؤهلين وبرنامج شامل، نساعدكم على إتقان مهاراتكم اللغوية.",
      signup: "التسجيل",
      firstName: "الاسم",
      lastName: "النسب",
      email: "البريد الإلكتروني",
      password: "كلمة المرور",
      confirmPassword: "تأكيد كلمة المرور",
      submit: "التسجيل",
      loginLink: " تسجيل الدخول",
      noAccount: "ليس لديك حساب؟",

      passwordError: "كلمة المرور: 8 أحرف على الأقل، حرف كبير، رقم، وحرف خاص.",
      passwordMismatch: "كلمتا المرور غير متطابقتين."
    }
  };

  const t = translations[language];

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
      setError(t.passwordError);
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError(t.passwordMismatch);
      return;
    }
    setError('');
    console.log(formData);
  };

  return (
    <div style={{ paddingTop: '80px' }}>
      <div className="container-fluid d-flex align-items-center justify-content-center" style={{ minHeight: '70vh' }}>
        <div className="row w-100">
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
          <div className={`col-md-6 d-flex flex-column justify-content-center align-items-${language === 'Arabe' ? 'end' : 'start'} p-5`}>
            <h2 className="mb-4">{t.welcome}</h2>
            <p>{t.desc1}</p>
            <p>{t.desc2}</p>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h3 className="text-center mb-4">{t.signup}</h3>
        {error && <div className="alert alert-danger text-center">{error}</div>}
        <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '600px' }}>
          <div className="mb-4">
            <label className="form-label mb-2">
              <i className="bi bi-person-fill me-2 text-primary"></i> {t.firstName}
            </label>
            <input type="text" className="form-control rounded-pill shadow-sm py-2" name="firstName" onChange={handleChange} required />
          </div>

          <div className="mb-4">
            <label className="form-label mb-2">
              <i className="bi bi-person-fill me-2 text-primary"></i> {t.lastName}
            </label>
            <input type="text" className="form-control rounded-pill shadow-sm py-2" name="lastName" onChange={handleChange} required />
          </div>

          <div className="mb-4">
            <label className="form-label mb-2">
              <i className="bi bi-envelope-fill me-2 text-primary"></i> {t.email}
            </label>
            <input type="email" className="form-control rounded-pill shadow-sm py-2" name="email" onChange={handleChange} required />
          </div>

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

          <div className="mb-4">
            <label className="form-label mb-2">
              <i className="bi bi-lock-fill me-2 text-primary"></i> {t.confirmPassword}
            </label>
            <div className="position-relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                className="form-control rounded-pill shadow-sm py-2"
                name="confirmPassword"
                required
                onChange={handleChange}
                style={{ direction: language === 'Arabe' ? 'rtl' : 'ltr', paddingRight: language === 'Arabe' ? '2.5rem' : '1rem', paddingLeft: language === 'Arabe' ? '1rem' : '2.5rem' }}
              />
              <span
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                style={{
                  position: 'absolute',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  cursor: 'pointer',
                  [language === 'Arabe' ? 'left' : 'right']: '0.75rem',
                  color: '#6c757d'
                }}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          <button type="submit" className="btn btn-primary w-100 rounded-pill shadow-sm">{t.submit}</button>
          <div className="text-center mt-3">
            <small>{t.noAccount}<Link to="/login">{t.loginLink}</Link></small>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
