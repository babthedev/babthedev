import React from 'react'
import { Link } from 'react-router-dom'

const Notfound = () => {
  return (
    <div>
        <h2>Sorry this page doesn't exist.</h2>
        <Link to="/">
        <button className='lg:text-xl text-md font-extralight py-2 lg:py-4 px-6 lg:px-10 border border-content mt-8'>Back to home</button>
        </Link>
    </div>
  )
}

export default Notfound