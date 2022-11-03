import React, { Fragment, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { v4 as uuid } from "uuid";
const Formulario = ({ agregarSocio }) => {
  // estado para el error del formulario
  const [error, setError] = useState(false);

  //creamos un hook de estado para guardar los datos
  //creamos un socio vacio y lo inicalizamos con un hook de estado.
  const [socio, editarSocio] = useState({
    nombre: "",
    dni: "",
  });

  //Extraemos valore.. Siempre que usemos nombre y dni va a ser de socios.
  const { nombre, dni } = socio;

  //obtenemos lo que el usuario escribe en el formulario
  const handleChange = (e) => {
    // esa variable e es como si fuera toda la informacion de la pagina web
    editarSocio({
      // cuando se ejecute editarSocio le va agregando la concatenacion de las letras que se escriben
      // basicamente guarda la palabra completa que se escribio en el input.
      ...socio,
      // toma la variable name(ya sea el input de nombre o el de dni) y la asigna el valor.
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log("Formulario enviado");

    // guarda la informacion que nos llega del formulario
    // manejo de errores
    // trim le quita los espacios en blancos
    if (nombre.trim() === "" || dni.trim() === "") {
      setError(true);
      return;
    }
    // por las dudas lo ponemos en false
    setError(false);

    // generar el socio
    // ponerle un id al socio con la libreria uuid, ademas creamos una nueva variable id en socio.
    socio.id = uuid();
    agregarSocio(socio);

    // chequar existencia

    // limpiar el formaulario o sino e.target.reset() limpia el formulario
    editarSocio({
      nombre: "",
      dni: "",
    });
  };

  return (
    <Fragment>
      <Form onSubmit={submitForm}>
        <Form.Group>
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresar su nombre"
            name="nombre"
            //especifica que es lo que pasa mientras el usuario modifica los inpunts
            onChange={handleChange}
            // es para enlazar el input que completa el usuario con alguna variable creada.
            value={nombre}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>DNI</Form.Label>
          <Form.Control
            type="text"
            placeholder="Sin puntos ni espacios"
            name="dni"
            onChange={handleChange}
            value={dni}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Ingresar Socio
        </Button>
      </Form>
      {error ? <h4>Completa todos los campos</h4> : null}
    </Fragment>
  );
};

export default Formulario;
