import styles from "./Board.module.css";
import GameContext from "../../context/GameContext";
import { useCallback, useContext } from "react";

export default function Board(props) {
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
  const { squares, setSquares } = useContext(GameContext);

  const handleSquareClick = useCallback(
    (squareIndex) => {
      let squaresCopy = squares.slice();
      squaresCopy[squareIndex] = "X";
      setSquares(squaresCopy);
    },
    [squares, setSquares]
  );

  return (
    <td onClick={() => handleSquareClick(props.index)}>
      {squares[props.index]}
    </td>
  );
}
