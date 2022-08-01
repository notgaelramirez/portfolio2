import React, { useState } from 'react'
import './work.css'
import proyect1 from '/src/assets/proyect1.png'
import proyect2 from '/src/assets/proyect2.png'
import proyect3 from '/src/assets/proyect3.png'

const WorkScreen = () => {
  const images = [proyect1, proyect2, proyect3]
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [selectedImage, setSelectedImage] = useState(images[0])

  const works = ['E-Commerce App', 'Weather App', 'Pokedex App']
  const [selectedWork, setSelectedWork] = useState(works[0])
  
  const selectNewImage = (index, images, next = true) =>{
    const condition = next ? selectedIndex < images.length - 1 : selectedIndex > 0
    const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : condition ? selectedIndex - 1 : images.length -1
    setSelectedImage(images[nextIndex])
    setSelectedIndex(nextIndex)
    setSelectedWork(works[nextIndex])
  }

  const previous = () => {
    selectNewImage(selectedIndex, images, false)
  }

  const next = () =>{
    selectNewImage(selectedIndex, images)
  }


  console.log(selectedImage)
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
          <img src={selectedImage} alt="" />
          <button className='carousel-btn prev' onClick={() => previous()}><span class="material-symbols-outlined">chevron_left</span></button>
          <button className='carousel-btn next' onClick={() => next()}><span class="material-symbols-outlined">chevron_right</span></button>
          <p className='work-name'>{selectedWork}</p>
          <p className='work-details'><a href="#">Details</a></p>
        </div>
      </div>
    </article>
  )
}

export default WorkScreen