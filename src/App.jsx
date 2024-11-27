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

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clientes/:id" element={<Details />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/productos" element={<Productos />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
