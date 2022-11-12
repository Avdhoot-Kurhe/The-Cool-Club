import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from '../Akshay/Pages/LandingPage'
import Bodycarepage from '../Pages/Bodycarepage'
import ShippingPage from "../components/pankajsingh/Shipping/ShippingPage"
import AdminPage from '../Pages/AdminPage'
import CartPage from '../Pages/CartPage'


const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/home" element={<LandingPage/>}/>
        {/* <Route path="/bodyCare" element={<Bodycarepage/>}/> */}
        <Route path="/shipping" element={<ShippingPage/>}/>
        <Route path="/admin" element={<AdminPage/>}/>
        <Route path="/cart" element={<CartPage/>}/>
    </Routes>
  )
}

export default AllRoutes