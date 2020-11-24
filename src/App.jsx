import { useState } from "react";
import Board from "./components/Board";
import GameContext from "./context/GameContext";

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  return (
    <div className="App">
      <GameContext.Provider value={{squares, setSquares}}>
        <Board />
      </GameContext.Provider>
    </div>
  );
}

export default App;
