import React from "react";
import { Link } from "react-router";
import "./Footer.css";
const Footer = () => {
	return (
		<div className="footer">
			<div className="footer-top">
				<Link to="/">
					<img
						src="/Logo.svg"
						alt="Alberto clocks Logo"
						className="footer-logo"
					/>
				</Link>
				<div className="footer-links">
					<Link to="/contact">Contact</Link>
					<Link to="/support">Support</Link>
					<Link to="/store-locator">Store Locator</Link>
					<Link to="/technology">Technology</Link>
				</div>
			</div>
			<p className="trademark">
				Alberto Watch Company &copy; 2025. All rights reserved
			</p>
		</div>
	);
};

export default Footer;
