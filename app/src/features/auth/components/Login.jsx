import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
  Paper,
  Link,
  IconButton,
  InputAdornment
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import axios from "axios";

import Header from "../../layout/components/Header.jsx";
import Footer from "../../layout/components/Footer.jsx";

function Login() {
  const [form, setForm] = useState("login");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const validate = (name, value) => {
    let error = "";

    if (name === "email") {
      if (!value) error = "El correo es obligatorio";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
        error = "Correo no válido";
    }

    if (name === "password") {
      if (!value) error = "La contraseña es obligatoria";
      else if (value.length < 6)
        error = "Mínimo 6 caracteres";
    }

    if (name === "confirmPassword") {
      if (value !== password)
        error = "Las contraseñas no coinciden";
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (errors.email || errors.password || errors.confirmPassword) {
      alert("Corrige los errores antes de continuar");
      return;
    }

    if (form === "register") {
      try {
        await axios.post("https://pigbank-backend.onrender.com/api/auth/register", {
          email,
          password,
        });

        alert("Usuario registrado ");
        setForm("login");

      } catch (error) {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Error de conexión con el servidor");
        }
      }
      return;
    }

    if (form === "login") {
      try {
        const response = await axios.post(
          "https://pigbank-backend.onrender.com/api/auth/login",
          { email, password }
        );

        const user = response.data.user;
        localStorage.setItem("user", JSON.stringify(user));

        alert(`Bienvenido ${user.email} `);
        window.location.href = "/gastos";

      } catch (error) {
        if (error.response?.status === 400 || error.response?.status === 401) {
          alert(error.response.data.message);
        } else {
          alert("Error del servidor");
        }
      }
      return;
    }

    if (form === "recover") {
      alert("Se envió un enlace de recuperación 📧");
    }
  };

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

      <Container sx={{ flex: 1, py: 8 }}>
        <Paper
          sx={{
            maxWidth: 420,
            mx: "auto",
            p: 5,
            borderRadius: 3,
            background: "white",
            border: "1px solid #E5E7EB",
            boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
          }}
        >
          {/* LOGO */}
          <Typography
            textAlign="center"
            fontWeight="bold"
            color="#1D4ED8"
            mb={1}
          >
            PigBank 💰
          </Typography>

          {/* TÍTULO */}
          <Typography
            variant="h4"
            fontWeight="bold"
            textAlign="center"
            color="#0B1F3A"
            gutterBottom
          >
            {form === "login"
              ? "Iniciar sesión"
              : form === "register"
              ? "Crear cuenta"
              : "Recuperar contraseña"}
          </Typography>

          <Typography textAlign="center" color="#6B7280" mb={3}>
            Accede a tu cuenta de forma segura
          </Typography>

          {/* FORM */}
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: "flex", flexDirection: "column", gap: 3 }}
          >
            <TextField
              label="Correo electrónico"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                validate("email", e.target.value);
              }}
              fullWidth
              error={!!errors.email}
              helperText={errors.email}
            />

            {form !== "recover" && (
              <>
                <TextField
                  label="Contraseña"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    validate("password", e.target.value);
                  }}
                  fullWidth
                  error={!!errors.password}
                  helperText={errors.password}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />

                {form === "login" && (
                  <Box sx={{ textAlign: "right" }}>
                    <Link
                      component="button"
                      color="#1D4ED8"
                      onClick={() => setForm("recover")}
                    >
                      ¿Olvidaste tu contraseña?
                    </Link>
                  </Box>
                )}
              </>
            )}

            {form === "register" && (
              <TextField
                label="Confirmar contraseña"
                type={showPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  validate("confirmPassword", e.target.value);
                }}
                fullWidth
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword}
              />
            )}

            <Box sx={{ display: "flex", gap: 2 }}>
              <Button
                type="submit"
                fullWidth
                sx={{
                  py: 1.5,
                  fontWeight: "bold",
                  background: "linear-gradient(90deg, #1D4ED8, #60A5FA)",
                  color: "white",
                }}
              >
                {form === "login"
                  ? "Iniciar sesión"
                  : form === "register"
                  ? "Crear cuenta"
                  : "Enviar recuperación"}
              </Button>

              <Button
                type="button"
                fullWidth
                onClick={() => {
                  setForm("login");
                  setEmail("");
                  setPassword("");
                  setConfirmPassword("");
                }}
                sx={{
                  py: 1.5,
                  fontWeight: "bold",
                  color: "#6B7280",
                  border: "1px solid #D1D5DB",
                }}
              >
                Cancelar
              </Button>
            </Box>
          </Box>

          {/* LINKS */}
          <Box sx={{ textAlign: "center", mt: 2 }}>
            {form === "login" && (
              <Link
                component="button"
                color="#1D4ED8"
                onClick={() => setForm("register")}
              >
                Crear cuenta
              </Link>
            )}

            {form !== "login" && (
              <Link
                component="button"
                color="#1D4ED8"
                onClick={() => setForm("login")}
              >
                Volver al login
              </Link>
            )}
          </Box>
        </Paper>
      </Container>

      <Footer />
    </Box>
  );
}

export default Login;