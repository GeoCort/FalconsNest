import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './output.css'
import axios from 'axios'
import Home from './components/Home'
function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
    <Home />
    </div>
  )
}

export default App
