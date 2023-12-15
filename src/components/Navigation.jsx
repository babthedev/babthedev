import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav className='flex flex-col absolute gap-5 items-center bottom-12 right-12 justify-center'>
            <a href='/' smooth={true} duration={500} className={({isActive})=> isActive ? "w-5 h-5 bg-none border border-black" : 'w-3 h-3 bg-gray-400 rotate-45'}><div ></div></a>
            <a href='/about' smooth={true} duration={500} className={({isActive})=> isActive ? "w-5 h-5 bg-none border border-black" : 'w-3 h-3 bg-gray-400 rotate-45'}><div ></div></a>
            <a href='/projects' smooth={true} duration={500} className={({isActive})=> isActive ? "w-5 h-5 bg-none border border-black" : 'w-3 h-3 bg-gray-400 rotate-45'}><div ></div></a>
            <a href='/contact' smooth={true} duration={500} className={({isActive})=> isActive ? "w-5 h-5 bg-none border border-black" : 'w-3 h-3 bg-gray-400 rotate-45'}><div ></div></a>
     </nav>
  )
}

export default Navigation