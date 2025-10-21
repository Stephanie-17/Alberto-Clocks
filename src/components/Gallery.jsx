import React from 'react'
import './Gallery.css'
import { watches } from '../data'
const Gallery = () => {
  return (
    <div className='gallery-cont'>
      <h1 className='heading'>Our Collection</h1>
      <p>Browse our wonderful collection of exquisite watches</p>
      <div className="watches">
        {watches.luxury.map(watch=>(
            <img key={watch.price} src={watch.image} className='product-img watch-img' alt="A Photo of a Watch" />
        ))}
      
        

      </div>
    </div>
  )
}

export default Gallery