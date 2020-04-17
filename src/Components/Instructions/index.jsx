import React from 'react'
import './instructions.css'

const Instructions = ({
  componentClassName
}) => {
  return (
    <section className="flex-and-center">
      <ul className="instruction">
        <div>Instruction</div>
        <li>Click on the circle as they are selected randomly by the computer</li>
        <li>1 point per hit, minus 1 per miss</li>
      </ul>
    </section>
  )
}

export default Instructions