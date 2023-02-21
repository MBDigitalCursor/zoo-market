import React, { useRef, useState } from "react";
// import axios from "axios";
import "./contacts.css";
import { useSelector } from "react-redux";

function ContactForm() {
	const { pageLanguage } = useSelector((state) => state.generalSlice);
	const [emailErrorMsg, setEmailErrorMsg] = useState(false);
	const [textErrorMsg, setTextErrorMsg] = useState(false);
	const emailRef = useRef();
	const textRef = useRef();

	const validateFormMessage = (msg) => {
		if (msg.length < 5 || msg.length > 150) {
			setTextErrorMsg(true);
			return true;
		} else {
			setTextErrorMsg(false);
			return false;
		}
	};

	const handleFormSubmit = () => {
		const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

		const formObj = {
			email: emailRef.current.value,
			message: textRef.current.value,
		};

		const isValidEmail = regex.test(formObj.email);

		if (!isValidEmail) {
			setEmailErrorMsg(true);
		} else if (formObj.message.length === 0 || formObj.message.length < 5) {
			setTextErrorMsg(true);
			setEmailErrorMsg(false);
			return;
		} else {
			setEmailErrorMsg(false);
			setTextErrorMsg(false);
			console.log("formObj ===", formObj);
		}

		// axios.post("linkas", formObj).then((res) => {
		// 	if (res.status === 200) {
		// 		setEmailErrorMsg(false);
		// 		setTextErrorMsg(false);
		// 		emailRef.current.value = "";
		// 		textRef.current.value = "";
		// 	}
		// });
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
					onChange={() => {
						validateFormMessage(textRef.current.value);
					}}
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
