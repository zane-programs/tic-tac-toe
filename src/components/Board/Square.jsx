import { useCallback, useContext, useMemo, useState } from "react";
import GameContext from "../../context/GameContext";

const PLAYER_COLORS = {
  X: "#f00",
  O: "#00f",
};

export default function Square(props) {
  const { squares, setSquares, player, setPlayer, winner } = useContext(
    GameContext
  );

  const [hoverState, setHoverState] = useState(false);

  const currentSquareState = useMemo(() => squares[props.index], [
    squares,
    props.index,
  ]);

  const handleSquareClick = useCallback(
    (squareIndex) => {
      if (!winner && !currentSquareState) {
        let squaresCopy = squares.slice();
        squaresCopy[squareIndex] = player; // X or O
        setPlayer(player === "X" ? "O" : "X"); // other player plays now
        setSquares(squaresCopy);
      }
    },
    [squares, setSquares, player, setPlayer, winner]
  );

  const squareColor = useMemo(() => {
    if (currentSquareState === null) return "#aaa";
    return PLAYER_COLORS[currentSquareState];
  }, [currentSquareState]);

  return (
    <td
      onClick={() => handleSquareClick(props.index)}
      onMouseOver={() => setHoverState(true)}
      onMouseOut={() => setHoverState(false)}
    >
      <span style={{ color: squareColor }}>
        {currentSquareState
          ? currentSquareState
          : hoverState && !winner
          ? player
          : null}
      </span>
    </td>
  );
}
