import React, { useState } from "react";
import Modal from "react-modal";
import { AiFillStar } from "react-icons/ai";
import { GrClose } from "react-icons/gr";

Modal.setAppElement("#root");

const Modale = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <button
        onClick={toggleModal}
        className="transition duration-100 ease-in-out transform hover:-translate-y-1   hover:bg-orange-600 border-2 text-white rounded-md  mt-3 py-2 px-4"
      >
        Informacion
      </button>
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center bg-opacity-60 bg-slate-800"
      >
        <div className="flex flex-col mx-2 text-base rounded-lg w-1/2 p-10 text-white fondo shadow-lg shadow-orange-500">
          <GrClose
            onClick={toggleModal}
            className="self-end cursor-pointer bg-white text-xl rounded-full border-2 border-white"
          />

          <h1 className="text-xl font-extrabold text-transparent uppercase pb-6   bg-clip-text bg-gradient-to-r from-orange-500 to-white">
            {props.title}
          </h1>
          <div className="flex py-6 flex-row ">
            <section>
              <p className="pb-1 my-2 font-semibold ">
                Sistema Operativo:{" "}
                <span className="font-light">{props.platform}</span>
              </p>
              <p className="pb-1 my-2 font-semibold ">
                Genero: <span className="font-light">{props.genre}</span>
              </p>
              <p className="mb-2 font-semibold ">
                Pagina Oficial:{" "}
                <a
                  target="_blank"
                  href={props.game_url}
                  rel="noreferrer"
                  className="font-light "
                >
                  {props.game_url}
                </a>
                <p className="pb-1 my-2 font-semibold ">
                  Desarrollador:{" "}
                  <span className="font-light">{props.developer}</span>
                </p>
              </p>
              <section className="flex flex-row text-yellow-500">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </section>
            </section>
            <img src={props.thumbnail} alt="cursos" className="  w-72 ml-0" />
          </div>
          <div className="flex flex-row justify-around my-6">
            <button
              onClick={toggleModal}
              className="transition duration-100 ease-in-out transform hover:-translate-y-1   hover:bg-orange-600 border-2 text-white rounded-md  mt-3 py-2 px-4"
            >
              Cerrar
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default Modale;
