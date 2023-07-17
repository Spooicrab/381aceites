import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "./AddItemButton.css";
const ItemCount = ({ cantidad }) => {
  cantidad = 0;
  const [count, setCount] = useState(cantidad);
  const restar = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const sumar = () => {
    setCount(count + 1);
  };

  return (
    <div className="item-count">
      <Button variant="primary" className="count-button" onClick={restar}>
        -
      </Button>
      <p>{count}</p>
      <Button variant="primary" className="count-button" onClick={sumar}>
        +
      </Button>
    </div>
  );
};
export default ItemCount;
