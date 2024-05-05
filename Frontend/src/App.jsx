import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/home'
import Chat from './pages/chat/chat'
import Account from './pages/account/account'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='home' element={<Chat />} />
      <Route path='account' element={<Account />} />
    </Routes>
  )
}

export default App
