import React, { useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
// Archivo CSS para los estilos personalizados

import "./ItemDetailContainer.css"; // Archivo CSS para los estilos personalizados
import ItemCount from "../AddItemButton/AddItemButton";
import { ProductosContext } from "../../context/Context";

const ItemDetailContainer = ({ item }) => {
  // const { carrito, agregarAlCarrito } = useContext(ProductosContext);
  const { agregarAlCarrito } = useContext(ProductosContext);

  const [cantidad, setCantidad] = useState(1);

  // console.log('itemAA', item)
  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
  };

  const handleSumar = () => {
    cantidad < item.stock && setCantidad(cantidad + 1);
  };

  return (
    <Container fluid className="item-detail-container">
      <Row>
        <Col xs={12} md={6} className="item-image">
          <Image src={item.url} alt="foto" fluid />
          <h4 className="item-brand">{item.marca}</h4>
        </Col>
        <Col xs={12} md={6} className="item-details">
          <h1 className="item-name">{item.nombre}</h1>
          <h2 className="item-price">AR$ {item.precio}</h2>
          <p className="item-description">{item.descripcion}</p>

          <ItemCount
            cantidad={cantidad}
            handleSumar={handleSumar}
            handleRestar={handleRestar}
            handleAgregar={() => {
              agregarAlCarrito(item, cantidad);
            }}
          />
          <p>"(10 MAXIMO)"</p>
        </Col>
      </Row>
    </Container>
  );
};
export default ItemDetailContainer;
