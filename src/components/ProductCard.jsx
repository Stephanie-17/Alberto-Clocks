import React from 'react'
import './ProductCard.css'

const ProductCard = () => {
  return (
    <div className='product-card'>
      <img className='product-img' src="/watch-img.jpg" alt="A watch for sale" />
  
      <h4 className='product-name'>Quantum ADG</h4>
      <p className='product-type'>Vintage</p>
      <p className='product-price'>£500</p>
    </div>
  )
}

export default ProductCard