import { useState } from 'react'
import './App.css'
import Navbar from './components/section/Navbar'
import Skills from './components/section/Skills'
import Projects from './components/section/Projects'
import Presentation from './components/section/Presentation'
import Footer from './components/section/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <Skills/>
      <Projects/>
      <Presentation/>
      <Footer/>
    </div>
  )
}
export default App
