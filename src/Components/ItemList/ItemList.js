import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Cards({ data }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={data.url}
        style={{ width: "100%", height: "350px" }}
      />
      <Card.Body style={{ backgroundColor: "#554348", fontSize: "17px" }}>
        <Card.Title>{data.nombre}</Card.Title>
        <Card.Text>{data.marca}</Card.Text>
        <Link to={`/Detalle/${data.id}`} style={{ textDecoration: "none" }}>
          <Button variant="primary">Ver más</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Cards;
