import { React, useState } from "react";

const Producto = ({ producto, productos, changuito, agregarProducto }) => {
  //extraemos los valores de producto
  const { id, articulo, precio } = producto;

  //funcion para comprar un producto
  const seleccionarProducto = (id) => {
    const producto = productos.filter((producto) => producto.id === id)[0];
    //agregamos los ... para que la lista no se sobreescriba y se guarde al final
    agregarProducto([...changuito, producto]);
    console.log(changuito);
  };

  //funcion para eliminar un producto
  const eliminarProducto = (id) => {
    console.log(id);
  };

  return (
    <>
      {id} | {articulo} | {precio}
      <br></br>
      {productos ? (
        <button type="button" onClick={() => seleccionarProducto(id)}>
          Comprar
        </button>
      ) : (
        <button type="button" onClick={() => eliminarProducto(id)}>
          Eliminar
        </button>
      )}
      <br />
    </>
  );
};

export default Producto;
