import { useState } from 'react'
import './App.css'
import Square from './components/Square'

function App() {
  const [currentUser, setcurrentUser] = useState('X');
  let arrval = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const [squares, setSquares] = useState(arrval);
  console.log("in app", squares);
  function changeUser(i) {
    if (currentUser == 'X') {
      squares[i] = 'X';
      setcurrentUser('O')
    }
    else {
      squares[i] = 'O';
      setcurrentUser('X')
    }
  }

  if (calculateWinner(squares)) {
    console.log("Winner", calculateWinner(squares) );
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2], // rows
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6], // columns
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8], // diagonals
      [2, 4, 6],
    ];
  
    for (let [a, b, c] of lines) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]; // returns "X" or "O"
      }
    }
  
    return null; // no winner yet
  }

  return (
    <>
      <h3>Next player: {currentUser}</h3>
      <div>
        <div>
          <Square currentUser={currentUser} changeUser={changeUser} arrValue={squares[0]}></Square>
          <Square currentUser={currentUser} changeUser={changeUser} arrValue={squares[1]}></Square>
          <Square currentUser={currentUser} changeUser={changeUser} arrValue={squares[2]}></Square>
        </div>
        <div>
          <Square currentUser={currentUser} changeUser={changeUser} arrValue={squares[3]}></Square>
          <Square currentUser={currentUser} changeUser={changeUser} arrValue={squares[4]}></Square>
          <Square currentUser={currentUser} changeUser={changeUser} arrValue={squares[5]}></Square>
        </div>
        <div>
          <Square currentUser={currentUser} changeUser={changeUser} arrValue={squares[6]}></Square>
          <Square currentUser={currentUser} changeUser={changeUser} arrValue={squares[7]}></Square>
          <Square currentUser={currentUser} changeUser={changeUser} arrValue={squares[8]}></Square>
        </div>
      </div>


    </>
  )
}

export default App
