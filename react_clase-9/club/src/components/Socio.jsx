import React, { Fragment } from "react";
import { Badge, Button } from "react-bootstrap";

//sfc para que cree la arround fuction y el export default
const Socio = ({ socio, borrarSocio }) => {
  return (
    <Fragment>
      <Badge bg="secondary">
        <p>Socio: {socio.id}</p>
        <p>Nombre: {socio.nombre}</p>
        <p>DNI: {socio.dni}</p>
        <Button
          variant="light"
          //esta sintaxis es para decir que esa funcion se va a ejecutar solo cuando se haga click en el boton.
          onClick={() => borrarSocio(socio.id)}
        >
          Borrar
        </Button>
      </Badge>
    </Fragment>
  );
};

export default Socio;
