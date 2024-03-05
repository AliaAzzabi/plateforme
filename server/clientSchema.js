const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  name:  String,
  firstName:  String,
  email: String,
  password: String, 
  phoneNumber: String,  
  address: String,
  city:  String,
  sexe: String,
  cep: String,
  
});

module.exports= mongoose.model('Client', clientSchema);

