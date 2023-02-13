import React from "react";
import "./contacts.css";

function ContactForm() {
	return (
		<div className="contacts-form">
			<form action="">
				<label htmlFor="">El. pašto adresas</label>
				<input type="text" />
				<label htmlFor="">Jūsų žinutė</label>
				<textarea
					name=""
					id=""
					cols="30"
					rows="4"
				></textarea>
			</form>
			<button className="form-btn">Išsiųsti</button>
		</div>
	);
}

export default ContactForm;
