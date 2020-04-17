import React from 'react'
import Header from '../../Components/Header'
import Score from '../../Components/Score'
import Gamearea from '../../Components/Gamearea'
import Instructions from '../../Components/Instructions'
import './mobile.css'

const MobileShell = () => {
  return (
    <div className="mobile-shell">
      <Header componentClassName="align-center page-title" />
      <Score />
      <Gamearea />
      <Instructions />
    </div>
  )
}

export default MobileShell