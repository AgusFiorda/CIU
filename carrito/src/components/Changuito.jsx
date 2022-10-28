import React from "react";
import "../styles/changuito.css";
import Producto from "./Producto";

const Changuito = ({ changuito }) => {
  return (
    <>
      <div className="changuito">
        <h3>Changuito de compras</h3>
        {changuito.map((producto) => (
          <Producto key={producto.id} producto={producto}></Producto>
        ))}
      </div>
    </>
  );
};

export default Changuito;
