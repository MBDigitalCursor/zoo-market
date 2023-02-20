import React from "react";
import "./contacts.css";
import { useSelector } from "react-redux";

function ContactForm() {
	const { pageLanguage } = useSelector((state) => state.generalSlice);

	return (
		<div className='contacts-form'>
			<form action=''>
				<label htmlFor=''>{pageLanguage === "LT" ? "El. pašto adresas" : "Email address"}</label>
				<input type='text' />
				<label htmlFor=''>{pageLanguage === "LT" ? "Jūsų žinutė" : "Your message"}</label>
				<textarea
					name=''
					id=''
					cols='30'
					rows='4'
				></textarea>
			</form>
		</div>
	);
}

export default ContactForm;
