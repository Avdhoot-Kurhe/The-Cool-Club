import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from '../Akshay/Pages/LandingPage'
import Bodycarepage from '../Pages/Bodycarepage'
import ShippingPage from "../components/pankajsingh/Shipping/ShippingPage"


const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/home" element={<LandingPage/>}/>
        <Route path="/bodyCare" element={<Bodycarepage/>}/>
        <Route path="/shipping" element={<ShippingPage/>}/>
    </Routes>
  )
}

export default AllRoutes