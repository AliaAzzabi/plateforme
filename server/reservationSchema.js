
const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  clientName: { type: String, required: true },
  tourName: { type: String, required: true },
  date: { type: Date, required: true },
  heure: { type: String, required: true },
  clientEmail:{ type: String, required: true },
  nbpersonne: { type: String, required: true },
  paymentMethod: { type: String, required: true },
  
});

module.exports = mongoose.model('Reservation', reservationSchema);
