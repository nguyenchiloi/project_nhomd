import React, { useEffect, useState } from 'react'
import Nav from './nav'
import Rout from './rout';
import { BrowserRouter } from 'react-router-dom';
import Footer from './footer';
import Productdetail from './productdetail';
import axios from 'axios';

const App = () => {
  const [isAuthen, setIsAuthen] = useState(false);
  const type = localStorage.getItem('type');
  // add to cart
  const [cart, setCart] = useState([]);
  //product Detail
  const [close, setClose] = useState(false);
  const [detail, setDetail] = useState([])
  //filter product
  const [product, setProduct] = useState([])
  const searchbtn = (productname) => {
    const change = product.filter((x) => {
      return x.name === productname
    })
    setProduct(change)
  }
  //product detail
  const view = (product) => {
    setDetail([{ ...product }])
    setClose(true)
  }
  // add to cart
  const addtocart = (product) => {
    const exsit = cart.find((x) => {
      return x.id === product.id
    })
    if (exsit) {
      alert("This Product is already added to cart")
    }
    else {
      setCart([...cart, { ...product, qty: 1 }])
      alert("product is added to cart")
    }
  }
  return (
    <>
      <BrowserRouter>
        <Nav isAuthen={isAuthen} setIsAuthen={setIsAuthen} searchbtn={searchbtn} />
        <>
          <Rout setIsAuthen={setIsAuthen} product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} cart={cart} setCart={setCart} addtocart={addtocart} />
          <Footer />
        </>
      </BrowserRouter>
    </>
  )
}

export default App