import React from 'react'
import { NavLink } from 'react-router-dom'
import About from './About'

const Navbar = () => {
  return (
    <nav>
        {/* <NavLink to="/about">About</NavLink> */}
        <a href="about">ABout</a>
    </nav>
  )
}

export default Navbar