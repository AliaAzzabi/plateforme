import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { addReservation } from '../service/operationsEvenement';

function ReservationForm({ clientName }) {
  const [formData, setFormData] = useState({
    clientName: clientName || '',
    tourName: '',
    date: '',
    heure: '',
    clientEmail:'',
    nbpersonne: '',
    paymentMethod: 'cash',
  });

  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);

    setFormData((prevFormData) => ({
      ...prevFormData,

      tourName: searchParams.get('ActionName') || '',  
      
    }));
  }, [location.search]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };



  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if the user is logged in
    if (!clientName) {
      // If not logged in, navigate to login page
      alert('Vous devez vous connecter avant de réserver.');
      return;
    }
    const requiredFields = ['clientName', 'tourName', 'date', 'heure','clientEmail', 'nbpersonne', 'paymentMethod'];

    const missingFields = requiredFields.filter(field => !formData[field]);

    if (missingFields.length > 0) {
      setError(`Please fill in all required fields.`);
      return;
    }

    try {
      // Call a function to add reservation to the database
      const result = await addReservation(formData);

      if (result.error) {
        console.error(result.error);
        setError(result.error);
        setSuccessMessage(null);

        // Handle error (e.g., show an alert)
      } else {
        console.log('Reservation successful:', result);
        setSuccessMessage(result.message || ' Successful Reservation ! 🎉 Vous recevrez un e-mail de validation. ');
        setError(null);

        // Handle success (e.g., show a success message)


      }
    } catch (error) {
      console.error('Error adding reservation:', error);
      // Handle error (e.g., show an alert)
    }
  };

  return (
    <div>
      <div className="container">
        <div className="col-12">
          <h1 className="text-center fw-bolder">Formulaire de Réservation</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="clientName" className="form-label">Nom du client</label>
            <input
              type="text"
              className="form-control"
              id="clientName"
              name="clientName"
              value={formData.clientName}
              onChange={handleChange}
            />

          </div>
          <div className="mb-3">
            <label htmlFor="tourName" className="form-label">Nom du tour</label>
            <input
              type="text"
              className="form-control"
              id="tourName"
              name="tourName"
              value={formData.tourName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="date" className="form-label">Date de réservation</label>
            <input
              type="date"
              className="form-control"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
            {error && !formData.date && (
              <div className="text-danger">Please fill in the date field</div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="heure" className="form-label">Heure de réservation</label>
            <input
              type="time"
              className="form-control"
              id="heure"
              name="heure"
              value={formData.heure}
              onChange={handleChange}
            />
            {error && !formData.heure && (
              <div className="text-danger">Please fill in the heure field</div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="clientEmail" className="form-label">Adresse e-mail </label>
            <input
              type="email"
              className="form-control"
              id="clientEmail"
              name="clientEmail"
              placeholder='saisir l email pour recevoir la confirmation '
              value={formData.clientEmail}
              onChange={handleChange}
            />
              {error && !formData.nbpersonne && (
              <div className="text-danger">Please fill in the e-mail field</div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="heure" className="form-label">Nombre de personne</label>
            <input
              type="text"
              className="form-control"
              id="nbpersonne"
              name="nbpersonne"
              value={formData.nbpersonne}
              onChange={handleChange}
            />
            {error && !formData.nbpersonne && (
              <div className="text-danger">Please fill in the Nombre de personne field</div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="paymentMethod" className="form-label">
              Méthode de paiement
            </label>
            <select
              className="form-control"
              id="paymentMethod"
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
            >
              <option value="">Choose...</option>
              <option value="cash">Cash</option>
            </select>
            {error && !formData.nbpersonne && (
              <div className="text-danger">Please choose in the paiement Méthode field</div>
            )}
          </div>

          <div className="col-12 text-end">
            <button type="submit" className="btn btn-primary w-100 bg-gradient p-3 text-center mb-2 text-white fw-bolder fs-3">Réserver</button>
          </div>
        </form>
        {/* Affichage des messages d'erreur ou de réussite */}
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
      </div>
    </div>
  );
}

export default ReservationForm;
