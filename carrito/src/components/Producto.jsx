import { createFactory } from "react";
import { React } from "react";

const Producto = ({ producto, productos, changuito, agregarProducto }) => {
  //extraemos los valores de producto
  const { id, articulo, precio } = producto;

  //funcion para comprar un producto
  const seleccionarProducto = (id, unico) => {
    console.log("changuito 1:", changuito);

    const producto = productos.filter((producto) => producto.id === id)[0];
    //agregamos los ... para que la lista no se sobreescriba y se guarde al final

    agregarProducto([...changuito, producto]);
    console.log("changuito seleccionarProducto:", changuito);
  };

  //funcion para eliminar un producto
  const eliminarProd = (id) => {
    console.log("key: ", id);
    const prod = changuito.filter((prod) => prod.id !== id);
    //sacamos los socios que se borraron de la lista y se agregan los socios que quedaron
    agregarProducto(prod);
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
        <button type="button" onClick={() => eliminarProd(id)}>
          Comprar
        </button>
      )}
      <br />
    </>
  );
};

export default Producto;
