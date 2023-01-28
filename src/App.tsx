import React from 'react'
import logo from './logo.svg'
import './App.css'
import { LoginBtn } from './Login'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello world.</p>
        <LoginBtn />
      </header>
    </div>
  )
}

export default App
