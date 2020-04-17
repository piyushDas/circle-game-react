import React, { useContext } from 'react'
import Modal from '../Modal'
import './score.css'
import { AppContext } from '../../context'

const Score = () => {
  const { score,
    showModal,
    updateScore,
    // updateGameStart,
    updateShowModal } = useContext(AppContext)
  const closeModal = () => {
    updateShowModal(false)
    // updateGameStart(true)
    updateScore(0)
  }

  return (
    <>
      <div className='score-input'>
        <section className="score-box">
            <span>Score</span>
            <div id="score">{score}</div>
        </section>
      </div>
      {showModal && <Modal title="Game over" message={`Your score is ${score}`} closeHandler={closeModal} />}
    </>
  )
}

export default Score