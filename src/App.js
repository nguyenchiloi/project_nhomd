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
  //product Detail
  const [close, setClose] = useState(false);
  const [detail, setDetail] = useState([])
  //filter product
  const [product, setProduct] = useState([])
  //product detail
  const view = (product) => {
    setDetail([{ ...product }])
    setClose(true)
  }
  const [user, setUser] = useState([]);
  const userapi = () =>{
    let token = localStorage.getItem('token');
    axios.get(`http://127.0.0.1:8000/api/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => {
        const persons = res.data;
        setUser(persons);
      })
      .catch(error => console.log(error));
  }
  useEffect(() => {
    userapi();
  }, []);
  return (
    <>
      <BrowserRouter>
        <Nav isAuthen={isAuthen} setIsAuthen={setIsAuthen} setUser={setUser}  />
        <>
          <Rout setIsAuthen={setIsAuthen} product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} user={user} userapi={userapi}/>
          <Footer />
        </>
      </BrowserRouter>
    </>
  )
}

export default App