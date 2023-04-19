import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './pages/Main'
import Login from "./components/Login"
import Register from "./components/Register"
import "./App.css"
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} ></Route>
          <Route path='/register' element={<Register />} ></Route>
          <Route path='/dashboard' element={<Main />} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
