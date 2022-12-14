import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { SidebarContextProvider } from './context/SidebarContext'
import './index.css'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <SidebarContextProvider>
      <App />
    </SidebarContextProvider>
  </React.StrictMode>
)