import styles from "./Board.module.css";
import GameContext from "../../context/GameContext";
import { useCallback, useContext, useMemo } from "react";

const PLAYER_COLORS = {
  X: "#f00",
  O: "#00f",
};

export default function Board() {
  return (
    <table className={styles.ticTacToe}>
      <tbody>
        <Row squares={[0, 1, 2]} />
        <Row squares={[3, 4, 5]} />
        <Row squares={[6, 7, 8]} />
      </tbody>
    </table>
  );
}

function Row(props) {
  return (
    <tr>
      {props.squares.map((index) => (
        <Square key={index} index={index} />
      ))}
    </tr>
  );
}

function Square(props) {
  const { squares, setSquares, player, setPlayer, winner } = useContext(
    GameContext
  );

  const handleSquareClick = useCallback(
    (squareIndex) => {
      if (!winner && !squares[squareIndex]) {
        let squaresCopy = squares.slice();
        squaresCopy[squareIndex] = player; // X or O
        setPlayer(player === "X" ? "O" : "X"); // other player plays now
        setSquares(squaresCopy);
      }
    },
    [squares, setSquares, player, setPlayer, winner]
  );

  const squareColor = useMemo(() => {
    if (!squares[props.index]) return "#000";
    return PLAYER_COLORS[squares[props.index]];
  }, [squares, props.index]);

  return (
    <td onClick={() => handleSquareClick(props.index)}>
      <span style={{ color: squareColor }}>{squares[props.index]}</span>
    </td>
  );
}
