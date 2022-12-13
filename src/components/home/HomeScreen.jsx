import React from 'react'
import './home.css'
import { Link, animateScroll as scroll } from 'react-scroll'
import cv from '/src/assets/gael-cv.pdf'

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
          <a download href={cv} target='_blank'>Download CV</a>
        </button>

        <button className='home-am-btn'>
          <Link to='about' smooth={true}>About Me</Link>
        </button>
      </div>

      <div className='home-links'>
        <div className='home-link'>
          <a href="https://www.linkedin.com/in/gaelramirez" target='_blank'><i className='bx bxl-linkedin'></i></a>
        </div>
        <div className='home-link'>
          <a href="https://wa.me/7294998951/?text=Hola!" target='_blank'><i className='bx bxl-whatsapp'></i></a>
        </div>
        <div className='home-link'>
          <a href="https://github.com/ramirezbgael" target='_blank'><i className='bx bxl-github'></i></a>
        </div>
      </div>

      <div className='home-scroll-down'>
        <Link to='about' smooth={true}>
          <div className='home-scroll'><p>scroll down</p></div>
          <i className='bx bx-mouse'></i>
        </Link>
      </div>
    </div>
  )
}

export default HomeScreen