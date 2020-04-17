import React, { useContext } from 'react'
import './controls.css'
import { AppContext } from '../../context'

const Controls = ({
    selectTile
}) => {
    
  const  { updateGameStart, updateShowModal } = useContext(AppContext)
  const startGame = () => {
    updateGameStart(false)
    selectTile(6, 6)
  }

  const endGame = () => {
    updateGameStart(true)
    updateShowModal(true)
  }

  return (
    <>
      <section className="flex-and-center">
        <button className="button primary-button" onClick={startGame}>Play</button>
        <button className="button secondary-button" onClick={endGame}>Stop</button>
      </section>
    </>
  )
}

export default Controls