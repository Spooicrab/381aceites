import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button, Form as BootstrapForm } from "react-bootstrap";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import "./Formulario.css";

const validationSchema = Yup.object().shape({
  nombre: Yup.string().required("El nombre es obligatorio"),
  apellido: Yup.string().required("El apellido es obligatorio"),
  telefono: Yup.string().required("El teléfono es obligatorio"),
  email: Yup.string()
    .email("Ingrese un correo válido")
    .required("El correo es obligatorio"),
  confirmarEmail: Yup.string()
    .oneOf([Yup.ref("email"), null], "Los correos no coinciden")
    .required("Confirme su correo"),
});

const Formulario = () => {
  const handleSubmit = async (values, { resetForm }) => {
    try {
      const docRef = await addDoc(collection(db, "Pedidos"), values);
      console.log("Document written with ID: ", docRef.id);
      resetForm();
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <Formik
      initialValues={{
        nombre: "",
        apellido: "",
        telefono: "",
        email: "",
        confirmarEmail: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="formulario">
        <BootstrapForm.Group controlId="nombre">
          <BootstrapForm.Label>Nombre</BootstrapForm.Label>
          <Field type="text" name="nombre" as={BootstrapForm.Control} />
          <ErrorMessage
            name="nombre"
            component={BootstrapForm.Text}
            className="error"
          />
        </BootstrapForm.Group>

        <BootstrapForm.Group controlId="apellido">
          <BootstrapForm.Label>Apellido</BootstrapForm.Label>
          <Field type="text" name="apellido" as={BootstrapForm.Control} />
          <ErrorMessage
            name="apellido"
            component={BootstrapForm.Text}
            className="error"
          />
        </BootstrapForm.Group>

        <BootstrapForm.Group controlId="telefono">
          <BootstrapForm.Label>Teléfono</BootstrapForm.Label>
          <Field type="text" name="telefono" as={BootstrapForm.Control} />
          <ErrorMessage
            name="telefono"
            component={BootstrapForm.Text}
            className="error"
          />
        </BootstrapForm.Group>

        <BootstrapForm.Group controlId="email">
          <BootstrapForm.Label>Email</BootstrapForm.Label>
          <Field type="email" name="email" as={BootstrapForm.Control} />
          <ErrorMessage
            name="email"
            component={BootstrapForm.Text}
            className="error"
          />
        </BootstrapForm.Group>

        <BootstrapForm.Group controlId="confirmarEmail">
          <BootstrapForm.Label>Confirmar Email</BootstrapForm.Label>
          <Field
            type="email"
            name="confirmarEmail"
            as={BootstrapForm.Control}
          />
          <ErrorMessage
            name="confirmarEmail"
            component={BootstrapForm.Text}
            className="error"
          />
        </BootstrapForm.Group>

        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </Formik>
  );
};

export default Formulario;
