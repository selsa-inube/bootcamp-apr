import { useState } from "react";

function Square({ value, onSquareClick, highlight }) {
  return (
    <button
      className={`square ${highlight ? "highlight" : ""}`}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay, winnerLine }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  const boardSize = 3;
  const board = [];
  for (let row = 0; row < boardSize; row++) {
    const boardRow = [];
    for (let col = 0; col < boardSize; col++) {
      const index = row * boardSize + col;
      boardRow.push(
        <Square
          key={index}
          value={squares[index]}
          onSquareClick={() => handleClick(index)}
          highlight={winnerLine && winnerLine.includes(index)}
        />,
      );
    }
    board.push(
      <div key={row} className="board-row">
        {boardRow}
      </div>,
    );
  }

  return <>{board}</>;
}

export default function Game() {
  const [history, setHistory] = useState([
    { squares: Array(9).fill(null), location: null },
  ]);
  const [currentMove, setCurrentMove] = useState(0);
  const [isAscending, setIsAscending] = useState(true);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove].squares;

  function handlePlay(nextSquares, location) {
    const nextHistory = history
      .slice(0, currentMove + 1)
      .concat([{ squares: nextSquares, location }]);
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((step, move) => {
    const description = move
      ? `Go to move #${move} (${Math.floor(step.location / 3)}, ${
          step.location % 3
        })`
      : "Go to game start";
    return (
      <li key={move}>
        {move === currentMove ? (
          <span>Estás en el movimiento n.° {move}</span>
        ) : (
          <button onClick={() => jumpTo(move)}>{description}</button>
        )}
      </li>
    );
  });

  const sortedMoves = isAscending ? moves : [...moves].reverse();

  const winnerData = calculateWinner(currentSquares);

  return (
    <div className="game">
      <div className="game-board">
        <div className="status">
          {winnerData
            ? `Winner: ${winnerData.player}`
            : currentSquares.includes(null)
            ? `Next player: ${xIsNext ? "X" : "O"}`
            : "Draw"}
        </div>
        <Board
          xIsNext={xIsNext}
          squares={currentSquares}
          onPlay={(nextSquares, location) => handlePlay(nextSquares, location)}
          winnerLine={winnerData ? winnerData.line : null}
        />
      </div>
      <div className="game-info">
        <button onClick={() => setIsAscending(!isAscending)}>
          {isAscending ? "Sort Descending" : "Sort Ascending"}
        </button>
        <ol>{sortedMoves}</ol>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { player: squares[a], line: lines[i] };
    }
  }
  return null;
}
