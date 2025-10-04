import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Collections from './pages/Collections'
import Product from './pages/Product'
import Contact from './pages/Contact'
import Navbar from './components/HomeComponets/Navbar/Navbar'
import Gallery from './pages/Gallery'
import Footer from './components/HomeComponets/Footer/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Cart from './pages/Cart'
import FloatingBtns from './components/FloatingBtns/FloatingBtns'
import ScrollToTop from './components/ScrollToTop'

const App = () => {
  return (
    <>
      <div>
        <ToastContainer position="top-right" autoClose={3000} />
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/collections' element={<Collections />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        <FloatingBtns />
        <Footer />
      </div>
    </>
  )
}

export default App
