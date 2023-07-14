import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Cards({ data }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={data.url}
        style={{ width: "100%", height: "350px" }}
      />
      <Card.Body style={{ backgroundColor: "#554348", fontSize:"17px" }}>
        <Card.Title>{data.nombre}</Card.Title>
        <Card.Text>{data.marca}</Card.Text>
        <Button variant="primary">Ver más</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;
