import { useState } from 'react'
import './App.css'
import AboutScreen from './components/about/AboutScreen'
import HomeScreen from './components/home/HomeScreen'
import { Link, animateScroll as scroll } from 'react-scroll'
import WorkScreen from './components/work/WorkScreen'

function App() {

  return (
    <div className="App">
      <HomeScreen />
      <AboutScreen />
      <WorkScreen />
    </div>
  )
}

export default App
