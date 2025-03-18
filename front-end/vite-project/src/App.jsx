import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Nav from './component/Nav'
import HomePage from './component/page/Home';
import './App.css'

function App() {
  

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/" element={} />
        <Route path="/" element={} /> */}
      </Routes>
    </>
  )
}

export default App
