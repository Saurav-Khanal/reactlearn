import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
        <div className='flex justify-center gap-10 text-3xl mt-10 '>
            <Link to='/product/men'>Men</Link>
            <Link to='/product/women'>women</Link>
            <Link to='/product/kids'>Kids</Link>
        </div>
        <Outlet/>
    </div>
  )
}

export default Product
