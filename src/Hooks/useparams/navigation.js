import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './home'
import About from './about'

function Navigation() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about/:id" element={<About/>}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Navigation