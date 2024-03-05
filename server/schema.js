const mongoose = require("mongoose");
const Image = require("./imageModel"); 


const BaladeSchema = mongoose.Schema({
  nom: String,
  description: String,
  prix: String,
  disponibilite: String,
  image: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Image",
  },
});

module.exports = mongoose.model("Balade", BaladeSchema);
