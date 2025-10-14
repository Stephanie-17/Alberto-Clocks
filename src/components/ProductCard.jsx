import React from 'react'
import './ProductCard.css'

const ProductCard = () => {
  return (
    <div className='product-card'>
      <img className='product-img' src="/hero.png" alt="A watch for sale" />
  
      <h4 className='product-name'>Quantum ADG</h4>
      <p className='product-price'>£500</p>
      <button className='prod-btn'>Buy now</button>
    </div>
  )
}

export default ProductCard