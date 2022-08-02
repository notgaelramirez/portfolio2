import React from 'react'
import './contact.css'

const ContactScreen = () => {
  return (
    <article className='contact'>
      <header className='contact-header'>
        <p>Contact Me</p>
      </header>

      <section className='contact-info'>
        <div className="contact-text">
          <p>
            Get in touch with me if you have a project you want to bring to reality!
          </p>
        </div>

        <div className="contact-links">
          <div className='contact-link'>
            <i className='bx bx-envelope'></i>
            <p className='network'>Email</p>
            <p className='data'>ramirezbgael@gmail.com</p>
            <a href="#">Write Me!</a>
          </div>

          <div className='contact-link'>
            <i className='bx bxl-linkedin' ></i>
            <p className='network'>LinkedIn</p>
            <p className='data'>https://linkedin.com/in/gaelramirez</p>
            <a href="#">Write Me!</a>
          </div>

          <div className='contact-link'>
            <i className='bx bxl-whatsapp' ></i>
            <p className='network'>WhatsApp</p>
            <p className='data'>729-499-89-51</p>
            <a href="#">Write Me!</a>
          </div>
        </div>

        <div className="contact-form">
          
        </div>
      </section>
    </article>
  )
}

export default ContactScreen