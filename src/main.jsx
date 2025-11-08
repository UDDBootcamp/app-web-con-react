import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom' // <-- 1. Importas el "sobre"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* <-- 2. Pones la etiqueta de apertura del "sobre" */}
      <App />       {/* <-- 3. Metes la "carta" (App) adentro */}
    </BrowserRouter> {/* <-- 4. Cierras el "sobre" */}
  </React.StrictMode>,
)