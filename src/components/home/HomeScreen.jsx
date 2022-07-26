import React from 'react'
import './home.css'
import gael from '/src/assets/GAEL.png'

const HomeScreen = () => {
  return (
    <div className='home'>
      <div className='home-black'></div>

      <img className='home-title' src={gael} alt="" />
      <p className='home-subtitle'>
        Frontend Developer
      </p>

      <div className="home-buttons">
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