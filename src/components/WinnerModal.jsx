import { Square } from "./square";

export function WinnerModal({ winner, resetGame }) {
    if (winner === null)
        return null;

    const winnerText = winner === false ? 'It is a tie' : 'The winner is ';
    return (
        <section className='winner'>
            <div className='text'>
                <h2> {winnerText} </h2>
                <header className='win'>
                    {winner && <Square>{winner}</Square>}
                </header>
                <footer>
                    <button onClick={resetGame}>Start again</button>
                </footer>
            </div>
        </section>
    )
}