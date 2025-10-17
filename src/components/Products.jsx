import React from "react";
import "./Products.css";
import ProductCard from "./ProductCard";

const Products = () => {
	return (
		<div className="product-cont">
			<h1 className="heading">Our Products</h1>
			<p className="prod-pg">
				{" "}
				Discover timepieces that define elegance and precision.
			</p>
			<div className="filter">
				<p className="filter-btn active">Vintage</p>
				<p className="filter-btn">Luxury</p>
				<p className="filter-btn">Smart</p>
			</div>
			<hr />
			<div className="product-list">
				<ProductCard />
				<ProductCard />
				<ProductCard />

				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />

				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />

				<ProductCard />
			</div>
		</div>
	);
};

export default Products;
