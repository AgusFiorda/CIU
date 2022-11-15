/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { RiGameLine } from "react-icons/ri";

const Header = () => {
  return (
    <header className="bg-black bg-opacity-80 text-white py-6 font-semibold uppercase w-screen text-center flex flex-col">
      <div>
        <p className="flex flex-row justify-center">
          <RiGameLine className="text-6xl " />{" "}
          <span className="text-3xl mr-2">. . . </span>
          <span className="text-3xl mt-2 ">Game Over</span>
        </p>
      </div>
      <div className="flex flex-row justify-center uppercase mt-4">
        <a
          className="px-4 border-x-2 mr-4 hover:text-orange-500"
          href="#premios"
        >
          premios
        </a>
        <a className="mr-4 hover:text-orange-500" href="#games">
          competencia{" "}
        </a>
        <a className="px-4 border-x-2  hover:text-orange-500" href="#nosotros">
          sobre nosotros
        </a>
      </div>
    </header>
  );
};

export default Header;
