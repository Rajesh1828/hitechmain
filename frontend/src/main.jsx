import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { StoreContextFileProvider } from './Context/FileContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
<StoreContextFileProvider>

        <App />
</StoreContextFileProvider>

    </BrowserRouter>
  </StrictMode>,
)
