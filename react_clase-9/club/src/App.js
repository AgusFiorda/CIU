import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Fragment, useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Formulario from "./components/Formulario";
import Socio from "./components/Socio";
function App() {
  //para almacenar datos en la cache del navegador y nos traemos un item que se llama asociados
  // si es la primera vez que abrimos la web no va a tener nada osea que tendria una lista vacia por
  // el else de la linea 30
  let sociosIniciales = JSON.parse(localStorage.getItem("asociados"));
  if (!sociosIniciales) {
    sociosIniciales = [];
  }

  //creamos un state vacio para la lista de socios.
  const [asociados, editarAsociados] = useState(sociosIniciales);

  // useEffect se usa como bandera cuando cambia el estado de un elemento
  // si hay sociosIniciales entonces anda al localStorage y actualiza la lista de asociados
  // y pasale la lista de asociados
  // si no hay dejala vacia
  useEffect(
    () => {
      if (sociosIniciales) {
        //primer parametro nombre de la lista que se va a guardar en el local storage (puede ser cualquier nombre)
        // y segundo la lista como tal
        localStorage.setItem("asociados", JSON.stringify(asociados));
      } else {
        //si no hay asociados guardamos una lista vacia
        localStorage.setItem("asociados", JSON.stringify([]));
      }
    },
    // es la variable que estamos analizando con el useEffect
    [sociosIniciales]
  );

  //Funcion para borrar el socio
  const borrarSocio = (idSocio) => {
    const nuevosSocios = asociados.filter((socio) => socio.id !== idSocio);
    //sacamos los socios que se borraron de la lista y se agregan los socios que quedaron
    editarAsociados(nuevosSocios);
  };

  //Cambiamos el titulo si no existen socios
  let titulo = asociados.length === 0 ? "Aun no existen socios" : "Socios";

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
          <Col>
            {titulo}
            {
              // guardamos los socios en la lista de asociado
              asociados.map((socio) => (
                <Socio
                  socio={socio}
                  //le pasamos una propiedad key para diferenciar a cada socio
                  key={socio.id}
                  borrarSocio={borrarSocio}
                ></Socio>
              ))
            }
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default App;
