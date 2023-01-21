import { useState } from "react"

import { Header } from "./Header";
import { Footer } from "./Footer";
import { Board } from "./Board";

import './board.css';

const OPTIONS = {
  x: 'x',
  o: 'o'
}

const WINNER_OPTIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8]
]

export const TicTacToeApp = () => {
  const [turn, setTurn] = useState(OPTIONS.x);
  const [board, setBoard] = useState(new Array(9).fill(null));
  const [winner, setWinner] = useState(null);
  const [dark, setDark] = useState(true);

  const isWinner = (newBoard) => {
    for (const option of WINNER_OPTIONS) {
      const [a, b, c] = option;
      if (
        newBoard[a] &&
        newBoard[a] === newBoard[b] &&
        newBoard[a] === newBoard[c]
      ) {
        return newBoard[a]
      }
    }
    return null
  }

  const updateBoard = (index) => {
    if (board[index] || winner) return

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = turn === OPTIONS.x ? OPTIONS.o : OPTIONS.x;
    setTurn(newTurn);

    const newWinner = isWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner)
    } else if (!newBoard.includes(null)) {
      setWinner(false);
    };
  }

  const resetGame = () => {
    setTurn(OPTIONS.x);
    setBoard(new Array(9).fill(null));
    setWinner(null);
  };

  const toggleTheme = () => {
    const currentTheme = dark;
    setDark(!currentTheme);
  }

  return (
    <>
      {/* Renderizar el encabezado */}
      <Header turn={turn} resetGame={resetGame} toggleTheme={toggleTheme} theme={dark} />

      {/* Main */}
      <Board updateBoard={updateBoard} turn={turn} board={board} theme={dark} />

      {
        winner ? (
          <div className="modal">
            <h1> Winner: {winner} </h1>
            <button onClick={resetGame}> reload </button>
          </div>
        ) : (
          winner !== null && (
            <div className="modal">
              <h1> Draw </h1>
              <button onClick={resetGame}> reload </button>
            </div>
          )
        )
      }

      {/* footer */}
      {/* <Footer /> */}
    </>
  )
}