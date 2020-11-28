import React, { useEffect, useMemo, useState } from "react";
import Board from "./components/Board";
import GameContext from "./context/GameContext";
import { calculateWinner } from "./core/gameUtil";

const PLAYERS = {
  X: "Player 1",
  O: "Player 2",
};

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState("X");
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    let winnerCalc = calculateWinner(squares);
    if (winnerCalc) setWinner(winnerCalc);
  }, [squares, setWinner]);

  // button to play again (once there is a winner)
  const replayButton = useMemo(
    () =>
      winner || squares.filter((sq) => sq === null).length === 0 ? (
        <button
          onClick={() => {
            // reset game state
            setSquares(Array(9).fill(null));
            setPlayer("X");
            setWinner(null);
          }}
        >
          Play Again
        </button>
      ) : null,
    [winner, squares]
  );

  return (
    <>
      <p>Current Player: {PLAYERS[player]}</p>
      <p>
        Winner:{" "}
        {winner
          ? PLAYERS[winner]
          : squares.filter((square) => square === null).length > 0
          ? "None yet"
          : "Scratch"}
      </p>
      <GameContext.Provider
        value={{ squares, setSquares, player, setPlayer, winner }}
      >
        <Board />
      </GameContext.Provider>
      {replayButton}
      <p>{JSON.stringify(squares)}</p>
    </>
  );
}

export default App;
