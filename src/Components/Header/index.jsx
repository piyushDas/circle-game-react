import React from 'react'
import './header.css'

const Header = ({
  componentClassName
}) => {
  return (
    <header className="top-header flex-and-center flex-wrap" >
      <div className={componentClassName}>
        Hit the circle
      </div>
      <section className="">
        Test your skill how many circle can you hit?
      </section>
    </header>
  )
}

export default Header