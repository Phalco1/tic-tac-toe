import React, { useState, useEffect } from 'react'
import Square from './components/Square'
import './App.scss'
import ButtonMove from './components/ButtonMove'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import AnimatedLetters from './components/AnimatedLetters'
import LogoTitle from '../src/Assets/IMG_0508.png'
import Homescreen from './components/Homescreen'


const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true);
  const [letterClass, setLetterClass] = useState('text-animate')
    const letsPlayArray = ['l', 'a', 'y']
    const gameArray = ['T', 'i', 'c', '-', 'T', 'a', 'c', '-', 'T', 'o', 'e', '!']

    useEffect(() => {
         setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);
    }, [])

  const handleGamePlay = (index) => {
    if (squares[index] || calculateWinner(squares)) {
      return
  }
    const updatedBoard = [...squares]
    updatedBoard[index] = xIsNext ? "❌" : "⭕️"
    setSquares(updatedBoard)
    setXIsNext(!xIsNext)
  }

  const calculateWinner = (squares) => {
    const winningLines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], 
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6],            
    ];
  
    for (const line of winningLines) {
      const [a, b, c] = line;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return { winner: squares[a], line: line } 
      }
    }
  
    return null
  }

  const winnerInfo = calculateWinner(squares);

  const resetGame = () => {
    setSquares(Array(9).fill(null))
    setXIsNext(true)
  };
  
      <Routes>
        <Route path="/" element={<Layout />}></Route>
        <Route path="Homescreen" element={<Homescreen />}></Route>
      </Routes>
  

  return (
    <>
      <h1>Tic x Tac x Toe</h1>
      <div className='gameboard'>
      {squares.map((value, index) => {
      return (
              <Square 
              key={index}
              value={value}
              index={index}
              handleGamePlay={handleGamePlay}
              /> 
          )
        })}
        
      {winnerInfo && (
        <div className='winner'>
          <p>{`Winner: ${winnerInfo.winner}`}</p>
          <p>{`Winning Line: ${winnerInfo.line}`}</p>
        </div>
      )}
      </div>
      <div>
      <ButtonMove resetGame={resetGame} />
      </div>
      <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>C</span>
                <span className={`${letterClass} _12`}>o</span>
                <span className={`${letterClass} _12`}>m</span>
                <span className={`${letterClass} _12`}>e</span>  
                <span className={`${letterClass} _12`}> </span>  
                <span className={`${letterClass} _13`}>o</span>
                <span className={`${letterClass} _14`}>n</span>
                <span className={`${letterClass} _14`}>!</span>
                <br /> 
                <span className={`${letterClass} _13`}>L</span>
                <span className={`${letterClass} _14`}>e</span>
                <span className={`${letterClass} _14`}>t</span>
                <span className={`${letterClass} _14`}>'</span>
                <span className={`${letterClass} _14`}>s</span>
                <img src={LogoTitle} alt="developer" />
                <AnimatedLetters letterClass={letterClass}
                strArray={letsPlayArray}
                idx={0} />
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={gameArray}
                idx={3} />
                </h1>
            </div>
        </div>
    </>
  )
}

export default App