import React, { useContext } from "react";
import Formulario from "../../Components/Formulario/Formulario";
import { ProductosContext } from "../../context/Context";

const ShopPage = () => {
 
  const { carrito, precioTotal, vaciarCarrito } = useContext(ProductosContext)

  const handleVaciar = () => {
    vaciarCarrito()
  }

  return (
    <>
    <div style={{padding: '2em'}}>
      <h1>CARRITO DE COMPRAS</h1>
      <br/>
      {
        carrito.map((item) => (
         <div>
          <h3>nombre:  <b>{item.nombre}</b></h3>
          <h5>marca:  <b>{item.marca}</b></h5>
          <h5>cantidad:  <b>{item.cantidad}</b></h5>
          <h5>precio:  <b>{item.precio}</b></h5>
          <br/>
         </div>
        ))
      }
      <h2><b>TOTAL: </b> ${precioTotal()} </h2>

      <button style={{marginTop:'2em'}} onClick={handleVaciar}>vaciar carrito</button>
    </div>


     <Formulario />

    </>
  
  )
};

export default ShopPage;
