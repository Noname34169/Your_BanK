import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Careers from './pages/Careers'
import About from './pages/About'
import Security from './pages/Security'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SingupPage'
import AdminPanel from './pages/AdminPanel'

const App = () => {
  return (
    <>

    <Header />

    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/careers' element={<Careers />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/security' element={<Security />}/>
      <Route path='/signup' element={<SignupPage />}/>
      <Route path='/login' element={<LoginPage />}/>
      <Route path='/admin' element={<AdminPanel />}/>
    </Routes>

    <Footer />
    </>
  )
}

export default App