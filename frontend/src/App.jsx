import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/landingPage/LandingPage';
import ProductSearch from './Pages/shoppingPage/searchPage';


export default function App() {
  return (
   <>
    <Router>
        <Routes>
            <Route path='/' element={<LandingPage/>}/>
            <Route path='/buyItem' element={<ProductSearch/>}/>
        </Routes>
    </Router>
   </>
  )
}