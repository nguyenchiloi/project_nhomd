import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ProductManager from './compoment/productManager'
import Managers from './compoment/managers'
import Login from './login'
import Home from './home'
const RoutAdmin = ({ setIsAuthen, product, setProduct, detail, view, close, setClose, cart, setCart, addtocart }) => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home detail={detail} view={view} close={close} setClose={setClose} addtocart={addtocart} />} />

        <Route path='/managers' element={<Managers />} />
        <Route path='/login' element={<Login setIsAuthen={setIsAuthen} />} />
        <Route path='/productManager' element={<ProductManager />} />
      </Routes>
    </>
  )
}

export default RoutAdmin