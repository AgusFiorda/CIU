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

  let horarios = [
    "Horario 14:00hs - Sala 1",
    "Horario 11:15hs - Sala 2",
    "Horario 13:00hs - Sala 3",
    "Horario 10:30hs - Sala 3",
    "Horario 18:00hs - Sala 1",
    "Horario 15:30hs - Sala 3",
    "Horario 19:00hs - Sala 2",
    "Horario 16:00hs - Sala 1",
    "Horario 14:15hs - Sala 1",
  ];

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
      <section
        id="games"
        className=" text-center text-white mt-10 text-5xl pt-20 font-semibold "
      >
        <h1>Proximas competencias</h1>
        <p className="text-xl mt-4">
          Demuestra tu habilidad jugando los mejores torneos de la comunidad.
        </p>
      </section>
      <div className="grid grid-rows-3 grid-flow-col gap-1 justify-items-center py-8 px-8 pt-28">
        {games.map((game, index) => {
          return (
            <>
              <div
                className="border-2
              shadow-blue-900 flex flex-col justify-center mb-10 font-principal bg-gray-800 bg-opacity-40 p-4 mx-4 shadow-lg"
              >
                <p
                  className="text-center text-white pt-4 mb-4 text-2xl"
                  key={index}
                >
                  {game.title}
                </p>
                <img
                  className="mb-4 rounded-sm"
                  src={game.thumbnail}
                  alt="..."
                ></img>
                <p className="text-white text-center">{horarios[index]}</p>
                <section className="flex justify-around">
                  <Modale
                    platform={game.platform}
                    thumbnail={game.thumbnail}
                    genre={game.genre}
                    game_url={game.game_url}
                    developer={game.developer}
                    title={game.title}
                  />
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
