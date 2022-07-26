import React from 'react'
import './home.css'
import gael from '/src/assets/gael2.png'

const HomeScreen = () => {
  return (
    <div className='home'>
      <div className='home-black'></div>

      <div className='home-title'>
        <p className='home-name'>
          GAEL
        </p>
        <p className='home-lastname'>
          RAMIREZ
        </p>
      </div>

      <div className='home-subtitle'>
        <p>
          Frontend Developer
        </p>
      </div>

      <div className='home-buttons'>
        <button className='home-cv-btn'>
          Download CV
        </button>

        <button className='home-am-btn'>
          About Me
        </button>
      </div>
    </div>
  )
}

export default HomeScreen