import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import Header from './components/Header.jsx'
import Main_list from './components/Main_list.jsx'
import Footer from './components/Footer.jsx'
import './css/Main.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
