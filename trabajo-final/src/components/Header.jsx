/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-2  font-semibold uppercase w-full flex flex-row justify-center">
      <a href="#"></a>
      <div className="mt-12 ml-12">
        <a
          href="#"
          className="mt-10 hover:text-yellow-300 border-2 border-gray-800 hover:border-yellow-300 px-6 py-2 rounded-md"
        >
          Menu
        </a>
        <a
          href=""
          className="mt-10 hover:text-yellow-300 border-2 border-gray-800 hover:border-yellow-300 px-6 py-2 rounded-md"
        >
          Contacto
        </a>
      </div>
    </header>
  );
};

export default Header;
