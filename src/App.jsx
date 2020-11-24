import { useState } from "react";
import Board from "./components/Board";
import GameContext from "./context/GameContext";

const PLAYERS = {
  X: "Player 1",
  O: "Player 2",
};

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState("X");

  return (
    <>
      <p>Current Player: {PLAYERS[player]}</p>
      <GameContext.Provider value={{ squares, setSquares, player, setPlayer }}>
        <Board />
      </GameContext.Provider>
    </>
  );
}

export default App;
