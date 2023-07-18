import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarAceites from "./Components/Navbar/Navbar.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Homepage from "./Pages/HomePage/Homepage";
import DetailPage from "./Pages/DetailPage/DetailPage";
import ShopPage from "./Pages/Shoppage/ShopPage";
import Contacto from "./Pages/ContactPage/ContactPage";
import Marcas from "./Pages/Category/Category";
import { ProductosContext } from "./context/Context.js";

function App() {

  const [carrito, setCarrito] = useState([])

  const agregarAlCarrito = (item, cantidad) => {
    const itemAgregado = {...item, cantidad}
    const nuevoCarrito = [...carrito]
    const estaEnElCarrito = nuevoCarrito.find((producto) => producto.id === itemAgregado.id);

    // console.log(itemAgregado)
    if(estaEnElCarrito){
      estaEnElCarrito.cantidad += cantidad
    }else{
      nuevoCarrito.push(itemAgregado)
    }
    setCarrito(nuevoCarrito)
    console.log(carrito)
  }

  const cantidadEnCarrito = () => {
    return carrito.reduce((acc, prod) => acc + prod.cantidad, 0)
  }

  const precioTotal = () => {
    return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0)
  }

  const vaciarCarrito = () => {
    setCarrito([])
  }

  return (
    <BrowserRouter>
      <ProductosContext.Provider value={{carrito, agregarAlCarrito, cantidadEnCarrito, precioTotal, vaciarCarrito}}>
        <NavbarAceites />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Marcas/:Marcas" element={<Marcas />} />
          <Route path="/Checkout" element={<ShopPage />} />
          <Route path="/Detalle/:id" element={<DetailPage />} />
          <Route path="/Contacto" element={<Contacto />} />
        </Routes>
      </ProductosContext.Provider>
    </BrowserRouter>
  );
}

export default App;
