// features/views/Gastos.jsx
import Header from "../../layout/components/Header.jsx";
import Footer from "../../layout/components/Footer.jsx";

import {
  Box,
  Typography,
  Container,
  TextField,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  MenuItem
} from "@mui/material";

import { useState, useEffect } from "react";
import axios from "axios";

function Gastos() {
  const user = JSON.parse(localStorage.getItem("user")) || {};

  const [tipo, setTipo] = useState("ingreso");
  const [cantidad, setCantidad] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [historial, setHistorial] = useState([]);
  const [mostrarHistorial, setMostrarHistorial] = useState(false);

  const nombre = user?.email
    ? user.email.split("@")[0].charAt(0).toUpperCase() +
      user.email.split("@")[0].slice(1)
    : "Usuario";

  useEffect(() => {
    const fetchGastos = async () => {
      try {
        const res = await axios.get(
          `https://pigbank-backend.onrender.com/api/gastos/${user.email}`
        );
        setHistorial(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    if (user?.email) fetchGastos();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!cantidad || !descripcion) {
      alert("Completa todos los campos");
      return;
    }

    const nuevoRegistro = {
      email: user.email,
      tipo,
      cantidad: Number(cantidad),
      descripcion,
      fecha: new Date().toLocaleDateString(),
    };

    try {
      await axios.post("https://pigbank-backend.onrender.com/api/gastos", nuevoRegistro);
      setHistorial([...historial, nuevoRegistro]);
    } catch (error) {
      alert("Error guardando");
    }

    setCantidad("");
    setDescripcion("");
  };

  const totalIngresos = historial
    .filter((item) => item.tipo === "ingreso")
    .reduce((acc, item) => acc + item.cantidad, 0);

  const totalGastos = historial
    .filter((item) => item.tipo === "gasto")
    .reduce((acc, item) => acc + item.cantidad, 0);

  const balance = totalIngresos - totalGastos;

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "#F5F7FA",
      }}
    >
      <Header />

      <Container sx={{ flex: 1, py: 6 }}>
        
        {/* HEADER */}
        <Box sx={{ mb: 5 }}>
          <Typography variant="h4" fontWeight="bold" color="#0B1F3A">
            Panel financiero
          </Typography>
          <Typography color="#6B7280">
            Bienvenido {nombre} 👋 — controla tu dinero con PigBank
          </Typography>
        </Box>

        {/* RESUMEN TIPO BANCO */}
        <Box
          sx={{
            display: "flex",
            gap: 3,
            flexWrap: "wrap",
            mb: 5,
          }}
        >
          <Paper sx={{ p: 3, flex: 1, borderRadius: 3 }}>
            <Typography color="#6B7280">Ingresos</Typography>
            <Typography variant="h5" color="#16A34A" fontWeight="bold">
              ${totalIngresos}
            </Typography>
          </Paper>

          <Paper sx={{ p: 3, flex: 1, borderRadius: 3 }}>
            <Typography color="#6B7280">Gastos</Typography>
            <Typography variant="h5" color="#DC2626" fontWeight="bold">
              ${totalGastos}
            </Typography>
          </Paper>

          <Paper sx={{ p: 3, flex: 1, borderRadius: 3 }}>
            <Typography color="#6B7280">Balance</Typography>
            <Typography
              variant="h5"
              fontWeight="bold"
              color={balance >= 0 ? "#1D4ED8" : "#DC2626"}
            >
              ${balance}
            </Typography>
          </Paper>
        </Box>

        {/* FORM + RESUMEN */}
        <Box sx={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
          
          {/* FORM */}
          <Box sx={{ flex: 2, minWidth: 300 }}>
            <Paper
              component="form"
              onSubmit={handleSubmit}
              sx={{
                p: 4,
                borderRadius: 3,
                background: "white",
                boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
                display: "flex",
                flexDirection: "column",
                gap: 3,
              }}
            >
              <Typography fontWeight="bold" color="#0B1F3A">
                Registrar movimiento
              </Typography>

              <TextField
                label="Tipo"
                select
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
                fullWidth
              >
                <MenuItem value="ingreso">Ingreso</MenuItem>
                <MenuItem value="gasto">Gasto</MenuItem>
              </TextField>

              <TextField
                label="Cantidad"
                type="number"
                value={cantidad}
                onChange={(e) => setCantidad(e.target.value)}
                fullWidth
              />

              <TextField
                label="Descripción"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                fullWidth
              />

              <Button
                type="submit"
                sx={{
                  background: "linear-gradient(90deg, #1D4ED8, #60A5FA)",
                  color: "white",
                  fontWeight: "bold",
                  py: 1.5,
                }}
              >
                Guardar movimiento
              </Button>
            </Paper>
          </Box>

          {/* TARJETA INFO EXTRA */}
          <Box sx={{ flex: 1, minWidth: 250 }}>
            <Paper
              sx={{
                p: 4,
                borderRadius: 3,
                background: "white",
                boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
              }}
            >
              <Typography fontWeight="bold" color="#0B1F3A" gutterBottom>
                PigBank Tips 💡
              </Typography>

              <Typography color="#6B7280">
                Divide tus gastos en categorías para tener mejor control.
              </Typography>
            </Paper>
          </Box>
        </Box>

        {/* BOTÓN HISTORIAL */}
        <Box sx={{ textAlign: "center" }}>
          <Button
            onClick={() => setMostrarHistorial(!mostrarHistorial)}
            sx={{
              mt: 4,
              background: "linear-gradient(90deg, #1D4ED8, #60A5FA)",
              color: "white",
              fontWeight: "bold",
            }}
          >
            {mostrarHistorial ? "Ocultar historial" : "Ver historial"}
          </Button>
        </Box>

        {/* TABLA */}
        {mostrarHistorial && (
          <TableContainer
            component={Paper}
            sx={{ mt: 4, borderRadius: 3 }}
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell><b>Tipo</b></TableCell>
                  <TableCell><b>Cantidad</b></TableCell>
                  <TableCell><b>Descripción</b></TableCell>
                  <TableCell><b>Fecha</b></TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {historial.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell
                      sx={{
                        color: item.tipo === "ingreso" ? "#16A34A" : "#DC2626",
                        fontWeight: "bold",
                      }}
                    >
                      {item.tipo}
                    </TableCell>

                    <TableCell>${item.cantidad}</TableCell>
                    <TableCell>{item.descripcion}</TableCell>
                    <TableCell>{item.fecha}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Container>

      <Footer />
    </Box>
  );
}

export default Gastos;