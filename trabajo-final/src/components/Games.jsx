import { React, useState, useEffect } from "react";
import Modale from "./Modal";

const Games = () => {
  let gamesApi = JSON.parse(localStorage.getItem("games"));
  if (!gamesApi) {
    gamesApi = [];
  }

  const [games, setGames] = useState(gamesApi);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "6ea5534ec8msh5e2091b29885362p1edba2jsn1a31dfbfd193",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  const agregarItems = (items) => {
    //obtiene los 9 primeros elementos de todo el array de items que son games obtenido de la API
    setGames(items.slice(0, 9));
  };

  useEffect(() => {
    if (gamesApi.length === 0) {
      async function getGames() {
        const response = await fetch(
          "https://free-to-play-games-database.p.rapidapi.com/api/games",
          options
        );
        const data = await response.json();
        agregarItems(data);
      }
      getGames();
      localStorage.setItem("games", JSON.stringify(games));
    }
  }, [gamesApi]);

  return (
    <>
      <section className="text-center text-white mt-10 text-5xl pt-20 font-semibold ">
        <p>Proximas competencias</p>
      </section>
      <div className="grid grid-rows-3 grid-flow-col gap-1 justify-items-center py-8 px-8 pt-28">
        {games.map((game, index) => {
          return (
            <>
              <div
                className="transition duration-100 ease-in-out transform hover:-translate-y-1  border-2
              shadow-blue-900 flex flex-col justify-center mb-10 font-principal bg-gray-800 bg-opacity-40 p-4 mx-4 shadow-lg"
              >
                <p
                  className="text-center text-white pt-4 mb-4 text-2xl"
                  key={index}
                >
                  {game.title}
                </p>
                <img
                  className="mb-4 rounded-md "
                  src={game.thumbnail}
                  alt=""
                ></img>

                <section className="flex flex-row justify-around">
                  <Modale
                    platform={game.platform}
                    thumbnail={game.thumbnail}
                    genre={game.genre}
                    game_url={game.game_url}
                    developer={game.developer}
                    title={game.title}
                  />
                  <button className="transition duration-100 ease-in-out transform hover:-translate-y-1   hover:bg-orange-600 border-2 text-white rounded-md  mt-3 py-2 px-4">
                    Comprar
                  </button>
                </section>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Games;
