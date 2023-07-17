import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Badge } from "react-bootstrap";
import "./Cartwidget.css";
import { Link } from "react-router-dom";
const CartWidget = ({ itemCount }) => {
  return (
    <div className="carrito">
      <Link to={"/Checkout"}>
        <FontAwesomeIcon icon={faShoppingCart} size="lg" />
        {itemCount > 0 && (
          <Badge pill bg="danger" className="cart-badge">
            {itemCount}
          </Badge>
        )}
      </Link>
    </div>
  );
};

export default CartWidget;
