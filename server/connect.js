//connect.js
const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/SiteReservation");

    console.log("Connected to the SiteReservation database");

    
    mongoose.connection.db.collection("balades");
    console.log("Using the balades collection");

    
    mongoose.connection.db.collection("activites");
    console.log("Using the activites collection");
      
      mongoose.connection.db.collection("tours");
      console.log("Using the tours collection");
      mongoose.connection.db.collection("clients");
      console.log("Using the clients collection");
      mongoose.connection.db.collection("reservations");
      console.log("Using the reservations collection");
  } catch (error) {
    console.error("Failed to connect to the database", error);
  }
}

module.exports = { connect };
