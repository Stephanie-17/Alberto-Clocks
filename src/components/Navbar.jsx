import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router"; 

const Navbar = () => {
	const [menu, setMenu] = useState(false);

	return (
		<div className="nav-sect">
			<div className="nav-cont">
				<img
					className="logo"
					src="/Logo.svg"
					alt="Albert watch company clocks logo"
				/>

				{/* Desktop Navigation */}
				<div className="desktop-nav">
					<div className="nav-items">
						<Link to="/products">Products</Link>
						<Link to="/technology">Technology</Link>
						<Link to="/store-locator">Store Locator</Link>
						<Link to="/support">Support</Link>
						<Link to="/contact">Contact</Link>
						<Link to="/gallery">Gallery</Link>
					</div>
				</div>

				<p className="visitor-count">Visitor Count: 21</p>

				{/* Mobile Navigation */}
				<div className="mobile-nav">
					{!menu && (
						<img
							className="menu-btn"
							onClick={() => setMenu(true)}
							src="/menu-btn.svg"
							alt="menu-btn"
						/>
					)}

					<div className={`mob-nav-items ${!menu && "remove"}`}>
						<img
							onClick={() => setMenu(false)}
							src="/close-btn.svg"
							className="close-btn"
							alt="close-menu-btn"
						/>

						<Link to="/products" onClick={() => setMenu(false)}>
							Products
						</Link>
						<Link to="/technology" onClick={() => setMenu(false)}>
							Technology
						</Link>
						<Link to="/store-locator" onClick={() => setMenu(false)}>
							Store Locator
						</Link>
						<Link to="/support" onClick={() => setMenu(false)}>
							Support
						</Link>
						<Link to="/">About</Link>
						<Link to="/contact" onClick={() => setMenu(false)}>
							Contact
						</Link>
						<Link to="/gallery" onClick={() => setMenu(false)}>
							Gallery
						</Link>
						<p>Visitor Count: 21</p>
					</div>

					<div className={`overlay ${!menu && "remove-overlay"}`}></div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
