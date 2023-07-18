import React from "react";
import { Container } from "react-bootstrap";
import logo from "../../Components/Banner/cambiar-aceite-de-carro-2048x1356.jpg";
import ItemListContainer from "../../Components/ItemListContainer/ItemListContainer";

const Homepage = () => {
  return (
    <div>
      <Container fluid>
        <img
          src={logo}
          alt="banner"
          className="img-fluid"
          style={{ height: "400px", width: "100%", padding: "10px" }}
        ></img>
      </Container>
      <ItemListContainer />
    </div>
  );
};

export default Homepage;
