import React from "react";
import { scrollToSection } from "../../helpers/scrollToSection";
import "./hero.css";

function Hero() {
	return (
		<div className="hero-container">
			<div className="tracking-in-expand hero-text">
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
			<div className="hero-animation-paws">
				<div className="paws-left left">
					<img
						src={require("../../assets/img/pedutes-left.png")}
						alt="zoo market logo"
					/>
				</div>
				<div className="paws-right right">
					<img
						src={require("../../assets/img/pedutes-right.png")}
						alt="zoo market logo"
					/>
				</div>
			</div>
			<div className="middle fade-out ">
				<img
					src={require("../../assets/img/zoo-market-logo.png")}
					alt="zoo market logo"
				/>
			</div>
		</div>
	);
}

export default Hero;
