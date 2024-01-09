import { useState } from 'react';
import { Square } from './components/square';
import { checkWinner, checkTie } from './logic/board'
import confetti from 'canvas-confetti';
import { TURNS } from './constants';
import { WinnerModal } from './components/WinnerModal';
import './App.css'

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
  }
  
  const updateBoard = (index) => {
    if (board[index] || winner)
      return;

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = (turn == TURNS.X ? TURNS.O : TURNS.X)
    setTurn(newTurn)
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
      confetti();
    } else if (checkTie(newBoard)) {
      setWinner(false);
    }
  }

  return (
    <main className='board'>
      <h1>TA TE TI</h1>
      <button onClick={resetGame}>Reset</button>
      <section className='game'>
        {
          board.map((sq, index) => {
            return (
              <Square key={index} index={index} updateBoard={updateBoard}>
                {sq}
              </Square>
            )
          })
        }
      </section>
      <section className='turn'>
        <Square isSelected={turn == TURNS.X}> {TURNS.X} </Square>
        <Square isSelected={turn == TURNS.O}> {TURNS.O} </Square>
      </section>

      <WinnerModal resetGame={resetGame} winner={winner} />
    </main>
  )
}

export default App
