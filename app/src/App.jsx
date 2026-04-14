import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./features/views/Home.jsx";
import Login from "./features/auth/components/Login.jsx";
import { ApiRyC } from "./features/api/components/ApiRyC_Axios.jsx";  
import Gastos from "./features/auth/dashboard/Gastos.jsx";
import Acerca from "./features/views/Acerca.jsx";
 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
       <Route path="/ApiRyC" element={<ApiRyC />} />
        <Route path="/gastos" element={<Gastos />} />
        <Route path="/acerca" element={<Acerca />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;