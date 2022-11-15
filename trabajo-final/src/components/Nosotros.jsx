import React from "react";
import fondo from "../assets/nosotros.png";
const Nosotros = () => {
  return (
    <>
      <div id="nosotros" className="text-white text-center px-12">
        <h1 className="text-5xl">Sobre nosotros</h1>
        <img src={fondo} alt="" className="float-left" />
        <p className="mt-20 text-xl ">
          Somos una empresa líder en todo el mundo en el entretenimiento digital
          interactivo y nuestra mayor motivación es la pasión. Con sede en
          Redwood City, en el norte de California, desarrollamos y ofrecemos
          juegos, contenido y servicios online para consolas conectadas a
          Internet, dispositivos móviles y ordenadores. Gracias a nuestros
          juegos vanguardistas, servicios innovadores y tecnologías potentes,
          ofrecemos mundos con infinitas posibilidades a casi 600 millones de
          personas en todo el mundo y se nos reconoce por un catálogo de
          franquicias de alta calidad y aclamadas por la crítica como EA SPORTS™
          FIFA, Battlefield™, Apex Legends™, Los Sims™, Madden NFL, Need for
          Speed™, Titanfall™ y F1®.
        </p>
      </div>
    </>
  );
};

export default Nosotros;
