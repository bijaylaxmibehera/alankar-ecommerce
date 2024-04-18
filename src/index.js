import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { makeServer } from './server'
import { ToastContainer } from 'react-toastify'

// Call make Server
makeServer()

ReactDOM.render(
  <React.StrictMode>
    <ToastContainer />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
