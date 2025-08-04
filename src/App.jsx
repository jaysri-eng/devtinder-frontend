import { useState } from 'react'
import "tailwindcss"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Body from './Body'
import Login from './Login'
import Profile from './Profile'
import Feed from './Feed'
import { Provider } from 'react-redux'
import appStore from './utils/appStore'
import Connections from './Connections'
import Requests from './Requests'

function App() {

  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename='/'>
          <Routes>
            <Route path="/" element={<Body/>}>
              {/* these are children routes */}
              <Route path="/login" element={<Login/>}/>
              <Route path="/feed" element={<Feed/>}/>
              <Route path="/profile" element={<Profile/>}/>
              <Route path="/connections" element={<Connections/>}/>
              <Route path="/requests" element={<Requests/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
