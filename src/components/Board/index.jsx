import React from "react";
import styles from "./Board.module.css";
import Square from "./Square";

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
