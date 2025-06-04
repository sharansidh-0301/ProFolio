import { Bg } from './components/Bg.jsx'
import { NavBar } from './components/NavBar.jsx'
import { Home } from './components/Home.jsx'
import { Tech } from './components/Tech.jsx'
import { ReactSection } from './components/ReactSection.jsx'
import './App.css'
import { Footer } from './components/Footer.jsx'
import { About } from './components/About.jsx'
function App() {
 
  return (
    <>
           <Bg />
    <NavBar/>
    <Home />
    <About/>
    <Tech/>
    <ReactSection/>
    <Footer/>
    </>
  )
}

export default App
