import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Mod from './components/Mod'
import BusinessandIndustrial from './components/categories/BusinessandIndustrial'
import Clothing from './components/categories/Clothing'
import Collectables from './components/categories/Collectables'
import Electronics from './components/categories/Electronics'
import HealthandBeauty from './components/categories/HealthandBeauty'
import HomeandGarden from './components/categories/HomeandGarden'
import Motors from './components/categories/Motors'
import Sports from './components/categories/Sports'
import Toys from './components/categories/Toys'
import Footer from './components/Footer'
import Search from './components/Search'

import Feedback from './pages/Feedback'
import About from './pages/About'
import Store from './pages/Store'
function App() {
  return (
    <> 
    {/* <Layout /> */}
    <BrowserRouter>
    
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="mod" element={<Mod/>} />
      <Route path='home' element={<Home/>}/>
      <Route path='businessandindustrial' element={<BusinessandIndustrial/>}/>
      <Route path='clothing' element={<Clothing/>} />
      <Route path='collectables' element={<Collectables/>} />
      <Route path='electronics' element={<Electronics/>} />
      <Route path ='healthandbeauty' element={<HealthandBeauty/>} />
      <Route path='homeandgarden' element={<HomeandGarden/>} />
      <Route path='motors' element={<Motors/>} />
      <Route path='sports' element={<Sports/>} />
      <Route path='toys' element={<Toys/>} />
      <Route path='search' element={<Search/>} />
      
      <Route path="/store" element={<Store />} />
      <Route path="/about" element={<About />} />
      <Route path="/feedback" element={<Feedback />} />

      </Routes>
      <Footer/>
    </BrowserRouter>
    
    </>
  )
}

export default App;
