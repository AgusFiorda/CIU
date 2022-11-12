import { React, useState, useEffect } from "react";

const Games = () => {
  const [url, editar] = useState("");
  const [juegos, setGames] = useState([]);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "6ea5534ec8msh5e2091b29885362p1edba2jsn1a31dfbfd193",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  const agregarItems = (items) => {
    //obtiene los 5 primeros elementos de todo el array de items que son games obtenido de la API
    setGames(items.slice(0, 6));
  };

  useEffect(() => {
    async function getGames() {
      const response = await fetch(
        "https://free-to-play-games-database.p.rapidapi.com/api/games",
        options
      );
      const data = await response.json();
      agregarItems(data);
    }
    getGames();
  }, []);
  return (
    <>
      <div className="grid grid-rows-2 grid-flow-col gap-1 justify-items-center mt-3 py-8 px-8">
        {juegos.map((game, index) => {
          return (
            <>
              <div className="flex flex-col justify-center mb-10 font-principal border-2 border-gray-400 p-4 mx-4 shadow-xl">
                <p className="text-center pt-4 mb-4 text-2xl" key={index}>
                  {game.title}
                </p>
                <img src={game.thumbnail} alt=""></img>
                <button className="bg-blue-400 rounded-full mt-3 py-2 px-4 hover:bg-orange-400">
                  Comprar
                </button>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Games;
