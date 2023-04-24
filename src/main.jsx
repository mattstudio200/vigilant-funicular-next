import React from 'react'
import ReactDOM from 'react-dom/client'
import AppState from './context/app/AppState'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppState>
      <App />
    </AppState>
  </React.StrictMode>,
)
