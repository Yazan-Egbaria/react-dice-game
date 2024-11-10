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
  const [roundScore, setRoundScore] = useState({
    1: players[0].roundScore,
    2: players[1].roundScore,
  });
  const [score, setScore] = useState({
    1: players[0].score,
    2: players[1].score,
  });

  function endGame() {
    if (score[activeId] >= 100) {
      alert(
        `${players[activeId].name} has won the game with a score of ${score[activeId]}`,
      );
    }
  }

  const handleNewGame = () => {
    setActiveId(playerOne.id);
    setCurrentDices(() => [dices[0], dices[1]]);
    setAreDicesRolled(false);
    setRoundScore({
      1: 0,
      2: 0,
    });
    setScore({
      1: 0,
      2: 0,
    });
  };

  const rollDice = () => {
    setAreDicesRolled(true);

    const randomDices = [
      dices[Math.floor(Math.random() * dices.length)],
      dices[Math.floor(Math.random() * dices.length)],
    ];
    setCurrentDices(randomDices);

    const randomDicesSum = randomDices.reduce((acc, currentRandomDice) => {
      return currentRandomDice.num + acc;
    }, 0);

    setRoundScore((prevRoundScore) => {
      const updatedRoundScore = prevRoundScore[activeId] + randomDicesSum;

      const playerIndex = players.findIndex((player) => player.id === activeId);
      players[playerIndex].roundScore = updatedRoundScore;

      return {
        ...prevRoundScore,
        [activeId]: updatedRoundScore,
      };
    });
  };

  const holdTurns = () => {
    setActiveId((prev) =>
      prev === playerOne.id ? playerTwo.id : playerOne.id,
    );

    setScore((prevScore) => {
      const updatedScore = prevScore[activeId] + roundScore[activeId];

      const playerIndex = players.findIndex((player) => player.id === activeId);
      players[playerIndex].score = updatedScore;

      return {
        ...prevScore,
        [activeId]: updatedScore,
      };
    });

    setRoundScore((prevRoundScore) => {
      return {
        ...prevRoundScore,
        [activeId]: 0,
      };
    });

    endGame();
  };

  const btnDetails = [
    { text: "New Game", btnFn: handleNewGame },
    { text: "Roll Dice", btnFn: rollDice },
    { text: "Hold", btnFn: holdTurns },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-emerald-800 to-emerald-100">
      <div
        id="mainContainer"
        className="container relative mx-auto flex min-h-screen items-center justify-evenly"
      >
        {players.map((player) => {
          return (
            <Player
              key={player.name}
              roundScore={roundScore[player.id]}
              score={score[player.id]}
              {...player}
              isActive={activeId === player.id}
            />
          );
        })}

        <div
          id="btnsAndDices"
          className="absolute flex flex-col items-center justify-center gap-8"
        >
          <div id="dices" className="flex flex-col gap-2">
            {areDicesRolled &&
              currentDices.map((currDice, index) => {
                return (
                  <Dice key={`${currDice.id}-${index}`} src={currDice.src} />
                );
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
