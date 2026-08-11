import React from 'react'
import { Link, Route } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex py-2 items-center px-8 bg-cyan-900 justify-between'>
      <h2 className='text-2xl font-bold'>Sheriyans</h2>
      <div className='flex gap-5'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/product'>product</Link>
      </div>
    </div>
  )
}

export default Navbar
