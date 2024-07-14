import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Session4/Home/Home'
import About from './Components/Session4/About/About'
import NotFound from './Components/Session4/NotFound/NotFound'
import Products from './Components/Session4/Products/Products'
import SingleProduct from './Components/Session4/Products/SingleProduct'
import AquaFina from './Components/redux/CompA'
import CartComp from './Components/Session4/Redux/CartComp'
const App = () => {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/cart' element={<CartComp/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/products/:id' element={<SingleProduct/>}/>
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </>
  )
}

export default App
