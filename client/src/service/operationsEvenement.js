
import axios from 'axios';

const baseURL = 'http://localhost:4000';

const api = axios.create({
  baseURL: baseURL,
});


export const getAll = (callback) => {
  api.get('/Balades')
    .then((response) => callback(response))
    .catch((error) => console.error(error));
};
export const getAllActivites = (callback) => {
  api.get('/Activites')
    .then((response) => callback(response))
    .catch((error) => console.error(error));
};
export const getAllTours = (callback) => {
  api.get('/Tours')
    .then((response) => callback(response))
    .catch((error) => console.error(error));
};

export const addClient = async (client, callback) => {
  try {
    const response = await api.post('/addClient', client);
    const clientName = response.data.firstName; 
    callback({ ...response.data, clientName });
    return response.data;
  } catch (error) {
    console.error(error);
    callback({ error: 'Erreur lors de l\'enregistrement du client' });
  }
};

export const authenticateClient = async (credentials) => {
  try {
    const response = await api.post('/authenticate', credentials);
    
    if (response.data.success) {
      setAuthToken(response.data.token);
      return { success: true, client: response.data.client };
    } else {
      return { success: false, error: response.data.error };
    }
  } catch (error) {
    console.error(error);
    return { success: false, error: 'Erreur lors de la connexion' };
  }
};
const setAuthToken = (token) => {
  localStorage.setItem('token', token);
  // Add the token to the headers for all future requests
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};
export const addReservation = async (reservation) => {
  try {
    const response = await api.post('/addReservation', reservation);
    return response.data; 
  } catch (error) {
    console.error(error);
    return { error: 'Erreur lors de l\'enregistrement de la réservation' };
  }
};

export const checkClientExistenceByName = async (clientName) => {
  try {
    const response = await api.get(`/checkClientExistenceByName/${clientName}`);
    return response.data.exists;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const sendEmail = async (formData) => {
  try {
    const response = await api.post('/sendEmail', formData);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'e-mail:', error);
    throw error;
  }
};
