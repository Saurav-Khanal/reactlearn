import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import About from './components/About'
import { Contact } from 'lucide-react'
import Product from './components/Product'
import Men from './components/men'
import Women from './components/Women'
import Notfound from './components/Notfound'
import Kids from './components/Kids'

const App = () => {
  return (
    <div className='h-screen text-white'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/product' element={<Product/>}>
        <Route path='men' element={<Men/>}/>
        <Route path='women' element={<Women/>}/>
        <Route path='kids' element={<Kids/>}/>
        </Route>
        <Route path='*' element={<Notfound/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
