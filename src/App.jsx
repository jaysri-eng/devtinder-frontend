import { useState } from 'react'
import "tailwindcss"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <h1 class="text-3xl font-bold underline">Hello</h1>
    </>
  )
}

export default App
