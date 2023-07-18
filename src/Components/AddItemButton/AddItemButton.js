import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import "./AddItemButton.css";
import { ProductosContext } from "../../context/Context";



 const ItemCount = ({ cantidad, handleAgregar, handleRestar, handleSumar }) => {

  const {carrito, setCarrito} = useContext(ProductosContext)


  // const [count, setCount] = useState(0);
  //  const restar = () => {
  //   if (count > 0) {
  //     setCount(count - 1);
  //   }
  // };
  //  const sumar = () => {
  //   setCount(count + 1);
  // };
  //  const addToCart = () => {
  //   console.log("agregado!");

  // };
   return (
    <div className="item-count">
      <Button variant="primary" className="count-button" onClick={handleRestar}>
        -
      </Button>
      <p>{cantidad}</p>
      <Button variant="primary" className="count-button" onClick={handleSumar}>
        +
      </Button>
       <Button variant="success" onClick={handleAgregar}>
        Añadir al carrito
      </Button>
    </div>
  );
};
 export default ItemCount;