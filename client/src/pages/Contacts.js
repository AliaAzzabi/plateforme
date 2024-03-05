import React, { useState } from 'react'
import { sendEmail } from '../service/operationsEvenement'

function Contacts() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const { name, email, subject, message } = formData;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await sendEmail(formData);
            alert('Votre e-mail a été envoyé avec succès!');
            // Réinitialiser le formulaire après l'envoi
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
        } catch (error) {
            console.error('Erreur lors de l\'envoi de l\'e-mail:', error);
            alert('Erreur lors de l\'envoi de l\'e-mail. Veuillez réessayer.');
        }
    };


    return (
        <div>
            {/* ======= Contact Section ======= */}
            <section id="contact" className="contact">
                <div className="container" >
                    <div className="section-title">
                        <h2>Contact</h2>

                        <p>Despite the challenges encountered in our daily lives, we seek solutions that allow us to overcome obstacles, because we are determined to live a life full of joy and achievement.</p>
                    </div>
                    <div className="row" data-aos-delay={100}>
                        <div className="col-lg-6">
                            <div className="info-box mb-4">
                                <i className="bx bx-map" />
                                <h3>Address</h3>
                                <p>tezdaine , Djerba ,Tunisia</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="info-box  mb-4">
                                <i className="bx bx-envelope" />
                                <h3>Email </h3>
                                <p> informationadvan@gmail.com</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="info-box  mb-4">
                                <i className="bx bx-phone-call" />
                                <h3>Numéro</h3>
                                <p>+216 28237481</p>
                            </div>
                        </div>
                    </div>
                    <div className="row" data-aos-delay={100}>
                        <div className="col-lg-6 ">
                       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6837.174344054039!2d11.048194626823728!3d33.79523772307196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aa971db544ffdd%3A0x6e7596184b1280fb!2sDar%20Lagune%20Djerba!5e0!3m2!1sfr!2stn!4v1707685100312!5m2!1sfr!2stn" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

                        </div>
                        <div className="col-lg-6">
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col form-group">
                                        <input type="text" className="form-control" name="name" value={name} onChange={handleChange} placeholder="Your Name" required />
                                    </div>
                                    <div className="col form-group">
                                        <input type="email" className="form-control" name="email" value={email} onChange={handleChange} placeholder="Your Email" required />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" name="subject" value={subject} onChange={handleChange} placeholder="Subject" required />
                                </div>
                                <div className="form-group">
                                    <textarea name="message" className="form-control" rows={5} onChange={handleChange} placeholder="Message" value={message} required />
                                </div>

                                <div className="form-group">
                                   <button type="submit" className="btn btn-primary " style={{width: '100%'}}>Envoyer</button>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>{/* End Contact Section */}

        </div>
    )
}

export default Contacts
