💰 PigBank – Control Inteligente de Finanzas
📌 Descripción

PigBank es una aplicación web desarrollada con React que permite a los usuarios gestionar sus ingresos y gastos de forma clara, rápida y moderna.

El sistema incluye autenticación de usuarios, almacenamiento en base de datos en la nube (MongoDB Atlas) y un panel financiero donde cada usuario puede registrar y visualizar sus movimientos.

🚀 Características principales
🔐 Registro e inicio de sesión seguro
👤 Sesión personalizada por usuario
💸 Registro de ingresos y gastos
📊 Cálculo automático de balance
📋 Historial de movimientos en tiempo real
☁️ Base de datos en MongoDB Atlas
🔄 Consumo de API con Axios
🎨 Interfaz moderna estilo banco
🚀 Preparado para despliegue (Render + Vercel)

🛠️ Tecnologías utilizadas:
Frontend
React
Vite
Material UI (MUI)
Axios
React Router
Backend
Node.js
Express
MongoDB Atlas
Mongoose
bcrypt
Deploy
Vercel (Frontend)
Render (Backend)
MongoDB Atlas (Base de datos)

📁 Estructura del proyecto

T4/
├── backend/
│   ├── models/
│   │   ├── User.js
│   │   └── Gasto.js
│   └── index.js
│
├── public/
│   └── img/
│
├── src/
│   ├── features/
│   │   ├── auth/
│   │   │   └── components/
│   │   │       └── Login.jsx
│   │   ├── layout/
│   │   │   ├── components/
│   │   │   │   ├── Header.jsx
│   │   │   │   └── Footer.jsx
│   │   ├── views/
│   │   │   ├── Home.jsx
│   │   │   ├── Gastos.jsx
│   │   │   ├── Acerca.jsx
│   │   │   └── ApiRyC.jsx
│
├── App.jsx
└── main.jsx
```

⚙️ Instalación
git clone https://github.com/estebanmoreno22/Gastos.git
cd T4
npm install
Backend
cd backend
npm install
node index.js
Frontend
npm run dev

▶️ Ejecución
Backend:
node index.js
Frontend:
npm run dev

📸 Capturas
🔐 Login

💰 Panel financiero

📊 Resumen

🌍 Deploy
🔵 Frontend: (pendiente)
🟢 Backend: (pendiente)
👨‍💻 Autor

Esteban Moreno
📍 ADSO - SENA
💻 Desarrollador Full Stack en formación
