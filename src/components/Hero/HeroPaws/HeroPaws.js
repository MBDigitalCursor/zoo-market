import React from "react";
import "../hero.css";

function HeroPaws() {
	return (
		<div className="paws-container paws-blur">
			<img
				className="fade-in-3"
				src={require("../../../assets/img/heroPaws/maxi pedute.png")}
				alt="dog paw"
			/>
			<img
				className="fade-in-4"
				src={require("../../../assets/img/heroPaws/midi pedute 2.png")}
				alt="dog paw"
			/>
			<img
				className="fade-in-2 "
				src={require("../../../assets/img/heroPaws/mini pedute 5.png")}
				alt="dog paw"
			/>
			<img
				className="fade-in-1"
				src={require("../../../assets/img/heroPaws/mini pedute 6.png")}
				alt="dog paw"
			/>
			<img
				className="fade-in-5"
				src={require("../../../assets/img/heroPaws/midi pedute 7.png")}
				alt="dog paw"
			/>
		</div>
	);
}

export default HeroPaws;
