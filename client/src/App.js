import React , { useState ,useEffect  } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import Topbar from './components/Topbar';
import Apropos from './pages/Apropos';
import Contacts from './pages/Contacts';
import 'bootstrap/dist/css/bootstrap.min.css';
import Balade from './pages/Balade';
import Activite from './pages/Activite';
import Tour from './pages/Tour';
import Registre from './pages/Registre';
import Login from './pages/Login';
import ReservationForm from './pages/ReservationForm';
import { checkClientExistenceByName } from './service/operationsEvenement';

function App() {
  const [clientName, setClientName] = useState('');
  useEffect(() => {
    const storedClientName = localStorage.getItem('clientName');

    const verifyClientExistence = async () => {
      if (storedClientName) {
        const isClientValid = await checkClientExistenceByName(storedClientName);

        if (isClientValid) {
          setClientName(storedClientName);
        } else {
          // Si le client n'existe plus dans la base de données, effectuez les étapes de déconnexion
          localStorage.removeItem('clientName');
          setClientName('');
        }
      }
    };

    verifyClientExistence();
  }, []);

  const handleLogout = () => {
    // Déconnexion : supprimer le nom du client du stockage local et mettre à jour le state
    localStorage.removeItem('clientName');
    setClientName('');
  };
  return (
    <div className="App">
      <Router>
        <Topbar onLogout={handleLogout}/>
        <Header clientName={clientName} />
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Apropos" element={<Apropos />} />
          <Route path="/Contacts" element={<Contacts />} />
          <Route path="/Balade" element={<Balade />} />
          <Route path="/Activite" element={<Activite/>} />
          <Route path="/Tour" element={<Tour/>} />
          <Route path="/Registre" element={<Registre setClientName={setClientName} />} />
          <Route path="/Login" element={<Login setClientName={setClientName}/>} />
          <Route path="/ReservationForm" element={<ReservationForm clientName={clientName} />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
