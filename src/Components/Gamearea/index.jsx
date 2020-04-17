import React, { useContext} from 'react'
import Tile from '../Tile'
import Controls from '../Controls'
import { AppContext } from '../../context'
import './game.css'

const Gamearea = () => {
  const {
    autoSelectedTile,
    updateAutoSelectedTile,
    gameInProgress
  } = useContext(AppContext)

  const selectTile = (row, col) => {
    const data = {}
    data.row = Math.floor(Math.random() * row)
    data.col = Math.floor(Math.random() * col)
    updateAutoSelectedTile(data)
    console.log("Selected Tile : ")
    console.log(autoSelectedTile)
  }

  return (
    <>
      <section className="flex-and-center game-area">
        <div id="tile-box" className="tile-box">
          <div id="game-overlay" className={`overlay ${gameInProgress ? '': 'open'}`}>
            <div>
              Please click on 'Play' to start the game
            </div>
          </div>
          <div id="game">
            <Tile selectTile={selectTile} />
          </div>
        </div>
      </section>
      <Controls selectTile={selectTile} />
    </>
  )
}

export default Gamearea