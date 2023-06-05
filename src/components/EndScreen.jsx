import React from 'react'
import './EndScreen.css'

const EndScreen = ({endGame, score}) => {
  return (
    <div>
      <h1>End Screen</h1>
      <h4 className="points">Pontos: {score}</h4>
      <button onClick={endGame}>over</button>
    </div>
  )
}

export default EndScreen