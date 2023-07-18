import { Alert } from "react-bootstrap";

const MessageSuccess = ({ purchaseID }) => {
  return (
    <Alert variant="success">
      Gracias por su compra! su id de transacción es: {purchaseID}
    </Alert>
  );
};

export default MessageSuccess;
