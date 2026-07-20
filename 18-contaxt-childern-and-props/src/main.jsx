import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Apicontextes from './context/Apicontextes.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <Apicontextes>
    <App />
  </Apicontextes>,
)
