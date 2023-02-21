import React from "react";
import "./hero.css";

function Hero() {
	return (
		<div className="hero-container">
			<div className="hero-wrapper container">
				<div className="hero-title ">
					<div className="hero-headings fade-in-left">
						<h1>Zoo</h1>
						<h2>Market</h2>
					</div>
				</div>
				<p className="quote">
					Jūsų augintinis - mūsų rūpestis!
					<br />
				</p>
			</div>
		</div>
	);
}

export default Hero;
