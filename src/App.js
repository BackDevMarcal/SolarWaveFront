import Login from "./components/Login";
import Paginainicial from "./components/PaginaInicial";
import Logado from "./components/Logado";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import React from "react";
import LogadoProd from "./components/Logado-Prod";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Paginainicial />} />
          <Route path="/logado" element={<Logado />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logadoprod" element={<LogadoProd />} />
        </Routes>
        {/* <Paginainicial /> */}
        {/* <Login /> */}
      </Router>
    </div>
  );
}

export default App;
