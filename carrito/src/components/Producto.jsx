import { React } from "react";

const Producto = ({ producto, productos, changuito, agregarProducto }) => {
  //extraemos los valores de producto
  const { id, articulo, precio, cantidad } = producto;

  //funcion para comprar un producto
  const seleccionarProducto = (producto) => {
    const inCart = changuito.find((prod) => prod.id === producto.id);
    console.log("inCart Seleccionar", inCart);

    if (inCart) {
      console.log("entre aca");
      agregarProducto(
        changuito.map((prod) => {
          if (prod.id === producto.id) {
            console.log("entre, ", inCart);
            return { ...inCart, cantidad: inCart.cantidad + 1 };
          } else return prod;
        })
      );
    } else {
      agregarProducto([...changuito, { ...producto, cantidad: 1 }]);
    }
  };

  //funcion para eliminar un producto
  const eliminarProd = (producto) => {
    const inCart = changuito.find((prod) => prod.id === producto.id);

    if (inCart.cantidad === 1) {
      agregarProducto(changuito.filter((prod) => prod.id !== producto.id));
    } else {
      agregarProducto(
        changuito.map((prod) => {
          if (prod.id === producto.id) {
            return { ...inCart, cantidad: inCart.cantidad - 1 };
          } else return prod;
        })
      );
    }

    console.log("InCart eliminar", inCart);
  };

  return (
    <>
      {id} | {articulo} | {precio} {cantidad === 0 ? "" : "| " + cantidad}
      <br></br>
      {productos ? (
        <button type="button" onClick={() => seleccionarProducto(producto)}>
          Comprar
        </button>
      ) : (
        <button type="button" onClick={() => eliminarProd(producto)}>
          Eliminar
        </button>
      )}
      <br />
    </>
  );
};

export default Producto;
