import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";
function App() {
  //creamos nuestro primer Hook
  const [servicios, agregarServicio] = useState([
    {
      id: 1,
      nombre: "Consulta ",
      precio: 2500,
    },
    {
      id: 1,
      nombre: "Royal Canning",
      precio: 1500,
    },
  ]);

  return (
    <div>
      <Header />
      <h1>Veterinaria unahur</h1>
      {servicios.map((servicio) => (
        <p>
          {servicio.id} | {servicio.nombre} | {servicio.precio}
        </p>
      ))}
      <Footer red="Twitter" />
    </div>
  );
}

export default App;
