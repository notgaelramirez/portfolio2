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
        <i className='bx bx-envelope footer-link'></i>
        <i className='bx bxl-linkedin footer-link' ></i>
        <i className='bx bxl-whatsapp footer-link' ></i>
      </div>

      <div className='footer-copyright'>
        <p>&copy; Gael Ramirez 2022</p>
      </div>
    </div>
  )
}

export default FooterScreen