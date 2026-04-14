import { Box, Typography, Link, Stack } from "@mui/material";
import { Facebook, Twitter, Instagram, Email, Phone } from '@mui/icons-material';

function Footer() {
  return (
    <Box
      sx={{
        py: 6,
        px: 4,
        background: "#0B1F3A", // azul oscuro bancario
        borderTop: "1px solid #1E3A5F",
        color: "white",
      }}
    >
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography
          variant="h5"
          sx={{
            background: "linear-gradient(90deg, #1D4ED8, #60A5FA)", // azul degradado
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "bold",
          }}
        >
          PigBank💰
        </Typography>
        <Typography variant="body2" color="#AAB4C3">
          Controla tus gastos y finanzas
        </Typography>
      </Box>

      {/* Contacto */}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-around"
        alignItems="center"
        spacing={3}
        mb={4}
      >
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="subtitle1" fontWeight="bold">
            Contacto
          </Typography>
          <Typography variant="body2" color="#AAB4C3">
            <Email fontSize="small" sx={{ mr: 0.5 }} />
            PigBank@finanzas.com
          </Typography>
          <Typography variant="body2" color="#AAB4C3">
            <Phone fontSize="small" sx={{ mr: 0.5 }} />
            +57 300 124 5568
          </Typography>
        </Box>

        {/* Redes sociales */}
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="subtitle1" fontWeight="bold">
            Síguenos
          </Typography>
          <Stack direction="row" spacing={2} justifyContent="center" mt={1}>
            <Link href="#" color="#60A5FA"><Facebook /></Link>
            <Link href="#" color="#60A5FA"><Twitter /></Link>
            <Link href="#" color="#60A5FA"><Instagram /></Link>
          </Stack>
        </Box>

        {/* Dirección */}
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="subtitle1" fontWeight="bold">
            Dirección
          </Typography>
          <Typography variant="body2" color="#AAB4C3">
            Calle pigtrend 39 cr 233
          </Typography>
        </Box>
      </Stack>

      <Typography variant="caption" color="#AAB4C3" display="block" textAlign="center">
        © {new Date().getFullYear()} PigBank. Todos los derechos reservados.
      </Typography>
    </Box>
  );
}

export default Footer;