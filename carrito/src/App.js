import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Producto from "./components/Producto";
import Changuito from "./components/Changuito";
import { useState } from "react";

function App() {
  //creamos una lista de productos
  const [productos, guardarProductos] = useState([
    { id: 0, articulo: "Guitarra", precio: 80000 },
    { id: 1, articulo: "Bateria", precio: 150000 },
    { id: 2, articulo: "Microfono", precio: 30000 },
    { id: 3, articulo: "Flauta", precio: 10000 },
  ]);

  //creamos nuestro changuito de compras
  const [changuito, agregarProducto] = useState([]);

  return (
    <>
      <Header titulo="Tienda de musica"></Header>
      <h1>Listado de productos</h1>
      {productos.map((producto) => (
        <Producto
          producto={producto}
          productos={productos}
          key={producto.id}
          changuito={changuito}
          agregarProducto={agregarProducto}
        ></Producto>
      ))}
      <Changuito changuito={changuito}></Changuito>
      <Footer></Footer>
    </>
  );
}

export default App;
