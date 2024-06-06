import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './app.tsx'
import { CoinContextProvider } from "./context/coin-context.js"
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <CoinContextProvider>

        <App />
      </CoinContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
