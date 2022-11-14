import React from "react";

const Home = () => {
  return (
    <>
      <div className="bg-[url('./assets/torneo.jpg')] inline-block mt-32 w-screen text-white text-center bg-cover bg-center py-56 ">
        <section className="text-4xl bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
          <p>La plataforma lider en torneos de videojuegos</p>
          <br />
          <p>
            Demuestra tu habilidad jugando los mejores torneos de la comunidad.
          </p>
          <br />
          <p className="text-2xl">Aprovecha y anotate antes que sea tarde.</p>
        </section>
      </div>
    </>
  );
};

export default Home;
