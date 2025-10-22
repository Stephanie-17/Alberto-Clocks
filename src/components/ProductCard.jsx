import React from "react";
import "./ProductCard.css";

const ProductCard = ({ image, name, price, type, onSelect }) => {
	return (
		<div className="product-card" onClick={onSelect}>
			<img className="product-img" src={image} alt={name} />
			<h4 className="product-name">{name}</h4>
			<p className="product-type">{type}</p>
			<p className="product-price">£{price}</p>
		</div>
	);
};

export default ProductCard;
