//Registre.js
import React, { useState } from 'react';
import { addClient } from '../service/operationsEvenement';

function Registre({ setClientName }) {
    const [formData, setFormData] = useState({
        name: '',
        firstName: '',
        email: '',
        password: '',
        phoneNumber: '',
        address: '',
        city: '',
        sexe: '',
        cep: '',

    });

    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const requiredFields = ['name', 'firstName', 'email', 'password', 'phoneNumber', 'address', 'city', 'sexe', 'cep'];

        const missingFields = requiredFields.filter(field => !formData[field]);

        if (missingFields.length > 0) {
            setError(`Please fill in all required fields.`);
            return;
        }
        try {
            await addClient(formData, (result) => {
                if (result.error) {
                    setError(result.error);
                    setSuccessMessage(null);
                } else {
                    const clientName = result.clientName;
                    console.log('Client Name:', clientName);
                    setSuccessMessage(result.message || 'Enregistrement réussi ! 🎉 Votre information a été traitée avec succès');
                    setError(null);

                    // Réinitialiser le formulaire si nécessaire
                    setFormData({
                        name: '',
                        firstName: '',
                        email: '',
                        password: '',
                        phoneNumber: '',
                        address: '',
                        city: '',
                        sexe: '',
                        cep: '',

                    });
                    localStorage.setItem('token', result.token);
                    localStorage.setItem('clientName', clientName);
                    if (typeof setClientName === 'function') {
                        setClientName(clientName);
                    }
                    console.log('Name Set:', clientName);
                }
            });
        } catch (error) {
            console.error(error);
            setError('Erreur lors de l\'enregistrement du client');
        }
    };


    return (
        <div>
            <div className="container mt-3 pt-3">
                <div className="col-12">
                    <h1 className="text-center fw-bolder">Welcome to create your account</h1>
                </div>
                <div className="col-12">
                    <div className="bg-secondary opacity-75 bg-gradient p-3 text-center mb-2 text-white fw-bolder fs-3">
                        We thank you for completing the form below.
                    </div>
                    <hr />
                </div>
                <form className="row g-3" onSubmit={handleSubmit}>
                    <div className="col-12">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            id="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        {error && !formData.name && (
                            <div className="text-danger">Please fill in the Name field</div>
                        )}
                    </div>
                    <div className="col-12">
                        <label htmlFor="firstName" className="form-label">First Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="firstName"
                            id="firstName"
                            placeholder="First Name"
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                        {error && !formData.firstName && (
                            <div className="text-danger">Please fill in the First Name field</div>
                        )}

                    </div>
                    <div className="col-md-6">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            id="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {error && !formData.email && (
                            <div className="text-danger">Please fill in the email field</div>
                        )}

                    </div>
                    <div className="col-md-6">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            id="password"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        {error && !formData.password && (
                            <div className="text-danger">Please fill in the password field</div>
                        )}

                    </div>
                    <div className="col-12">
                        <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                        <input
                            type="text"
                            className="form-control"
                            name="phoneNumber"
                            id="phoneNumber"
                            placeholder="Enter your phone number"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                        />
                        {error && !formData.phoneNumber && (
                            <div className="text-danger">Please fill in the phone number field</div>
                        )}
                    </div>
                    <div className="col-12">
                        <label htmlFor="address" className="form-label">Address</label>
                        <input
                            type="text"
                            className="form-control"
                            name="address"
                            id="address"
                            placeholder="1234 Main St"
                            value={formData.address}
                            onChange={handleChange}
                        />
                        {error && !formData.address && (
                            <div className="text-danger">Please fill in the Address field</div>
                        )}
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="city" className="form-label">City</label>
                        <input
                            type="text"
                            className="form-control"
                            name="city"
                            id="city"
                            placeholder="City"
                            value={formData.city}
                            onChange={handleChange}
                        />
                        {error && !formData.city && (
                            <div className="text-danger">Please fill in the City field</div>
                        )}
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="sexe" className="form-label">Sexe</label>
                        <select id="sexe" className="form-select" name="sexe" value={formData.sexe} onChange={handleChange}>
                            <option value="">Choose...</option>
                            <option value="Men">homme</option>
                            <option value="Women">femme</option>
                        </select>
                        {error && !formData.sexe && (
                            <div className="text-danger">Please select a gender</div>
                        )}
                    </div>
                    <div className="col-md-2">
                        <label htmlFor="cep" className="form-label">CEP</label>
                        <input
                            type="text"
                            className="form-control"
                            name="cep"
                            id="cep"
                            placeholder="Enter your CEP"
                            value={formData.cep}
                            onChange={handleChange}
                        />
                        {error && !formData.cep && (
                            <div className="text-danger">Please fill in the CEP field</div>
                        )}
                    </div>
                    <div className="col-12 text-end">
                        <button type="submit" className="btn btn-primary w-100 bg-gradient p-3 text-center mb-2 text-white fw-bolder fs-3">Save</button>
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

export default Registre;
