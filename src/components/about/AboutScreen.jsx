import React from 'react'
import './about.css'
import react from '/src/assets/react.png'
import redux from '/src/assets/redux.png'
import js from '/src/assets/js.png'
import html from '/src/assets/html.png'
import css from '/src/assets/css.png'
import node from '/src/assets/node.png'
import python from '/src/assets/python.png'
import figma from '/src/assets/figma.png'
import git from '/src/assets/git.png'
import github from '/src/assets/github.png'
import sql from '/src/assets/sql.png'
import WorkScreen from '../work/WorkScreen'

const AboutScreen = () => {
  return (
    <article className='about' id='about'>
      <nav className='nav'>
        <h2>GR</h2>
      </nav>

      <section className='about-container'>
        <header>
          <p>About Me</p>
        </header>

        <div className='about-info'>
            <p>Young frontend developer, specialized in React, with a big desire for learning new technologies, frameworks and solve problems for the everyday user.
            </p>
        </div>

        <div className='about-skills'>
          <p className='skills-title'>Skills</p>
          <div className='skills-logos'>
            <div>
              <img className='skill-logo react' src={react} alt="" />
              <p>React</p>
            </div>
            <div>
              <img className='skill-logo redux' src={redux} alt="" />
              <p>Redux</p>
            </div>
            <div>
              <img className='skill-logo' src={js} alt="" />
              <p>JavaScript</p>
            </div>
            <div>
              <img className='skill-logo' src={html} alt="" />
              <p>HTML</p>
            </div>
            <div>
              <img className='skill-logo' src={css} alt="" />
              <p>CSS</p>
            </div>
            <div>
              <img className='skill-logo' src={node} alt="" />
              <p>Node JS</p>
            </div>
            <div>
              <img className='skill-logo' src={python} alt="" />
              <p>Python</p>
            </div>
            <div>
              <img className='skill-logo' src={figma} alt="" />
              <p>Figma</p>
            </div>
            <div>
              <img className='skill-logo' src={git} alt="" />
              <p>Git</p>
            </div>
            <div>
              <img className='skill-logo' src={github} alt="" />
              <p>GitHub</p>
            </div>
            <div>
              <img className='skill-logo' src={sql} alt="" />
              <p>MySQL</p>
            </div>
          </div>
        </div>
      </section>
    </article>
  )
}

export default AboutScreen