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
            <a href="mailto:ramirezbgael@gmail.com">Write Me!</a>
          </div>

          <div className='contact-link'>
            <i className='bx bxl-linkedin' ></i>
            <p className='network'>LinkedIn</p>
            <p className='data'>https://linkedin.com/in/gaelramirez</p>
            <a href="https://www.linkedin.com/in/gaelramirez" target='_blank'>Write Me!</a>
          </div>

          <div className='contact-link'>
            <i className='bx bxl-whatsapp' ></i>
            <p className='network'>WhatsApp</p>
            <p className='data'>729-499-89-51</p>
            <a href="https://wa.me/7294998951/?text=Hola!" target='_blank'>Write Me!</a>
          </div>
        </div>

        {/*<div className="contact-form-container">

          <div className="form-text">
            <p>Tell me your project:</p>
          </div>

          <form action="https://formspree.io/f/moqryoll" method="POST" className="contact_form">
            
            <div className="contact_form-div">
              <label for="name" className="contact_form-tag">Name</label>
              <input type="text" placeholder="Insert your name" className="contact_form-input" name="name" />
            </div>

            <div className="contact_form-div">
              <label for="email" className="contact_form-tag">Mail</label>
              <input type="email" placeholder="Insert your email" className="contact_form-input" name="email" />
            </div>

            <div className="contact_form-div contact_form-area">
              <label for="message" className="contact_form-tag">Project</label>
              <textarea id="" cols="30" rows="10" placeholder="Write your project" className="contact_form-input" name="message"></textarea>
            </div>

            <button type="submit" className="button">Send Message</button>
          </form>
  </div>*/}
      </section>
    </article>
  )
}

export default ContactScreen