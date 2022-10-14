import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Fragment, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Formulario from "./components/Formulario";

function App() {
  //creamos un state vacio para la lista de socios.
  const [asociados, editarAsociados] = useState([]);

  //creamos funcion que recibe un socio y lo agrega a la lista de asociados
  const agregarSocio = (socio) => {
    editarAsociados([
      // ...asociados lo que haces es que no pisa la lista de socios sino que lo agrega
      // a la lista que ya tenemos al nuevo socio.
      ...asociados,
      socio,
    ]);
  };

  return (
    <Fragment>
      <Container>
        <Row>
          <Col>Club social y deportivo</Col>
        </Row>
        <Row>
          <Formulario
            // le pasamos la funcion de agregar socio al formulario
            agregarSocio={agregarSocio}
          />
          <Col>Lista de socios</Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default App;
