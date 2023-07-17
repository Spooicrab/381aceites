import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarAceites from "./Components/Navbar/Navbar.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Homepage from "./Pages/HomePage/Homepage";
import DetailPage from "./Pages/DetailPage/DetailPage";
import ShopPage from "./Pages/Shoppage/ShopPage";
import Contacto from "./Pages/ContactPage/ContactPage";
import Marcas from "./Pages/Category/Category";

function App() {
  return (
    <BrowserRouter>
      <NavbarAceites />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Marcas/:Marcas" element={<Marcas />} />
        <Route path="/Checkout" element={<ShopPage />} />
        <Route path="/Detalle/:id" element={<DetailPage />} />
        <Route path="/Contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
