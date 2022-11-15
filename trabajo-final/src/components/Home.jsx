import React from "react";

const Home = () => {
  return (
    <>
      <div className="bg-[url('./assets/torneo.jpg')] inline-block  w-screen  bg-cover bg-center py-48  ">
        <section className="mx-32 bg-opacity-70 rounded-md font-principal p-12 text-center bg-gray-600 text-transparent ">
          <p className="text-white text-6xl pb-2 ">
            La plataforma lider en torneos de videojuegos
          </p>
          <br />
          <p className="text-white text-4xl bg-red-800 rounded-sm p-2">
            20 y 22 de Diciembre en la Rural, Buenos Aires.
          </p>
          <br />
          <p className="text-white text-2xl">Entrada libre y gratuita</p>
          <p className="text-xl mt-2 text-white">
            Aprovecha y anotate antes que sea tarde.
          </p>
        </section>
      </div>
    </>
  );
};

export default Home;
