import React from 'react'
import { Routes, Route, useParams} from 'react-router-dom'
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
import ViewLove from './viewlove'
import ProductDetail from './productdetail'
const Rout = ({setIsAuthen, detail, view, close, setClose, userapi, user}) => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home detail={detail} view={view} close={close} setClose={setClose} user={user}/>}/>
        <Route path='/product' element={<Product detail={detail} view={view} close={close} setClose={setClose} user={user}/>}/>
        <Route path='/cart' element={<Cart user={user}/>} />
        <Route path='/like' element={<ViewLove user={user}/>} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About /> }/>
        <Route path='/login' element={<Login setIsAuthen={setIsAuthen} userapi={userapi}/>} />
        <Route path='/register' element={<Register />} />
        <Route path='/resetpassword' element={<ResetPassword />} />
        <Route path='/productManager' element={<ProductManager />} />
        <Route path='/managers' element={<Managers />} />
        <Route path='/userdetail' element={<UserDetail user={user}/>}/>
        <Route path='/showroom' element={<Showroom/>}/>
        <Route path='/guarantee' element={<Guarantee/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/productdetail/:id' element={<ProductDetail user={user}/>} />
    </Routes>
    </>
  )
}

export default Rout