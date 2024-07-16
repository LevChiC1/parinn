import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header.jsx'
import Main_list from './components/Main_list.jsx'
import Footer from './components/Footer.jsx'
import Login from './components/Login.jsx'
import './css/Main.css'
import Registrate from './components/Registrate.jsx'
import { Route, Routes, json } from "react-router-dom"
import AddTicket from './components/AddTicket.jsx'
import Profile from './components/Profile.jsx'



function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="" element={<Login />} />
            <Route path="/registrate" element={<Registrate />} />
            <Route path="/main" element={<Main_list />} />
            <Route path="/add_ticket" element={<AddTicket/>} />
            <Route path="/profile" element={<Profile/>} />
          </Route>
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
