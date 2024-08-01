import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='flex items-center justify-center py-8'>
      <ul className='flex gap-10 bg-white text-black rounded-2xl px-8 py-2 '>
        <li><NavLink className={'active:border-b-4 border-b-black'} to="/">Home</NavLink></li>
        <li><NavLink className={'active:border-b-4 border-b-black'} to="/about">About</NavLink></li>
        <li><NavLink className={'active:border-b-4 border-b-black'} to="/skills">Skills</NavLink></li>
        <li><NavLink className={'active:border-b-4 border-b-black'} to="/projects">Projects</NavLink></li>
        <li><NavLink className={'active:border-b-4 border-b-black'} to="/contact">Contact</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar
