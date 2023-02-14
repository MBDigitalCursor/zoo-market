import React from "react";
import { scrollToSection } from "../../helpers/scrollToSection";
import "./hero.css";

function Hero() {
	return (
		<div className="hero-container">
			<div className="container">
				<div className="tracking-in-expand">
					<img
						src={require("../../assets/img/zoo-market-text.png")}
						alt="zoo market text"
					/>
					<h1>Jūsų augintinio kūnui ir meilei</h1>
					<button
						onClick={() => scrollToSection("contacts")}
						className="puff-in-center"
					>
						Sužinoti daugiau
					</button>
				</div>
			</div>
			<div className="hero-animation-paws">
				<img
					className="left paws-left"
					src={require("../../assets/img/pedutes-left.png")}
					alt="zoo market logo"
				/>
				<img
					className="right paws-right"
					src={require("../../assets/img/pedutes-right.png")}
					alt="zoo market logo"
				/>
			</div>
			<div className="hero-animation-logo">
				<img
					className="middle fade-out "
					src={require("../../assets/img/zoo-market-logo.png")}
					alt="zoo market logo"
				/>
			</div>
		</div>
	);
}

export default Hero;
