import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import NavBar from './components/navBar.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NavBar />
  </StrictMode>,
)
