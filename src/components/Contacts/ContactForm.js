import React, { useRef, useState } from "react";
import axios from "axios";
import "./contacts.css";
import { useSelector } from "react-redux";
import { Checkbox, FormControlLabel } from "@mui/material";

function ContactForm() {
	const { pageLanguage } = useSelector((state) => state.generalSlice);
	const [emailErrorMsg, setEmailErrorMsg] = useState(false);
	const [textErrorMsg, setTextErrorMsg] = useState(false);
	const [checkbox, setCheckbox] = useState(false);
	const [checkboxError, setCheckboxError] = useState(null);
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

		if (!checkbox) return setCheckboxError(true);

		axios.post("https://formspree.io/f/xyyovoyq", formObj).then((res) => {
			if (res.status === 200) {
				setEmailErrorMsg(false);
				setTextErrorMsg(false);
				setCheckbox(false);
				setCheckboxError(null);
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
				<FormControlLabel
					sx={{
						"& .MuiFormControlLabel-label": {
							fontSize: "12px",
							fontFamily: "Red Hat Display, sans-serif",
						},
					}}
					control={
						<Checkbox
							checked={checkbox}
							sx={{
								color: ` ${checkboxError ? "#d22c2c" : "secondary"}`,
							}}
							color="secondary"
							onChange={(e) => {
								setCheckbox(e.target.checked);
							}}
						/>
					}
					label={pageLanguage === "LT" ? "Sutinku, kad su manimi susisiektų" : "I agree to be contacted"}
				/>
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
