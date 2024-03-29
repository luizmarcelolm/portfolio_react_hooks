import { useState } from 'react'
import './App.css'
import Navbar from './components/section/Navbar'
import Skills from './components/section/Skills'
import Projects from './components/section/Projects'
import Presentation from './components/section/Presentation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <Skills/>
      <Projects/>
      <Presentation/>
    </div>
  )
}

export default App
