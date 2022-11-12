import React from "react";
import {
  AiOutlineTwitter,
  AiOutlineMail,
  AiOutlineInstagram,
  AiFillFacebook,
} from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <footer className="bg-black bg-opacity-80 text-white p-10 font-semibold">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row">
            <AiOutlineMail className="text-yellow-400 border-2 rounded-full p-1 m-4 border-yellow-400 w-10 h-10" />
            <section className="flex flex-col">
              <h1>Escribinos a:</h1>
              <a href="mailto:info@fangames.net"> info@fangames.net</a>
              <a href="mailto:people@fangames.net"> people@fangames.net</a>
            </section>
          </div>
          <div>
            <h1 className="text-center">Seguinos en:</h1>
            <section className="flex flex-row">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineInstagram className="border-2 rounded-full p-1 m-2 border-yellow-400 w-10 h-10" />
              </a>
              <a
                href="https://twitter.com/?lang=es"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineTwitter className="border-2 rounded-full p-1 m-2 border-yellow-400 w-10 h-10" />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillFacebook className="border-2 rounded-full p-1 m-2 border-yellow-400 w-10 h-10" />
              </a>
            </section>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
