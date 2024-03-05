//controller.js
const expressHandler = require("express-async-handler");
const nodemailer = require('nodemailer');
const Balade = require("./schema");
const Activite = require("./activiteSchema");
const Tour = require("./tourSchema");
const Image = require("./imageModel");
const Client = require("./clientSchema");
const Reservation = require('./reservationSchema');
const multer = require("multer");
const { extname } = require("path");
const jwt = require("jsonwebtoken"); 
const { secretKey } = require("./config"); 
const { verifyToken } = require("./authMiddleware"); 


const postBalade = expressHandler(async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file found" });
    }

    const { nom, description, prix, disponibilite } = req.body;

    
    const newImage = new Image({
      filename: req.file.filename,
      filepath: req.file.path,
    });
    const savedImage = await newImage.save();

    
    const newBalade = new Balade({
      nom: nom,
      description: description,
      prix: prix,
      disponibilite: disponibilite,
      image: savedImage._id,
    });

    const savedBalade = await newBalade.save();

    res.status(201).json({
      _id: savedBalade._id,
      nom: savedBalade.nom,
      description: savedBalade.description,
      prix: savedBalade.prix,
      disponibilite: savedBalade.disponibilite,
      image: {
        filename: savedImage.filename,
        filepath: savedImage.filepath,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erreur interne du serveur" });
  }
});

const postActivite = expressHandler(async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file found" });
    }

    const { nom, description, prix, disponibilite } = req.body;

    
    const newImage = new Image({
      filename: req.file.filename,
      filepath: req.file.path,
    });
    const savedImage = await newImage.save();

    
    const newActivite = new Activite({
      nom: nom,
      description: description,
      prix: prix,
      disponibilite: disponibilite,
      image: savedImage._id,
    });

    const savedActivite = await newActivite.save();

    res.status(201).json({
      _id: savedActivite._id,
      nom: savedActivite.nom,
      description: savedActivite.description,
      prix: savedActivite.prix,
      disponibilite: savedActivite.disponibilite,
      image: {
        filename: savedImage.filename,
        filepath: savedImage.filepath,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erreur interne du serveur" });
  }
});

const postTour = expressHandler(async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file found" });
    }

    const { nom, description, prix, disponibilite } = req.body;

   
    const newImage = new Image({
      filename: req.file.filename,
      filepath: req.file.path,
    });
    const savedImage = await newImage.save();

   
    const newTour = new Tour({
      nom: nom,
      description: description,
      prix: prix,
      disponibilite: disponibilite,
      image: savedImage._id,
    });

    const savedTour = await newTour.save();

    res.status(201).json({
      _id: savedTour._id,
      nom: savedTour.nom,
      description: savedTour.description,
      prix: savedTour.prix,
      disponibilite: savedTour.disponibilite,
      image: {
        filename: savedImage.filename,
        filepath: savedImage.filepath,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erreur interne du serveur" });
  }
});

const addClient = expressHandler(async (req, res) => {
  try {
    const { name, firstName, email, password, phoneNumber, address, city, sexe, cep } = req.body;

    
    
    if (!name || !firstName || !email || !password || !phoneNumber|| !address || !city || !sexe || !cep) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const newClient = new Client({
      name,
      firstName,
      email,
      password,
      phoneNumber,
      address,
      city,
      sexe,
      cep,
    });

    const savedClient = await newClient.save();

    res.status(201).json({
      _id: savedClient._id,
      name: savedClient.name,
      firstName: savedClient.firstName,
      email: savedClient.email,
      password: savedClient.password,
      phoneNumber: savedClient.phoneNumber,
      address: savedClient.address,
      city: savedClient.city,
      sexe: savedClient.sexe,
      cep: savedClient.cep,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: `Erreur interne du serveur: ${error.message}` });
  }
});

const authenticateClient = expressHandler(async (req, res) => {
  try {
    const { email, password } = req.body;

    
    const client = await Client.findOne({ email, password });

    if (client) {
      const token = jwt.sign({ clientId: client._id }, secretKey, { expiresIn: '2h' });
      res.status(200).json({ success: true, client });
      
    } else {
      res.status(401).json({ success: false, error: 'Identifiants incorrects' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Erreur lors de l\'authentification' });
  }
});
const protectedRouteHandler = (req, res) => {
  res.json({ success: true, message: 'Vous avez accès à  protégé!', clientId: req.clientId });
};

const addReservation = expressHandler(async (req, res) => {
  try {
    const { clientName, tourName, date, heure,clientEmail,nbpersonne, paymentMethod } = req.body;

    const newReservation = new Reservation({
      clientName,
      tourName,
      date,
      heure,
      clientEmail,
      nbpersonne,
      paymentMethod,
    });

    const savedReservation = await newReservation.save();

    res.status(201).json(savedReservation);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur interne du serveur' });
  }
});

const checkClientExistenceByName = expressHandler(async (req, res) => {
  try {
    const { clientName } = req.params;

    
    const client = await Client.findOne({ firstName: clientName });

    if (client) {
      res.status(200).json({ exists: true });
    } else {
      res.status(200).json({ exists: false });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur interne du serveur' });
  }
});

const sendEmail = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    //  un transporteur SMTP
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'azzabialia1@gmail.com',
        pass: 'eimu mrue nkdg urrm' 
      }
    });

    // Configurez les informations de l'email
    let mailOptions = {
      from: email,
      to: 'informationadvan@gmail.com', // @ email de destination
      subject: subject,
      text: `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    // Envoyez l'email
    let info = await transporter.sendMail(mailOptions);

    console.log("E-mail envoyé: %s", info.messageId);
    res.status(200).json({ success: true, message: 'Votre e-mail a été envoyé avec succès!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Erreur lors de l\'envoi de l\'e-mail' });
  }
};
module.exports = { postBalade, postActivite, postTour , addClient , authenticateClient, protectedRouteHandler, addReservation,  checkClientExistenceByName ,sendEmail};
