import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from '../Akshay/Pages/LandingPage'
import Bodycarepage from '../Pages/Bodycarepage'
import ShippingPage from "../components/pankajsingh/Shipping/ShippingPage"
import AdminPage from '../Pages/AdminPage'
import CartPage from '../Pages/CartPage'
import Login from '../components/pankajsingh/Login/Login'
import SignUp from '../components/pankajsingh/SignUp/SignUp'
import ProductDetails from '../components/productDetails/ProductDetails'


const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/home" element={<LandingPage/>}/>
        <Route path="/bodyCare" element={<Bodycarepage/>}/>
        <Route path='/bodyCare/:id' element={<ProductDetails />} />
        <Route path="/shipping" element={<ShippingPage/>}/>
        <Route path="/admin" element={<AdminPage/>}/>
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
    </Routes>
  )
}

export default AllRoutes