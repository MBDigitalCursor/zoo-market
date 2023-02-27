import React from "react";
import { useSelector } from "react-redux";

function About() {
	const { pageLanguage } = useSelector((state) => state.generalSlice);

	return (
		<div className='linear-radient-bgc'>
			<div
				style={{
					margin: "0 20px",
				}}
			>
				<h5
					style={{
						fontSize: "21px",
						fontWeight: "500",
						marginBottom: "20px",
					}}
				>
					{pageLanguage === "LT" ? "Apie mus" : "About us"}
				</h5>
				<p
					style={{
						lineHeight: "1.6",
						fontSize: "16px",
						maxWidth: pageLanguage === "LT" ? "425px" : "440px",
					}}
				>
					{pageLanguage === "LT" ? "Esame smulkus šeimos verslas, įsikūręs Vilniuje, Lazdynuose. Dirbame augintinių bendruomenės gyvenime nuo 2018" : "We are a small family business located in Vilnius, Lazdynai. Have been working in the life of the pet community since 2018"}
				</p>
			</div>
		</div>
	);
}

export default About;
