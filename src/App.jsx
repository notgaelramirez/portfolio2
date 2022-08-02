import { useState } from 'react'
import './App.css'
import AboutScreen from './components/about/AboutScreen'
import HomeScreen from './components/home/HomeScreen'
import { Link, animateScroll as scroll } from 'react-scroll'
import WorkScreen from './components/work/WorkScreen'
import ContactScreen from './components/contact/ContactScreen'

function App() {

  return (
    <div className="App">
      <HomeScreen />
      <div>
        <nav className='nav'>
          <h2>GR</h2>
        </nav>
        <AboutScreen />
        <WorkScreen />
        <ContactScreen />
      </div>
    </div>
  )
}

export default App
