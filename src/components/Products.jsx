import React from 'react'
import './Products.css'
import ProductCard from './ProductCard'

const Products = () => {
  return (
    <div className='product-cont'>
      <h1 className='heading'>Our Products</h1>
      <div className="filter">
        <button>Vintage</button>
        <button>Luxury</button>
        <button>Smart</button>
      </div>
      <div className="product-list">
        <ProductCard />
        <ProductCard/>
        <ProductCard/>

        <ProductCard/>

      </div>
    </div>
  )
}

export default Products