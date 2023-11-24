import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Home from './home'
import Product from './product'
import Cart from './cart'
import Contact from './contact'
import Login from './login'
import Register from './register'
import ResetPassword from './resetPassword'
import ProductManager from './compoment/productManager'
import Managers from './compoment/managers'
import About from './about'
import UserDetail from './userDetail'
import Showroom from './showroom'
import Guarantee from './guarantee'
import News from './news'
const Rout = ({setIsAuthen,product, setProduct, detail, view, close, setClose, cart, setCart, addtocart}) => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home detail={detail} view={view} close={close} setClose={setClose} addtocart={addtocart}/>}/>
        <Route path='/product' element={<Product detail={detail} view={view} close={close} setClose={setClose} addtocart={addtocart}/>} />
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About /> }/>
        <Route path='/login' element={<Login setIsAuthen={setIsAuthen} />} />
        <Route path='/register' element={<Register />} />
        <Route path='/resetpassword' element={<ResetPassword />} />
        <Route path='/productManager' element={<ProductManager />} />
        <Route path='/managers' element={<Managers />} />
        <Route path='/userdetail' element={<UserDetail/>}/>
        <Route path='/showroom' element={<Showroom/>}/>
        <Route path='/guarantee' element={<Guarantee/>}/>
        <Route path='/news' element={<News/>}/>
    </Routes>
    </>
  )
}

export default Rout