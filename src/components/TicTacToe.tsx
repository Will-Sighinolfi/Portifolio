"use client";
import React, { useState, useEffect } from 'react';
import Board from './animation/Board';
import Falcon from '../img/millennium_falcon.png'
import "../style/Main.css";

export default function Home() {
  const [history, setHistory] = useState<{ squares: (string | null)[] }[]>([
    { squares: Array(9).fill(null) },
  ]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  const [winnerPlay, setWinner] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);

  function calculateWinner(squares: (string | null)[]): string | null {
    const lines: number[][] = [
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
        return squares[a] as string;
      }
    }
    return null;
  }

  const handleClick = (i: number) => {
    const newHistory = history.slice(0, stepNumber + 1);
    const squares = current.squares.slice();

    if (winner || squares[i]) {
      return;
    }

    squares[i] = xIsNext ? 'X' : 'O';
    setHistory(newHistory.concat([{ squares: squares }]));
    setStepNumber(newHistory.length);
    setXIsNext(!xIsNext);
  };

  const makeRandomMove = () => {
    const squares = current.squares.slice();

    if (winner || squares.indexOf(null) === -1) {
      return;
    }

    let randomMove;
    do {
      randomMove = Math.floor(Math.random() * 9);
    } while (squares[randomMove] !== null);

    squares[randomMove] = xIsNext ? 'X' : 'O';
    setHistory((prevHistory) => [
      ...prevHistory.slice(0, stepNumber + 1),
      { squares },
    ]);
    setStepNumber((prevStep) => prevStep + 1);
    setXIsNext((prevXIsNext) => !prevXIsNext);
  };

  useEffect(() => {
    if (!xIsNext) {
      const botMoveTimeout = setTimeout(makeRandomMove, 1000);
      return () => clearTimeout(botMoveTimeout);
    }
  }, [xIsNext]);

  let status;
  if (winner) {
    status = 'Vencedor: ' + winner;
  } else {
    status = 'Próximo jogador: ' + (xIsNext ? 'X' : 'O');
  }

  const restartGame = () => {
    setHistory([{ squares: Array(9).fill(null) }]);
    setStepNumber(0);
    setXIsNext(true);
    setGameOver(false);
  };

  return (
    <>
      <div className='content-infos slide-animation'>
        <div className="game" id='Game'>
          <div className="text-color star-wars-text text-space">
            <div className='text-space'>{status}</div>
          </div>
          <div className="text-color game-board">
            <div className='TicTacToe'>
              <Board squares={current.squares} onClick={handleClick} />
            </div>
          </div>
          <div className='button-player star-wars-text' >
            <button onClick={restartGame}>Reiniciar o jogo</button>
          </div>
        </div>

        <div className='text-config'>
          <div>
            <span className='text text-color star-wars-text width-text'>
              Tenho conhecimento em JavaScript e suas bibliotecas, com um foco especial em manipulacão de dados.
              Minha experiência abrange a criacão de aplicacões web interativas.
              utilizo em grande parte JavaScript e TypeScript para desenvolver funcionalidades dinâmicas e responsivas.
            </span>
            <div className='text-config'>
              <div className='text text-color star-wars-text'>
                <span>Fique à vontade para jogar!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='text-config'>
        <div>
          <span className='text text-color star-wars-text width-text'>
            Além de ter conhecimento em HTML e CSS, onde gosto de brincar com animacões, também sou bastante experiente no desenvolvimento front-end.
            Tenho utilizado o React para criar interfaces interativas e dinâmicas.
          </span>
        </div>
      </div>
      <div className='nave-img'>
        <img
          className="millennium-falcon"
          src={Falcon.src}
          alt="millennium-falcon"
          style={{ width: '100px' }}
        />
      </div>
    </>
  );
}