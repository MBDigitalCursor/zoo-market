import React from "react";
import "./hero.css";

function Hero() {
	return (
		<div className="hero-container">
			<div className="container">
				<img
					src={require("../../assets/img/zoo-market-text.png")}
					alt="zoo market text"
				/>
				<h1>Jūsų augintinio kūnui ir meilei</h1>
				<button>Sužinoti daugiau</button>
			</div>
		</div>
	);
}

export default Hero;
