import React from 'react'
import Nav2 from './Nav2'

const Navbar = ({children,theme}) => {
    console.log(children[0]);
  return (
    <div className='nav'>
        <h2>Sheriyans</h2>
        {children[0]}
        <Nav2 theme={theme}/>
    </div>
  )
}

export default Navbar
