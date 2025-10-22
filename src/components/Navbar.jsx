import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router";
import VisitorCounter from "./VisitorCounter";

const Navbar = () => {
	const [menu, setMenu] = useState(false);

	return (
		<div className="nav-sect">
			<div className="nav-cont">
				<Link to="/">
					<img
						className="logo"
						src="/Logo.svg"
						alt="Albert watch company clocks logo"
					/>
				</Link>

				{/* Desktop Navigation */}
				<div className="desktop-nav">
					<div className="nav-items">
						<Link to="/products">Products</Link>
						<Link to="/technology">Technology</Link>
						<Link to="/store-locator">Store Locator</Link>
						<Link to="/gallery">Gallery</Link>
						<Link to="/support">Support</Link>
						<Link to="/contact">Contact</Link>
					</div>
				</div>

				<VisitorCounter />

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

						<Link to="/" onClick={() => setMenu(false)}>
							Home
						</Link>
						<Link to="/products" onClick={() => setMenu(false)}>
							Products
						</Link>
						<Link to="/technology" onClick={() => setMenu(false)}>
							Technology
						</Link>
						<Link to="/store-locator" onClick={() => setMenu(false)}>
							Store Locator
						</Link>
						<Link to="/gallery" onClick={() => setMenu(false)}>
							Gallery
						</Link>
						<Link to="/support" onClick={() => setMenu(false)}>
							Support
						</Link>
						<Link to="/contact" onClick={() => setMenu(false)}>
							Contact
						</Link>

						<VisitorCounter />
					</div>

					<div className={`overlay ${!menu && "remove-overlay"}`}></div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
