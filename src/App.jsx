import { useState } from 'react'
import './App.css'
import AboutScreen from './components/about/AboutScreen'
import HomeScreen from './components/home/HomeScreen'
import { Link, animateScroll as scroll } from 'react-scroll'

function App() {

  return (
    <div className="App">
      <HomeScreen />
      <AboutScreen />
    </div>
  )
}

export default App
