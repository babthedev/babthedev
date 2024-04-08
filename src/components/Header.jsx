import React, { useState } from 'react'
import Drag_Logo from '/src/assets/Drag Logo.png'
import DragLogo from '/src/assets/DragLogo.png'
import instagramDark from '/src/assets/instagram-logo.png'
import xLogo from '/src/assets/x-logo.png'
import { Link } from 'react-router-dom'
import close from "../assets/close-light.png"
import menu from "../assets/menu-light.png"
const Header = () => {
  const [isClose, setIsClose] = useState(false)
  return (
    <header className='fixed z-50 top-0 flex justify-between px-6 md:px-16 lg:px-36 left-0 items-start lg:items-center py-4 shadow-lg dark:shadow-content dark:shadow-sm w-full'>
      <Link to="/">
        <img src={Drag_Logo} className=' mx-4 mt-4 hidden dark:block' alt="logo" width="40px"/>
        <img src={DragLogo} className=' mx-4 xl:mt-4 dark:hidden block' alt="logo" width="40px"/>
      </Link>
      {!isClose && <img src={menu} width="30" className='lg:hidden' alt="" onClick={() => setIsClose(true)}/>}
        <ul className='gap-6 lg:gap-12 items-center text-lg lg:text-xl justify-between lg:flex hidden'>
        <li className={`hover:border-black hover:border-2 hover:p-2`}>
          <Link to="/work">
          <h3 className='text-content'>My Work</h3>
          </Link>
        </li>
        <li className='hover:border-black hover:border-2 hover:p-2 text-content cursor-pointer'>
          <a href="https://babthedev.substack.com/" target='_blank'>My Articles</a>
          </li>
        <li className='hover:border-black hover:border-2 hover:p-2 text-content cursor-pointer'>
        <h2><a href="https://twitter.com/babthedev" target='_blank'><img src={xLogo} width="30px" alt="Abdulrahman's X" /></a></h2>
        </li>
        <li className='hover:border-black hover:border-2 hover:p-2 text-content cursor-pointer'>
        <h2><a href="https://instagram.com/babthedev" target='_blank'><img src={instagramDark} width="30px" alt="Abdulrahman's Instagram" /></a></h2>
        </li>
      </ul>
      {isClose &&
        <ul className='gap-6 lg:gap-12 items-center text-lg lg:text-xl justify-between lg:hidden flex flex-col bg-bg w-1/2'>
          <img src={close} alt="" width="30" className='right-4 absolute top-4' onClick={() => setIsClose(false)}/>
        <li className={`hover:border-black hover:border-2 hover:p-2 mt-12`}>
          <Link to="/work">
          <h3 className='text-content'>My Work</h3>
          </Link>
        </li>
        <li className='hover:border-black hover:border-2 hover:p-2 text-content cursor-pointer'>
          <a href="https://babthedev.substack.com/" target='_blank'>My Articles</a>
          </li>
        <li className='hover:border-black hover:border-2 hover:p-2 text-content cursor-pointer'>
        <h2><a href="https://twitter.com/babthedev" target='_blank'><img src={xLogo} width="30px" alt="Abdulrahman's X" /></a></h2>
        </li>
        <li className='hover:border-black hover:border-2 hover:p-2 text-content cursor-pointer'>
        <h2><a href="https://instagram.com/babthedev" target='_blank'><img src={instagramDark} width="30px" alt="Abdulrahman's Instagram" /></a></h2>
        </li>
      </ul>}
    </header>
  )
}

export default Header