import React from "react";
import "./contacts.css";
import ContactForm from "./ContactForm";
import { ImFacebook2 } from "react-icons/im";
import { useSelector } from "react-redux";

function Contacts() {
	const { pageLanguage } = useSelector((state) => state.generalSlice);

	return (
		<div className="contacts-container container">
			<div className="contacts-left">
				{pageLanguage === "LT" ? (
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
							<li>-------------</li>
						</ul>
					</div>
				) : (
					<div className="open-times">
						<ul>
							<li>Monday</li>
							<li>Tuesday</li>
							<li>Wednesday</li>
							<li>Thursday</li>
							<li>Friday</li>
							<li>Saturday</li>
							<li>Sunday</li>
						</ul>
						<ul>
							<li> 10:00 - 19:00</li>
							<li> 10:00 - 19:00 </li>
							<li> 10:00 - 19:00</li>
							<li> 10:00 - 19:00</li>
							<li> 10:00 - 19:00 </li>
							<li> 10:00 - 15:00</li>
							<li> -------------</li>
						</ul>
					</div>
				)}

				<div className="location">
					<img
						src={require("../../assets/img/zoo-market-logo.png")}
						alt="zoo market logo"
					/>

					<div className="location-desc">
						{pageLanguage === "LT" ? (
							<p>
								<span>Zoo Market</span> krautuvėlė
							</p>
						) : (
							<p>
								<span>Zoo Market</span> store
							</p>
						)}

						<p>Vilnius</p>
						{pageLanguage === "LT" ? <p>Architektų g. 43</p> : <p>Architektų Str. 43</p>}
						{pageLanguage === "LT" ? <p>(Lazdynai, šalia IKI-Papartis)</p> : <p>(Lazdynai, near IKI-Papartis)</p>}
					</div>
				</div>
				<p className="remodal">
					© <span>remodal.</span> 2023
				</p>
			</div>
			<div
				id="contacts"
				className="contacts-right"
			>
				{pageLanguage === "LT" ? <h2>Kontaktai</h2> : <h2>Contacts</h2>}

				<div className="form-socials">
					<div className="email-phone">
						<div className="phone-fb">
							<div className="phones-container">
								<a href="tel:+370 656 82575">+370 656 82575</a>
								<a href="tel:+370 648 73014">+370 648 73014</a>
							</div>
							<a
								className="fb-icon"
								href="https://www.facebook.com/ZOOkrautuvele.Lazdynai/"
								rel="noreferrer"
								target="_blank"
							>
								<ImFacebook2 />
							</a>
						</div>
						<div className="email-btn-container">
							<a
								className="email"
								target="_blank"
								rel="noreferrer"
								href="https://mail.google.com/mail/u/1/?view=cm&fs=1&to=ausvydas@zoomarket.lt&tf=1"
							>
								ausvydas@zoomarket.lt
							</a>
							{/* <button
								onClick={handleFormSubmit}
								className="form-btn"
							>
								{pageLanguage === "LT" ? "Išsiųsti" : "Send"}
							</button> */}
						</div>
					</div>
					<ContactForm />
				</div>
			</div>
		</div>
	);
}

export default Contacts;
