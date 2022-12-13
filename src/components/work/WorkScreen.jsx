import React from 'react'
import './work.css'
import pokedex from '../../assets/pokedex.jpg'


const WorkScreen = () => {
  
  return (
    <article className='work'>
      <div className="work-title">
        <p>My Work</p>
      </div>

      <div className="works">
        <div className="works-text">
          <p>Here are some of my recent projects. You can click on them for going to the web app or click on 'details' for more information.
          </p>
        </div>

        <div className="works-carousel">
          <h3>Pokedex</h3>
          <a href="https://www.pokedex.gael.codes" target='_blank'><img src={pokedex} alt="" /></a>
          <p>This is my pokedex. if you have ever urgently needed information about a specific pokemon, don't worry, in this website that I developed you can find all kind of information about the species, color, type, attacks, and more about the pokemon.</p>
        </div>
      </div>
    </article>
  )
}

export default WorkScreen