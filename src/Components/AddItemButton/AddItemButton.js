import "./AddItemButton.css";
import React, { useContext } from "react";

import Button from "react-bootstrap/Button";

import { ProductosContext } from "../../context/Context";

//
const ItemCount = ({ cantidad, handleAgregar, handleRestar, handleSumar }) => {
  // const { carrito, setCarrito } = useContext(ProductosContext);
  useContext(ProductosContext);

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
