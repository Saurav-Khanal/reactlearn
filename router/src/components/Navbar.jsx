import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className='nav'>
      <h2>NepCod</h2>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/Contact'>Contact</Link>
      </div>
      </div>
    </div>
  )
}

export default Navbar
