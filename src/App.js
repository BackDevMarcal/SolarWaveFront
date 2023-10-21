import Login from "./components/Login";
import Paginainicial from "./components/PaginaInicial";
import Logado from "./components/Logado";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import React from "react";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Paginainicial />} />
          <Route path="/logado" element={<Logado />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        {/* <Paginainicial /> */}
        {/* <Login /> */}
      </Router>
    </div>
  );
}

export default App;
