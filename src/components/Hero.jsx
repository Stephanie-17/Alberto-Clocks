import React from 'react'
import Gallery from './Gallery.jsx'
import './Hero.css'
import Technology from './Technology.jsx'
import { Link } from 'react-router'
const Hero = () => {
  return (
    <>
    <div className='hero-cont'>
      <div className="hero">
        <div className="hero-text">
          <h1>Timeless Precision, Modern Elegance</h1>
          <p>Discover the art of horology with Alberto Watch Company, where traditional craftsmanship meets contemporary design.</p>
          <Link to='/products'>
            <button className='btn hero-btn'> Explore Our Collection</button>
          </Link>
        
        </div> 
      </div>
      
    </div>
    <Technology />
    </>
  )
}

export default Hero