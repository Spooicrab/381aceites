import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "./ItemDetailContainer.css"; // Archivo CSS para los estilos personalizados
const ItemDetailContainer = ({ data }) => {
  return (
    <Container fluid className="item-detail-container">
      <Row>
        <Col xs={12} md={6} className="item-image">
          <Image src={data.url} alt="foto" fluid />
          <h4 className="item-brand">{data.marca}</h4>
        </Col>
        <Col xs={12} md={6} className="item-details">
          <h1 className="item-name">{data.nombre}</h1>
          <h2 className="item-price">AR$ {data.precio}</h2>
          <p className="item-description">{data.descripcion}</p>
        </Col>
      </Row>
    </Container>
  );
};
export default ItemDetailContainer;
