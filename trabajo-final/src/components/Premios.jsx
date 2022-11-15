import React from "react";
import primerPuesto from "../assets/primer.jpg";
import monitor from "../assets/monitor2.jpg";
import teclado from "../assets/teclado.jpg";

const Premios = () => {
  return (
    <>
      <div id="premios">
        <p className="text-center text-white  text-5xl pt-20 font-semibold ">
          Premios
        </p>
        <section className="grid grid-cols-3 mt-20 px-20 text-center text-white">
          <div className=" mx-2">
            <h2 className="text-2xl uppercase font-semibold my-2">
              Primer puesto
            </h2>
            <img
              className="transition duration-500 ease-in-out transform hover:-translate-y-2 hover:rotate-4 hover:scale-125  w-96"
              src={primerPuesto}
              alt=""
            />
            <p className="mt-2">Setup gammer full </p>
          </div>
          <div className="mx-2">
            <h2 className="text-2xl uppercase font-semibold my-2">
              Segundo puesto
            </h2>
            <img
              className="transition duration-500 ease-in-out transform hover:-translate-y-2 hover:rotate-4 hover:scale-125  w-96"
              src={monitor}
              alt=""
            />
            <p className="mt-8">Monitor curvo gammer</p>
          </div>
          <div className="mx-2">
            <h2 className="text-2xl uppercase font-semibold my-2">
              Tercer puesto
            </h2>
            <img
              className="transition duration-500 ease-in-out transform hover:-translate-y-2 hover:rotate-4 hover:scale-125  w-96"
              src={teclado}
              alt=""
            />
            <p className="mt-8">Mouse y teclado gammer</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Premios;
