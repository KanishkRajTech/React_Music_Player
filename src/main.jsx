import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter} from 'react-router-dom'
import PlayerContextProvider from './Contex/PlayerContex.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <PlayerContextProvider>
      <App />
      </PlayerContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
