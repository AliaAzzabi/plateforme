import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { VscAccount } from 'react-icons/vsc';

function Header({ clientName }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Fonction pour ouvrir/fermer le menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            <header id="header" className="d-flex align-items-center">
                <div className="container d-flex align-items-center justify-content-between">
                    <h1 className="logo">
                        <Link to="/">AdventureBooking<span>.</span></Link>
                    </h1>
    
                   
                    <nav id="navbar" className={`navbar ${isMenuOpen ? 'active' : ''}`}>
                        <ul>
                            <li><Link className="nav-link scrollto" to="/">Accueil</Link></li>
                            <li><Link className="nav-link scrollto" to="/Apropos">À propos</Link></li>
                            <li className="dropdown">
                                <Link to="#">
                                    <span>Services</span>
                                    <i className="bi bi-chevron-down" />
                                </Link>
                                <ul>
                                    <li><Link to="/Balade">Balade</Link></li>
                                    <li><Link to="/Activite">Activité</Link></li>
                                    <li><Link to="/Tour">Tours</Link></li>
                                </ul>
                            </li>
                            <li><Link className="nav-link scrollto" to="/Contacts">Contact</Link></li>
                            <li><Link to="/Registre">Registre</Link></li>
                            <li><Link to="/Login">Login</Link></li>
                        </ul>
                        {/* Affichage du nom du client */}
                        {clientName !== null && clientName !== undefined && (
                            <div style={{ marginLeft: '10px' }}>
                                <VscAccount size={24} />
                                <span>{clientName}</span>
                            </div>
                        )}
                    </nav>
    
                    {/* Bouton pour ouvrir/fermer le menu */}
                    <div className="mobile-nav-toggle" onClick={toggleMenu}>
                        <i className={`bi ${isMenuOpen ? 'bi-x' : 'bi-list'}`} />
                    </div>
                </div>
            </header>
        </div>
    );
    
    
}

export default Header;
