//Login.js
import React, { useState } from 'react';
import { authenticateClient } from '../service/operationsEvenement';

function Login({ setClientName }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Envoyer une requête au backend pour vérifier les informations d'identification
      const response = await authenticateClient(formData);
  
      if (response.success) {
        // Authentification réussie
        setMessage('Bienvenue ! Vous pouvez maintenant bénéficier de nos offres.');
        setSuccessMessage('Authentification réussie. Vous pouvez maintenant bénéficier de nos offres.');
        // Mettez à jour le clientName dans le composant parent
        if (typeof setClientName === 'function') {
          setClientName(response.client.firstName);
        }

        localStorage.setItem('token', response.token);
        localStorage.setItem('clientName', response.client.firstName);
        
      } else {
        // Authentification échouée
        setMessage(`Identifiants incorrects. Erreur: ${response.error}`);
        setError('Erreur d\'authentification. Veuillez réessayer.');
      }
    } catch (error) {
      console.error(error);
      setMessage('Erreur lors de l\'authentification. Veuillez réessayer.');
    }
  };

  return (
    <section className="text-center">
      {/* Background image */}
      <div className="p-5 bg-image" style={{ backgroundImage: 'url("login.avif")', height: 300 }} />
      {/* Background image */}
      <div className="card mx-4 mx-md-5 shadow-5-strong" style={{ marginTop: '-100px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)' }}>
        <div className="card-body py-5 px-md-5">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8">
              <div className="icon d-flex align-items-center justify-content-center">
                <span className="fa fa-user-o" />
              </div>
              <h2 className="fw-bold mb-5">Login</h2>
              <form onSubmit={handleSubmit}>
                {/* 2 column grid layout with text inputs for the first and last names */}
                {/* Email input */}
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                {/* Password input */}
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                {/* Submit button */}
                <button type="submit" className="btn btn-primary btn-block mb-4">
                  Sign up
                </button>
                {error && (
                  <div className="alert alert-danger mt-3" role="alert">
                    {error}
                  </div>
                )}

                {successMessage && (
                  <div className="alert alert-success mt-3" role="alert">
                    {successMessage}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
