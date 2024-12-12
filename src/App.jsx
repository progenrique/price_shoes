import React, { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Clientes from "./components/Clientes";
import {
  BrowserRouter,
  HashRouter,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";
import Details from "./components/Details";
import Productos from "./components/Productos";

import Pedidos from "./components/Pedidos";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detalles/:id" element={<Details />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/clientes/:id/pedido" element={<Pedidos />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
