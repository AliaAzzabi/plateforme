const mongoose = require("mongoose");

const ActiviteSchema = mongoose.Schema({
  nom: String,
  description: String,
  prix: String,
  disponibilite: String,
  image: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Image",
  },
});

module.exports = mongoose.model("Activite", ActiviteSchema);
