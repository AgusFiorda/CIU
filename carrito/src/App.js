import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Producto from "./components/Producto";
import Changuito from "./components/Changuito";
import { useState } from "react";

function App() {
  const [url, editar] = useState("");

  const consultarApi = async () => {
    const url = "https://api.thecatapi.com/v1/images/search";
    try {
      const api = await fetch(url);
      const resultado = await api.json();
      console.log("El resultado: ", resultado[0].url);
      editar(resultado[0].url);
    } catch (error) {
      console.log("Ha ocurrido un error al consultar la API: ", error);
    }
  };

  //creamos una lista de productos
  const [productos, guardarProductos] = useState([
    { id: 0, articulo: "Guitarra", precio: 80000, cantidad: 0 },
    { id: 1, articulo: "Bateria", precio: 150000, cantidad: 0 },
    { id: 2, articulo: "Microfono", precio: 30000, cantidad: 0 },
    { id: 3, articulo: "Flauta", precio: 10000, cantidad: 0 },
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
      <Changuito
        changuito={changuito}
        agregarProducto={agregarProducto}
      ></Changuito>
      <Footer></Footer>
      <button onClick={consultarApi}>Consultar API</button>
      <br />
      <img src={url} alt=""></img>
    </>
  );
}

export default App;
