import React from 'react'
import './Hero.css'
const Hero = () => {
  return (
    <div className='hero-cont'>
      <div className="hero">
        <div className="hero-text">
          <h1>Precision Engineered for Every Moment.</h1>
          <p>Discover a collection where innovation meets artistry. Alberto Clocks unites advanced watch technology with meticulous detailing for those who value more than time.</p>
          <button className='btn hero-btn'>Explore Now !</button>
        </div> 
         <img className='hero-img' src="/hero.png" alt="" />
      </div>
    </div>
  )
}

export default Hero