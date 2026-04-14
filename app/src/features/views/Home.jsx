import Header from "../layout/components/Header.jsx";
import Footer from "../layout/components/Footer.jsx";
import { Container, Typography, Box, Paper, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "#F5F7FA",
        width: "100%",
      }}
    >
      <Header />

      <Box sx={{ flex: 1, py: 6 }}>
        <Container maxWidth="lg">

          {/* HERO */}
          <Box
            sx={{
              textAlign: "center",
              p: 5,
              borderRadius: 3,
              background: "white",
              boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
              mb: 6,
            }}
          >
            <Typography variant="h3" fontWeight="bold" color="#0B1F3A">
              Bienvenido a PigBank
            </Typography>

            <Typography variant="h6" color="#6B7280" mt={2} mb={3}>
              Administra tus gastos de forma segura, rápida y profesional
            </Typography>

            <Button
              onClick={() => navigate("/gastos")}
              sx={{
                background: "linear-gradient(90deg, #1D4ED8, #60A5FA)",
                color: "white",
                px: 4,
                py: 1.5,
                borderRadius: 3,
                fontWeight: "bold",
                textTransform: "none",
              }}
            >
              Ir a gastos
            </Button>
          </Box>

          {/* TARJETAS (SOLO LAS NECESARIAS) */}
          <Box
            sx={{
              display: "flex",
              gap: 4,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >

            {/* GASTOS */}
            <Box
              onClick={() => navigate("/gastos")}
              sx={{ cursor: "pointer", flex: 1, minWidth: 280, maxWidth: 320 }}
            >
              <Paper
                sx={{
                  p: 4,
                  borderRadius: 3,
                  background: "white",
                  border: "1px solid #E5E7EB",
                  boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                  },
                  height: "100%",
                }}
              >
                <Typography variant="h6" color="#1D4ED8" gutterBottom>
                  Gestión de gastos
                </Typography>
                <Typography color="#6B7280">
                  Controla tus ingresos y egresos de forma clara y organizada.
                </Typography>
              </Paper>
            </Box>

            {/* API */}
            <Box
              onClick={() => navigate("/ApiRyC")}
              sx={{ cursor: "pointer", flex: 1, minWidth: 280, maxWidth: 320 }}
            >
              <Paper
                sx={{
                  p: 4,
                  borderRadius: 3,
                  background: "white",
                  border: "1px solid #E5E7EB",
                  boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                  },
                  height: "100%",
                }}
              >
                <Typography variant="h6" color="#1D4ED8" gutterBottom>
                  API del sistema
                </Typography>
                <Typography color="#6B7280">
                  Consulta y prueba los endpoints disponibles del backend.
                </Typography>
              </Paper>
            </Box>

          </Box>

          {/* TIP */}
          <Box
            sx={{
              mt: 10,
              p: 4,
              borderRadius: 3,
              background: "white",
              border: "1px solid #E5E7EB",
              textAlign: "center",
              maxWidth: 600,
              mx: "auto",
              boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
            }}
          >
            <Typography variant="h6" color="#0B1F3A" gutterBottom>
              Consejo financiero
            </Typography>
            <Typography color="#6B7280">
              Llevar control de tus gastos diarios te ayuda a ahorrar más rápido.
            </Typography>
          </Box>

          {/* 🔥 ESTE NO LO TOQUÉ (como pediste) */}
          <Box sx={{ textAlign: "center", mt: 6 }}>
            <Button
              onClick={() => window.open("https://github.com/juanpenagos007-dotcom/taller4-react")}
              sx={{
                background: "linear-gradient(135deg, #6366F1, #A78BFA)",
                color: "white",
                fontWeight: "bold",
                px: 4,
                py: 1.5,
                borderRadius: 2,
                boxShadow: "0 0 15px rgba(167,139,250,0.5)",
                "&:hover": {
                  background: "linear-gradient(135deg, #818CF8, #C4B5FD)",
                },
              }}
            >
              Ver repositorio en GitHub 🚀
            </Button>
          </Box>

        </Container>
      </Box>

      <Footer />
    </Box>
  );
}

export default Home;