import React, { useState } from "react";
import "./Products.css";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";
import { watches } from "../data";

const Products = () => {
	const [category, setCategory] = useState("luxury");
	const [selectedWatch, setSelectedWatch] = useState(null);

	return (
		<div className="product-cont">
			<h1 className="heading">Our Products</h1>
			<p className="prod-pg">
				Discover timepieces that define elegance and precision.
			</p>

			<div className="filter">
				<p
					className={`filter-btn ${category === "vintage" ? "active" : ""}`}
					onClick={() => setCategory("vintage")}
				>
					Vintage
				</p>
				<p
					className={`filter-btn ${category === "luxury" ? "active" : ""}`}
					onClick={() => setCategory("luxury")}
				>
					Luxury
				</p>
				<p
					className={`filter-btn ${category === "smart" ? "active" : ""}`}
					onClick={() => setCategory("smart")}
				>
					Smart
				</p>
			</div>

			<hr />

			<div className="product-list">
				{watches[category].map((watch, index) => (
					<ProductCard
						key={index}
						name={watch.name}
						image={watch.image}
						price={watch.price}
						type={category}
						onSelect={() => setSelectedWatch(watch)}
					/>
				))}
			</div>

			{selectedWatch && (
				<ProductModal
					watch={selectedWatch}
					onClose={() => setSelectedWatch(null)}
				/>
			)}
		</div>
	);
};

export default Products;
