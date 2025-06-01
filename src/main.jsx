import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Bg } from './components/Bg.jsx'
import { NavBar } from './components/NavBar.jsx'
import { Home } from './components/Home.jsx'
import { Skills } from './components/Skills.jsx'
import { Tech } from './components/Tech.jsx'
import { ReactSection } from './components/ReactSection.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Bg />
    <NavBar/>
    <Home />
    <Tech/>
    <App />
    <ReactSection/>
  </StrictMode>,
)
