const express = require("express");
const cors = require("cors");
const path = require("path");
const { upload } = require("./upload");
const { postBalade, postActivite, postTour, addClient, authenticateClient, protectedRouteHandler, addReservation,  checkClientExistenceByName, sendEmail } = require("./controller");
const { verifyToken } = require("./authMiddleware"); 
const Balade = require("./schema");
const Activite = require("./activiteSchema");
const Tour = require("./tourSchema");
const Client = require("./clientSchema");


const router = express.Router();

router.use(cors());


router.post("/upload", upload.single("image"), postBalade);

router.post("/uploadActivite", upload.single("image"), postActivite);

router.post("/uploadTour", upload.single("image"), postTour);

router.use('/uploads', express.static(path.join(__dirname, 'uploads')));

router.post("/addClient", addClient);

router.post('/authenticate', authenticateClient);

router.get("/protectedRoute", verifyToken, protectedRouteHandler);
router.post('/addReservation', addReservation);
router.get("/checkClientExistenceByName/:clientName", checkClientExistenceByName);
router.post("/sendEmail", sendEmail);

router.get("/Balades", (req, res) => {
  Balade.find({})
    .populate('image')
    .then((results) => {
      console.log(results);
      res.send(results);
    })
    .catch((err) => {
      console.error("Erreur lors de la recherche des Balades :", err);
      res.status(500).send("Erreur serveur");
    });
});


router.get("/Activites", (req, res) => {
  Activite.find({})
    .populate('image')
    .then((results) => {
      console.log(results);
      res.send(results);
    })
    .catch((err) => {
      console.error("Erreur lors de la recherche des Activites :", err);
      res.status(500).send("Erreur serveur");
    });
});


router.get("/Tours", (req, res) => {
  Tour.find({})
    .populate('image')
    .then((results) => {
      console.log(results);
      res.send(results);
    })
    .catch((err) => {
      console.error("Erreur lors de la recherche des Tours :", err);
      res.status(500).send("Erreur serveur");
    });
});

module.exports = { router };
