require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt'); // NUEVO

const app = express();

// ================== CONEXIÓN ==================
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Mongo conectado "))
  .catch(err => console.log(err));

// ================== MIDDLEWARES ==================
app.use(cors());
app.use(express.json());

// ================== MODELOS ==================
const User = require('./models/User');
const Gasto = require('./models/Gasto');

// ================== AUTH ==================

// REGISTER
app.post('/api/auth/register', async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "Este correo ya está registrado"
      });
    }

    // 🔐 ENCRIPTAR ( solo mejora seguridad)
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      email,
      password: hashedPassword
    });

    await newUser.save();

    res.json({ message: 'Usuario registrado' });

  } catch (error) {
    res.status(500).json({ message: 'Error del servidor' });
  }
});

// LOGIN
app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        message: 'Credenciales incorrectas'
      });
    }

    // 🔐 COMPARAR
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        message: 'Credenciales incorrectas'
      });
    }

    res.json({
      message: 'Login exitoso',
      user: {
        email: user.email
      }
    });

  } catch (error) {
    res.status(500).json({ message: 'Error del servidor' });
  }
});

// ================== GASTOS ==================

// GUARDAR GASTO
app.post('/api/gastos', async (req, res) => {
  try {
    const nuevoGasto = new Gasto(req.body);
    await nuevoGasto.save();

    res.json({ message: "Gasto guardado correctamente" });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error guardando gasto" });
  }
});

// OBTENER GASTOS
app.get('/api/gastos/:email', async (req, res) => {
  try {
    const gastos = await Gasto.find({ email: req.params.email });
    res.json(gastos);

  } catch (error) {
    res.status(500).json({ message: "Error obteniendo gastos" });
  }
});

// ================== SERVER ==================
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log("Servidor corriendo en puerto", PORT);
});

module.exports = app;