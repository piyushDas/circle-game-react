import React, { useState, createContext } from 'react'

export const AppContext = createContext({
  autoSelectedTile: {}
})

export const AppState = ({ children }) => {
  /*
    States used in the context
  */
  const [autoSelectedTile, updateAutoSelectedTile] = useState({row: 0, col: 0})
  const [score, updateScore] = useState(0)
  const [gameInProgress, updateGameStart] = useState(true)
  const [showModal, updateShowModal] = useState(false)

  return (
    <AppContext.Provider
      value={{
        autoSelectedTile,
        updateAutoSelectedTile,
        score,
        updateScore,
        gameInProgress,
        updateGameStart,
        showModal,
        updateShowModal
      }}
    >
      {children}
    </AppContext.Provider>
  )
}