import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import SalesApp from './SalesApp'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SalesApp/>
    
  </StrictMode>,
)
