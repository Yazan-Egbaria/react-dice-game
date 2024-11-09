import { useState } from "react";
import Player from "./components/Player";
import players from "./data/players";

export default function App() {
  const [playerOne, playerTwo] = players;
  const [isActive, setIsActive] = useState(playerOne);

  // const handleIsActive = (id) => {};

  const isActiveStyle = {};

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-emerald-800 to-emerald-100 backdrop-blur-[250px]">
      <div className="container mx-auto flex min-h-screen items-center justify-evenly bg-gradient-to-t from-emerald-800 to-emerald-100">
        {players.map((player) => {
          return <Player key={player.name} {...player} />;
        })}
      </div>
    </div>
  );
}
