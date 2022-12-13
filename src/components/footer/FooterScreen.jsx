import React from 'react'
import './footer.css'

const FooterScreen = () => {
  return (
    <div className='footer'>
      <div className="footer-title">
        <p className='footer-name'>Gael Ramirez</p>
        <p className='footer-subtitle'>Frontend Developer</p>
      </div>

      <div className="footer-links">
        <a href="mailto:ramirezbgael@gmail.com" target='_blank'><i className='bx bx-envelope footer-link'></i></a>
        <a href="https://www.linkedin.com/in/gaelramirez"><i className='bx bxl-linkedin footer-link' ></i></a>
        <a href="https://wa.me/7294998951/?text=Hola!"><i className='bx bxl-whatsapp footer-link' ></i></a>
      </div>

      <div className='footer-copyright'>
        <p>&copy; Gael Ramirez 2022</p>
      </div>
    </div>
  )
}

export default FooterScreen