import './App.css'
import { useState } from 'react';

function Square({ value, onSquareClick, isWinningSquare }) {
  return (
    <button className={`square ${isWinningSquare ? 'winning-square' : ''}`} onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    const nextSquares = squares.slice();
    
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }

    onPlay(nextSquares, i);
  }

  const winnerInfo = calculateWinner(squares);
  const winner = winnerInfo ? winnerInfo.winner : null;
  const winningSquares = winnerInfo ? winnerInfo.line : [];

  let status;
  if (winner) {
    status = "Ganador: " + winner;
  } else if (squares.every(square => square !== null)) {
    status = "Empate";
  } else {
    status = "Siguiente jugador: " + (xIsNext ? "X" : "O");
  }

  const boardRows = [];
  for (let row = 0; row < 3; row++) {
    const squaresInRow = [];
    for (let col = 0; col < 3; col++) {
      const squareIndex = row * 3 + col;
      squaresInRow.push(
        <Square
          key={squareIndex}
          value={squares[squareIndex]}
          onSquareClick={() => handleClick(squareIndex)}
          isWinningSquare={winningSquares.includes(squareIndex)}
        />
      );
    }
    boardRows.push(<div key={row} className="board-row">{squaresInRow}</div>);
  }

  return (
    <>
      <div className="status">{status}</div>
      {boardRows}
    </>
  );
}

export default function Game() {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null), location: null }]);
  const [currentMove, setCurrentMove] = useState(0);
  const [isAscending, setIsAscending] = useState(true);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove].squares;

  function handlePlay(nextSquares, moveLocation) {
    const nextHistory = [...history.slice(0, currentMove + 1), { squares: nextSquares, location: moveLocation }];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  function toggleSortOrder() {
    setIsAscending(!isAscending);
  }

  const sortedHistory = isAscending ? history : history.slice().reverse();

  const moves = sortedHistory.map((step, move) => {
    const actualMove = isAscending ? move : history.length - 1 - move;
    const desc = actualMove
      ? `Ir al movimiento #${actualMove} (${Math.floor(step.location / 3) + 1}, ${step.location % 3 + 1})`
      : 'Ir al inicio del juego';

    if (actualMove === currentMove) {
      return (
        <li key={actualMove}>
          <span>Estás en el movimiento #{actualMove} ({Math.floor(step.location / 3) + 1}, {step.location % 3 + 1})</span>
        </li>
      );
    } else {
      return (
        <li key={actualMove}>
          <button onClick={() => jumpTo(actualMove)}>{desc}</button>
        </li>
      );
    }
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <div>
          <button onClick={toggleSortOrder}>
            {isAscending ? 'Orden Descendente' : 'Orden Ascendente'}
          </button>
        </div>
        <ol>{moves}</ol>
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
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line: [a, b, c] };
    }
  }
  return null;
}
