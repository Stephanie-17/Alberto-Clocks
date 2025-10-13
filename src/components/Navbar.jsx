import React from "react";
import "./Navbar.css";
import { useState } from "react";
const Navbar = () => {
	const [menu, setMenu] = useState(false)
	return (
		<div className="nav-sect">
		<div className="nav-cont">
			<img
				className="logo"
				src="/Logo.svg"
				alt="Albert watch company clocks logo"
			/>
			<div    className="mobile-nav">
				{!menu && (
						<img className="menu-btn" onClick={()=>setMenu(true)} src="/menu-btn.svg" alt="mebu-btn" />
				)}
			
				<div className={`mob-nav-items ${!menu && 'remove'}`}>
					<img
					onClick={()=> setMenu(false)}
						src="/close-btn.svg"
						className="close-btn"
						alt="close-menu-btn"
					/>

					<a href="">Products</a>
					<a href="">Technology</a>
					<a href="">Store Locator</a>
					<a href="">Support</a>
					<a href="">About</a>
					<a href="">Contact</a>
					<a href="">Gallery</a>
				</div>
				<div className={`overlay ${!menu && 'remove-overlay'} `}></div>
			</div>

			
		</div>
		<div className="desktop-nav">
				<div className="nav-items">
					<a href="">Products</a>
					<a href="">Technology</a>
					<a href="">Store Locator</a>
					<a href="">Support</a>
					<a href="">About</a>
					<a href="">Contact</a>
					<a href="">Gallery</a>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
