/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { RiGameLine } from "react-icons/ri";

const Header = () => {
  return (
    <header className="bg-black bg-opacity-80 text-white p-2 font-semibold uppercase w-screen fixed  ">
      <div className="mt-8 flex flex-row justify-center">
        <p className="flex flex-row ">
          <RiGameLine className="text-6xl " />{" "}
          <span className="text-3xl mr-2">. . . </span>
          <span className="text-3xl mt-2">Game Over</span>
        </p>
      </div>
    </header>
  );
};

export default Header;
