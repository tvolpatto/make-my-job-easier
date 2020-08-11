const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const azulSchema = new Schema({
  street: { type: String, required: true },
  number: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zip: { type: String, required: true },
  complement: { type: String, required: true },
  code: { type: String, required: true },
});



//HISTORICAL LOGS

const Azul = mongoose.model("Azul", azulSchema);


module.exports = { Azul };
