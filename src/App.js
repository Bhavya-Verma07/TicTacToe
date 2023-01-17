import React, { useState } from "react";
import "./App.css";
import { Board } from "./components/board";
import { Resetbutton } from "./components/resetbutton";
import { Scoreboard } from "./components/scoreboard";

// import { Box } from './components/box';

function App() {
  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaying, setxPlaying] = useState(true);
  const [scores, setScores] = useState({ xScore: 0, oScore: 0 });
  const [gameOver, setGameOver] = useState(false);
  const [currentwinner, setCurrentwinner] = useState(null);
  const [matchDrawn, setMatchDrawn] = useState(false);

  const handleBoxClick = (boxIndex) => {
    const updatedBoard = board.map((value, index) => {
      if (index === boxIndex) {
        return xPlaying === true ? "X" : "O";
      } else {
        return value;
      }
    });
    setBoard(updatedBoard);

    const winner = checkWinner(updatedBoard);

    if (winner) {
      if (winner === "O") {
        let { oScore } = scores;
        oScore += 1;
        setScores({ ...scores, oScore });
        setCurrentwinner("O");
      } else if (winner === "X") {
        let { xScore } = scores;
        xScore += 1;
        setScores({ ...scores, xScore });
        setCurrentwinner("X");
      }
    } else {
      setCurrentwinner(null);
    }

    console.log(scores);
    // checkWinner(checkWinner);
    setxPlaying(!xPlaying);
  };
  const checkWinner = (board) => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [x, y, z] = WIN_CONDITIONS[i];
      console.log(board);
      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        setGameOver(true);
        return board[x];
      } else {
        let counter = 0;
        for (const b of board) {
          if (b === null) {
            counter++;
          }
        }
        if (counter === 0) {
          console.log("match is drawn");
          setMatchDrawn(true);
        }
      }
    }
  };

  const resetBoard = () => {
    setGameOver(false);
    setCurrentwinner(null);
    setMatchDrawn(false);
    setBoard(Array(9).fill(null));
  };

  return (
    <>
      <div className="App">
        <Scoreboard
          scores={scores}
          xPlaying={xPlaying}
          currentwinner={currentwinner}
          matchDrawn={matchDrawn}
        />
        <Board board={board} onClick={gameOver ? resetBoard : handleBoxClick} />
        <Resetbutton resetBoard={resetBoard} />
      </div>
    </>
  );
}
export default App;
