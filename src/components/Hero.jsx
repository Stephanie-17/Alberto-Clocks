import React from 'react'
import Gallery from './Gallery.jsx'
import './Hero.css'
import Technology from './Technology.jsx'
const Hero = () => {
  return (
    <>
    <div className='hero-cont'>
      <div className="hero">
        <div className="hero-text">
          <h1>Timeless Precision, Modern Elegance</h1>
          <p>Discover the art of horology with Alberto Watch Company, where traditional craftsmanship meets contemporary design.</p>
          <button className='btn hero-btn'> Explore Our Collection</button>
        </div> 
      </div>
      
    </div>
    <Technology />
    </>
  )
}

export default Hero