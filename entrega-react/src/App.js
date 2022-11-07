import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Producto from "./components/Producto";
import Changuito from "./components/Changuito";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  //creamos una lista de productos
  const [productos, guardarProductos] = useState([
    {
      id: 0,
      articulo: "Bicicleta",
      precio: 80000,
      cantidad: 0,
      img: "https://www.heavenimagenes.com/heavencommerce/c83c32f5-6b0f-49ad-9ae3-df05162521b5/images/v2/Olmo/2001211401341010_02_medium.jpg",
      name: "bicicleta",
    },
    {
      id: 1,
      articulo: "Moto",
      precio: 150000,
      cantidad: 0,
      img: "http://motos-b60.kxcdn.com/sites/default/files/yamaha_yzf_r1_2016.png",
      name: "moto",
    },
    {
      id: 2,
      articulo: "Auto",
      precio: 30000,
      cantidad: 0,
      img: "https://tn.com.ar/resizer/E6tWKruO5ZTFoRl82otmjGfUYQE=/1440x0/smart/filters:format(webp)/cloudfront-us-east-1.images.arcpublishing.com/artear/RPM6INITWAYYMUG3SSAR74RCRQ.jpg",
      name: "auto",
    },
    {
      id: 3,
      articulo: "Patineta",
      precio: 10000,
      cantidad: 0,
      img: "http://d3ugyf2ht6aenh.cloudfront.net/stores/001/707/768/products/hov001b-11-a6f476df3f223eec9816231030294470-640-0.jpg",
      name: "bicicleta",
    },
  ]);

  //creamos nuestro changuito de compras
  const [changuito, agregarProducto] = useState([]);

  return (
    <>
      <Header titulo="De todo un poco "></Header>
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
    </>
  );
}

export default App;
