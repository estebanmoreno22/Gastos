const mongoose = require("mongoose");

const gastoSchema = new mongoose.Schema({
  email: String, // 🔥 RELACIÓN CON USUARIO
  tipo: String,
  cantidad: Number,
  descripcion: String,
  fecha: String,
});

module.exports = mongoose.model("Gasto", gastoSchema);