import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductSearch from './Pages/shoppingPage/searchPage';
import Checkout from './Pages/shoppingPage/checkout';

export default function App() {
  return (
   <>
    <Router>
        <Routes>
            <Route path='/' element={<ProductSearch/>}/>
            <Route path='/buyItem' element={<Checkout/>}/>
        </Routes>
    </Router>
   </>
  )
}