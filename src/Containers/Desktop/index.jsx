import React from 'react'
import Header from '../../Components/Header'
import Score from '../../Components/Score'
import Gamearea from '../../Components/Gamearea'
import Instructions from '../../Components/Instructions'
import './desktop.css'

const DesktopShell = () => {
  return (
    <div className="desktop-shell">
      <Header componentClassName="page-title" />
      <Score />
      <Gamearea />
      <Instructions />
    </div>
  )
}

export default DesktopShell