import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './assets/src/home/Home'
import Panicbutton from './assets/src/panico/Panicbutton'
function Approuter() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/panicbutton" element={<Panicbutton />} />
      </Routes>

  )
}

export default Approuter

