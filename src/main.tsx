import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Rotas from './routes'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <StrictMode>
    <Rotas />
  </StrictMode>
  </BrowserRouter>
)
