import React from "react";

function Footer() {
	return (
		<div
			style={{
				paddingBottom: "35px",
				fontSize: "12px",
			}}
			className="container"
		>
			©{" "}
			<span
				style={{
					fontWeight: "500",
				}}
			>
				remodal.
			</span>{" "}
			2023
		</div>
	);
}

export default Footer;
