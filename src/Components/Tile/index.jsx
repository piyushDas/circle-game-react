import React, { useState, useContext, useEffect } from 'react'
import { AppContext } from '../../context'

const Tile = ({
  selectTile
}) => {
  const {
    autoSelectedTile,
    score,
    updateScore
  } = useContext(AppContext)

  const tiles = []
  const eachRow = ['','','','','','']
  for (let index = 0; index < 6; index++) {
    tiles.push([...eachRow])
  }

  const [classVar, updateClassVar] = useState()
  const [hit, setHit] = useState({})

  useEffect(() => {
    setTimeout(() => {
      blinkTile('set', `index_${autoSelectedTile.row}_${autoSelectedTile.col}`)
    }, 1000)
  }, [autoSelectedTile])

  useEffect(() => {
    setTimeout(() => {
      updateClassVar('')
    }, 200)
  }, [hit])

  const hitTile = (row, col) => () => {
    console.log(row, col)
    if (autoSelectedTile.row === row && autoSelectedTile.col === col) {
      updateScore(score+1)
      selectTile(6, 6)
      blinkTile('hit', `index_${row}_${col}`)
    } else {
      updateScore(score-1)
      blinkTile('miss', `index_${row}_${col}`)
    }
  }

  const blinkTile = (type, id) => {
      if (type === 'hit') {
        updateClassVar('blink-green')
      } else if (type === 'miss'){
        updateClassVar('blink-red')
      } else {
        updateClassVar('blink-blue')
      }
      const [, row, col] = id.split('_')
      setHit({
        row: Number.parseInt(row),
        col: Number.parseInt(col)
      })
  }

  return (
    tiles.map((tile, row) => (
      <div className="tile-row" key={`index_${row}`}>
        {
          tile.map((el, col) => (
            <div
              className={`tile ${hit.row === row && hit.col === col ? classVar: ''}`}
              key={`index_${row}_${col}`}
              id={`index_${row}_${col}`}
              onClick={hitTile(row, col)}
            />
          )) 
        }
      </div>
    ))
  )
}

export default Tile