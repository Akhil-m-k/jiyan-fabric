import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Body from '../components/Body'
import Cart from '../components/Cart'
import Footer from '../components/Footer'
import Products from '../components/Products'
import Header from '../components/Header'
import ProductDetails from '../components/ProductDetails'
import CheckOut from '../components/CheckOut'
import Orders from '../components/Orders'
import OrderDetails from '../components/OrderDetails'

const CustomerRouters = () => {
  return (
    <div>
        <div>
            <Header/>
        </div>
        <Routes>
            <Route path='/' element={<Body/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/:levelOne/:levelTwo/:levelThree' element={<Products/>}></Route>
            <Route path='/:product/:productId' element={<ProductDetails/>}></Route>
            <Route path='/checkout' element={<CheckOut/>}></Route>
            <Route path='/account/order' element={<Orders/>}></Route>
            <Route path='/account/order/:orderId' element={<OrderDetails/>}></Route>
        </Routes>
        <div>
            <Footer/>
        </div>
    </div>
  )
}

export default CustomerRouters