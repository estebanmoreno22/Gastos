// features/views/Acerca.jsx
import Header from "../layout/components/Header.jsx";
import Footer from "../layout/components/Footer.jsx";
import { Box, Typography, Container, Paper } from "@mui/material";

function Acerca() {
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
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography variant="h3" fontWeight="bold" color="#0B1F3A">
            Acerca de PigBank 💰
          </Typography>

          <Typography color="#6B7280" variant="h6">
            Tu aliado digital para gestionar tus finanzas de forma inteligente.
          </Typography>
        </Box>

        {/* CONTENIDO */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            alignItems: "center",
          }}
        >
          {/* HISTORIA */}
          <Paper
            sx={{
              p: 4,
              maxWidth: 800,
              borderRadius: 3,
              background: "white",
              border: "1px solid #E5E7EB",
              boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
            }}
          >
            <Typography variant="h5" color="#1D4ED8" gutterBottom>
              Nuestra historia
            </Typography>

            <Typography color="#6B7280">
              PigBank nace con el objetivo de simplificar la gestión del dinero
              en la vida diaria. Sabemos que muchas personas no tienen una forma
              clara de controlar sus finanzas, por eso creamos una plataforma
              sencilla, moderna y accesible para todos.
            </Typography>
          </Paper>

          {/* MISIÓN */}
          <Paper
            sx={{
              p: 4,
              maxWidth: 800,
              borderRadius: 3,
              background: "white",
              border: "1px solid #E5E7EB",
              boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
            }}
          >
            <Typography variant="h5" color="#1D4ED8" gutterBottom>
              Nuestra misión
            </Typography>

            <Typography color="#6B7280">
              Brindar herramientas digitales simples y eficientes que permitan
              a cualquier persona tomar el control de su dinero, mejorar sus
              hábitos financieros y alcanzar sus metas económicas.
            </Typography>
          </Paper>

          {/* NUEVA SECCIÓN 🔥 */}
          <Paper
            sx={{
              p: 4,
              maxWidth: 800,
              borderRadius: 3,
              background: "white",
              border: "1px solid #E5E7EB",
              boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
            }}
          >
            <Typography variant="h5" color="#1D4ED8" gutterBottom>
              ¿Qué puedes hacer con PigBank?
            </Typography>

            <Typography color="#6B7280">
              • Registrar tus ingresos y gastos fácilmente <br />
              • Tener un control claro de tu balance <br />
              • Consultar tu historial financiero <br />
              • Analizar tu comportamiento económico <br />
              • Mejorar tus hábitos de ahorro
            </Typography>
          </Paper>

          {/* NUEVA SECCIÓN 💡 */}
          <Paper
            sx={{
              p: 4,
              maxWidth: 800,
              borderRadius: 3,
              background: "white",
              border: "1px solid #E5E7EB",
              boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
            }}
          >
            <Typography variant="h5" color="#1D4ED8" gutterBottom>
              Seguridad y confianza 🔒
            </Typography>

            <Typography color="#6B7280">
              En PigBank entendemos que tu información es importante. Por eso
              implementamos buenas prácticas para proteger tus datos y ofrecerte
              una experiencia segura al gestionar tu dinero.
            </Typography>
          </Paper>

          {/* NUEVA SECCIÓN 🚀 */}
          <Paper
            sx={{
              p: 4,
              maxWidth: 800,
              borderRadius: 3,
              background: "white",
              border: "1px solid #E5E7EB",
              boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
            }}
          >
            <Typography variant="h5" color="#1D4ED8" gutterBottom>
              ¿Por qué usar PigBank?
            </Typography>

            <Typography color="#6B7280">
              PigBank no es solo una app de gastos, es una herramienta pensada
              para ayudarte a tomar mejores decisiones financieras. Su diseño
              intuitivo, rápido y moderno te permite enfocarte en lo importante:
              tu dinero.
            </Typography>
          </Paper>
        </Box>
      </Container>

      <Footer />
    </Box>
  );
}

export default Acerca;