import { useState } from 'react'
import "tailwindcss"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Body from './Body'
import Login from './Login'

function App() {

  return (
    <>
      <BrowserRouter basename='/'>
        <Routes>
          <Route path="/" element={<Body/>}>
            {/* these are children routes */}
            <Route path="/login" element={<Login/>}/>
            <Route path="/profile" element={<Profile/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
