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
    <NavBar/>
    <Bg />
    <div className='absolute flex  lg:flex-row lg:left-25 lg:top-30 md:flex-col sm:items-center sm:top-30 sm:flex-col'>
      <div className="min480:px-50">
            <Home />
      </div>
      <div className="lg:px-30 sm:mt-20 sm:p-10">    
        <About/>
      </div>
    </div>
    <div className='absolute lg:top-200 sm:top-350 lg:px-30 sm:px-30 w-full'>
    <Tech/>
    </div>
    <div className='absolute lg:top-400 lg:px-10 sm:top-650  sm:w-full sm:px-20'>
    <ReactSection/>
    </div>
    <div className='absolute w-full lg:top-600 sm:top-850' >
    <Footer/>
    </div>
    </>
  )
}

export default App
