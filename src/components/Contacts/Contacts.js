import React from "react";
import "./contacts.css";
import ContactForm from "./ContactForm";
import { ImFacebook2 } from "react-icons/im";

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
				<div className="contacts-paws">
					<img
						src={require("../../assets/img/pedutes-group.png")}
						alt="paws pattern"
					/>
				</div>
				<p className="remodal">
					© <span>remodal.</span> 2023
				</p>
			</div>
			<div
				id="contacts"
				className="contacts-right"
			>
				<h2>Kontaktai</h2>
				<div className="form-socials">
					<div className="email-phone">
						<div className="phone-fb">
							<div>
								<p>+370 656 82575</p>
								<p>+370 648 73014</p>
							</div>
							<ImFacebook2 className="fb-icon" />
						</div>
						<p className="email">ausvydas@zoomarket.lt</p>
					</div>
					<ContactForm />
				</div>
			</div>
		</div>
	);
}

export default Contacts;
