import React, { useRef, useState } from "react";
import axios from "axios";
import "./contacts.css";
import { useSelector } from "react-redux";

function ContactForm() {
	const { pageLanguage } = useSelector((state) => state.generalSlice);
	const [emailErrorMsg, setEmailErrorMsg] = useState(false);
	const [textErrorMsg, setTextErrorMsg] = useState(false);
	const emailRef = useRef();
	const textRef = useRef();

	const handleFormSubmit = () => {
		const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

		const formObj = {
			email: emailRef.current.value,
			message: textRef.current.value,
		};

		const isValidEmail = regex.test(formObj.email);

		if (!isValidEmail) return setEmailErrorMsg(true);

		if (formObj.message.length < 5 || formObj.message.length > 150) return setTextErrorMsg(true);

		console.log("formObj ===", formObj);

		axios.post("https://formspree.io/f/xyyovoyq", formObj).then((res) => {
			if (res.status === 200) {
				setEmailErrorMsg(false);
				setTextErrorMsg(false);
				emailRef.current.value = "";
				textRef.current.value = "";
			}
		});
	};

	return (
		<div className="contacts-form">
			<form action="">
				{emailErrorMsg ? (
					<label
						className="error-message"
						htmlFor=""
					>
						{pageLanguage === "LT" ? "El. pašto adresas neteisingas" : "Email address is incorrect"}
					</label>
				) : (
					<label htmlFor="">{pageLanguage === "LT" ? "El. pašto adresas" : "Email address"}</label>
				)}
				<input
					ref={emailRef}
					type="text"
				/>
				{textErrorMsg ? (
					<label
						className="error-message"
						htmlFor=""
					>
						{pageLanguage === "LT" ? "Jūsų žinutė per trumpa" : "Your message is too short"}
					</label>
				) : (
					<label htmlFor="">{pageLanguage === "LT" ? "Jūsų žinutė" : "Your message"}</label>
				)}
				<textarea
					ref={textRef}
					name=""
					id=""
					cols="30"
					rows="4"
				></textarea>
			</form>
			<button
				onClick={handleFormSubmit}
				className="form-btn"
			>
				{pageLanguage === "LT" ? "Išsiųsti" : "Send"}
			</button>
		</div>
	);
}

export default ContactForm;
