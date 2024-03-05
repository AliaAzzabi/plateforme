import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div>
            <div>
                {/* ======= Footer ======= */}
                <footer id="footer">
                    
                    <div className="footer-top">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 col-md-6 footer-contact">
                                    <h3>AdventureBooking<span>.</span></h3>
                                    <p>
                                        tezdaine djerba<br />
                                        Tunisie <br /><br />
                                        <strong>Phone:</strong> +216 28237481<br />
                                        <strong>Email:</strong> informationadvan@gmail.com<br />
                                    </p>
                                </div>
                                <div className="col-lg-3 col-md-6 footer-links">
                                    <h4>Useful Links</h4>
                                    <ul>
                                        <li><i className="bx bx-chevron-right" /><Link className="nav-link scrollto" to="/">Accueil</Link></li>
                                        <li><i className="bx bx-chevron-right" /><Link className="nav-link scrollto" to="/Apropos"> About</Link></li>
                                       
                                        <li><i className="bx bx-chevron-right" /><Link className="nav-link scrollto" to="/Contacts">Contact</Link></li>
                                    </ul>
                                </div>
                                <div className="col-lg-3 col-md-6 footer-links">
                                    <h4>Our Services</h4>
                                    <ul>
                                        <li><i className="bx bx-chevron-right" /><Link to="/Balade"> Different balades</Link> </li>
                                        <li><i className="bx bx-chevron-right" /><Link to="/Activite"> Different activities</Link></li>
                                        <li><i className="bx bx-chevron-right" /><Link to="/Tour">Tours</Link></li>
                                        
                                    </ul>
                                </div>
                                <div className="col-lg-3 col-md-6 footer-links">
                                    <h4>Our Social Media</h4>
                                    <p>Rejecting fermentation leads to joy, while deep exploration of nature brings great value to life.</p>
                                    <div className="social-links mt-3">
            
                                        <a href="https://www.facebook.com/ActiviteDjerba" className="facebook"><i className="bx bxl-facebook" /></a>
                                        <a href="https://www.instagram.com/djerba619/" className="instagram"><i className="bx bxl-instagram" /></a>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="container py-4">
                        <div className="copyright">
                            © Copyright <strong><span>AdventureBooking</span></strong>. All Rights Reserved
                        </div>
                        <div className="credits">
                            {/* All the links in the footer should remain intact. */}
                            {/* You can delete the links only if you purchased the pro version. */}
                            {/* Licensing information: https://bootstrapmade.com/license/ */}
                            {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/bizland-bootstrap-business-template/ */}
                            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                        </div>
                    </div>
                </footer>{/* End Footer */}<p />
            </div>

        </div>
    )
}

export default Footer
