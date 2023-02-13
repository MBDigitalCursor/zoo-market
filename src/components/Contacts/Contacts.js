import React from "react";
import "./contacs.css";

function Contacts() {
	return (
		<div className="contacts-container">
			<div className="contacts-left">
				<div className="open-times">
					<ul>
						<li>Pirmadienis</li>
						<li>Antradienis</li>
						<li>Trečiadienis</li>
						<li>Ketvirtadienis</li>
						<li>Penktadienis</li>
						<li>Šeštadienis</li>
						<li>Sekmadienis</li>
					</ul>
					<ul>
						<li> 10:00 - 19:00</li>
						<li> 10:00 - 19:00 </li>
						<li> 10:00 - 19:00</li>
						<li> 10:00 - 19:00</li>
						<li> 10:00 - 19:00 </li>
						<li> 10:00 - 15:00</li>
						<li> NEDIRBAME</li>
					</ul>
				</div>
				<div className="location">
					<img
						src={require("../../assets/img/zoo-market-logo.png")}
						alt="zoo market logo"
					/>

					<div className="location-desc">
						<p>
							<span>Zoo Market</span> krautuvėlė
						</p>
						<p>Vilnius</p>
						<p>Architektų g. 43</p>
						<p>(Lazdynai, šalia IKI-Papartis)</p>
					</div>
				</div>
			</div>
			<div className="contacts-right"></div>
		</div>
	);
}

export default Contacts;
