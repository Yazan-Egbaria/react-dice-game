import { useState } from "react";
import Player from "./components/Player";
import players from "./data/players";
import Button from "./components/Button";
import dices from "./data/dices";
import Dice from "./components/Dice";

export default function App() {
  const [playerOne, playerTwo] = players;
  const [activeId, setActiveId] = useState(playerOne.id);
  const [currentDices, setCurrentDices] = useState(() => [dices[0], dices[1]]);
  const [areDicesRolled, setAreDicesRolled] = useState(false);

  const handleNewGame = () => {
    setActiveId(playerOne.id);
    players.forEach((player) => {
      player.score = 0;
      player.roundScore = 0;
    });
  };

  const rollDice = () => {};

  const handleIsActive = () => {
    setActiveId((prev) =>
      prev === playerOne.id ? playerTwo.id : playerOne.id,
    );
  };

  const btnDetails = [
    { text: "New Game", btnFn: handleNewGame },
    { text: "Roll Dice", btnFn: rollDice },
    { text: "Hold", btnFn: handleIsActive },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-emerald-800 to-emerald-100">
      <div className="container relative mx-auto flex min-h-screen items-center justify-evenly">
        {players.map((player) => {
          return (
            <Player
              key={player.name}
              {...player}
              isActive={activeId === player.id}
            />
          );
        })}

        <div
          id="btnsAndDices"
          className="absolute flex flex-col items-center justify-center gap-8"
        >
          <div className="flex flex-col gap-2">
            {areDicesRolled &&
              currentDices.map((currDice) => {
                return <Dice key={currDice.id} src={currDice.src} />;
              })}
          </div>

          <div id="btns">
            {btnDetails.map((btn, index) => {
              return <Button key={index} {...btn} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
