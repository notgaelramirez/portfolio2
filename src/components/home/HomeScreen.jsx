import React from 'react'
import './home.css'

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
          <a download href="./src/assets/gael-cv.pdf">Download CV</a>
        </button>

        <button className='home-am-btn'>
          <a href="#about">About Me</a>
        </button>
      </div>

      <div className='home-links'>
        <div className='home-link'>
          <a href="#"><i className='bx bxl-linkedin'></i></a>
        </div>
        <div className='home-link'>
          <a href="#"><i className='bx bxl-whatsapp'></i></a>
        </div>
        <div className='home-link'>
          <a href="#"><i className='bx bxl-github'></i></a>
        </div>
      </div>

      <div className='home-scroll-down'>
        <div><p>scroll down</p></div>
        <i className='bx bx-mouse'></i>
      </div>
    </div>
  )
}

export default HomeScreen