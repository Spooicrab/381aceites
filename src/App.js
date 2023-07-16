import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavbarAceites from "./Components/Navbar/Navbar.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Components/logo.png";
import Homepage from "./Pages/HomePage/Homepage";
import Category from "./Pages/Category/Category";
import DetailPage from "./Pages/DetailPage/DetailPage";
import ShopPage from "./Pages/Shoppage/ShopPage";

function App() {
  return (
    <BrowserRouter>
      <NavbarAceites />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Categorias" element={<Category />} />
        <Route path="/Checkout" element={<ShopPage />} />
        <Route path="/Detalle" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
