import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {
    const navigate=useNavigate()
  return (
    <div className='py-2 px-5 bg-cyan-800'>
      <button onClick={()=>{
        navigate('/')
      }} className='font-medium bg-emerald-800 px-5 py-2 rounded m-2 cursor-pointer active:scale-95' >
        Return to home page
      </button>

      <button onClick={()=>{
        navigate(-1)
      }} className='font-medium bg-emerald-800 px-5 py-2 rounded m-2 cursor-pointer active:scale-95' >
        back
      </button>

      
      <button onClick={()=>{
        navigate(+1)
      }} className='font-medium bg-emerald-800 px-5 py-2 rounded-xl m-2 cursor-pointer active:scale-95' >
        next
      </button>

    </div>
  )
}

export default Navbar2
