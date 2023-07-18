import React, { useContext } from "react";

import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

import { Container, Row, Col, Button } from "react-bootstrap";

import { ProductosContext } from "../../context/Context";
import Formulario from "../../Components/Formulario/Formulario";

const ShopPage = () => {
  //

  const enviarDatos = async (datosFormulario) => {
    // Guardar los datos del formulario en Firebase

    const carritoRef = await addDoc(collection(db, "Carrito"), carrito);
    console.log("Carrito guardado con el ID: ", carritoRef.id);

    // Vaciar el carrito después de guardar los datos
    vaciarCarrito();
  };
  //

  const { carrito, precioTotal, vaciarCarrito } = useContext(ProductosContext);
  const handleVaciar = () => {
    vaciarCarrito();
  };
  return (
    <Container>
      <div style={{ padding: "2em" }}>
        <h1>CARRITO DE COMPRAS</h1>
        <br />
        {carrito.map((item) => (
          <Row key={item.id} style={{ marginTop: "20px" }}>
            <Col xs={6} md={4}>
              <img src={item.url} alt="img" style={{ height: "150px" }}></img>
            </Col>
            <Col xs={6} md={8}>
              <Row>
                <h3>
                  nombre: <b>{item.nombre}</b>
                </h3>
              </Row>
              <Row>
                <h5>
                  marca: <b>{item.marca}</b>
                </h5>
              </Row>
              <Row>
                <h5>
                  cantidad: <b>{item.cantidad}</b>
                </h5>
              </Row>
              <Row>
                <h5>
                  precio: <b>{item.precio}</b>
                </h5>
              </Row>
              <br />
            </Col>
          </Row>
        ))}
        <h2>
          <b>TOTAL: </b> ${precioTotal()}{" "}
        </h2>
        <Button style={{ marginTop: "2em" }} onClick={handleVaciar}>
          vaciar carrito
        </Button>
        <Container>
          <div className="text-center">
            <h2 style={{ marginTop: "40px" }}>CONCRETAR COMPRA</h2>
          </div>
        </Container>
      </div>
      <Formulario enviarDatos={enviarDatos} />
    </Container>
  );
};
export default ShopPage;
