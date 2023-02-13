import React from "react";
import "./nav.css";

function Nav() {
	return (
		<nav>
			<div className="nav-container">
				<div className="nav-links">
					<a href="/">Produktai</a>
					<a href="/">Kontaktai</a>
				</div>

				<div className="nav-lang">
					<a href="/">LT</a>
					<a href="/">EN</a>
				</div>
			</div>
			<img
				src={require("../../assets/img/zoo-market-logo.png")}
				alt="zoo market logo"
			/>
		</nav>
	);
}

export default Nav;
