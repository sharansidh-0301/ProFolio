import { Bg } from './components/Bg.jsx'
import { NavBar } from './components/NavBar.jsx'
import { Home } from './components/Home.jsx'
import { Tech } from './components/Tech.jsx'
import { ReactSection } from './components/ReactSection.jsx'
import './App.css'
function App() {
 
  return (
    <>
           <Bg />
    <NavBar/>
    <Home />
    <Tech/>
    
    <ReactSection/>
    </>
  )
}

export default App
