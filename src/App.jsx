import React, { useState } from 'react'
import {Route, Routes, Navigate} from "react-router-dom"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import Signup from "./pages/Signup"
import Product from "./pages/Product"
import Page404 from './pages/Page404'
import NavigationBar from './components/NavigationBar'
import Footersection from './components/Footersection'
import CategoryPage from './pages/CategoryPage'
import ProductPage from './pages/ProductPage'

export default function App() {
  const[user,setuser] = useState (true)
    return (
    <>
<NavigationBar/>
{
user ?
    (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutus/*" element={<AboutUs />} />
      <Route path="/product/*" element={<Product />} />
      <Route path="/products/:productID" element={<ProductPage />} />
      <Route path="/products/category/:categoryName" element={<CategoryPage/>} />
      <Route path="*" element={<Page404 />} />
    </Routes>
    )
    :
    (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutus/*" element={<AboutUs />} />
      <Route path="/product/*" element={<Product />} />
      <Route path="/signup/*" element={<Signup />} />
      <Route path="*" element={<Navigate to="/signup" replace={true} />} />
    </Routes>
    )

    }
   <Footersection/> 
  </>
  )
}

// export default App