import React from 'react'
import ReactDOM from 'react-dom/client'
import { RootCmp } from './App.jsx'
import './index.css'
import './assets/styles/main.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RootCmp />
  </React.StrictMode>,
)
