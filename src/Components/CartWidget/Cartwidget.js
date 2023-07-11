import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Badge } from "react-bootstrap";

const CartWidget = ({ itemCount }) => {
  return (
    <div>
      <FontAwesomeIcon icon={faShoppingCart} size="lg" />
      {itemCount > 0 && (
        <Badge pill bg="danger" className="cart-badge">
          {itemCount}
        </Badge>
      )}
    </div>
  );
};

export default CartWidget;
