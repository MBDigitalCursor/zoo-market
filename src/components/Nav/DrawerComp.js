import React from "react";
import "./nav.css";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { useDispatch, useSelector } from "react-redux";
import { setBurgerMenu, setLanguage } from "../../store/generalStore";
import { styled } from "@mui/material/styles";
import { VscChromeClose } from "react-icons/vsc";
import TreeViewComp from "./TreeViewComp";
import { scrollToSection } from "../../helpers/scrollToSection";

const MyDrawer = styled(Drawer)({
	"& .MuiPaper-root": {
		boxSizing: "border-box",
		padding: "20px",
		width: 250,
		height: "max-content",
		backgroundColor: "rgba(30, 30, 30, 0.9)",
		color: "white",
	},
});

export default function DrawerComp() {
	const dispatch = useDispatch();

	const { burgerMenu, pageLanguage } = useSelector((state) => state.generalSlice);

	return (
		<div>
			<MyDrawer
				anchor={"right"}
				open={burgerMenu}
				onClose={() => dispatch(setBurgerMenu(false))}
			>
				<Box
					role="presentation"
					onKeyDown={() => dispatch(setBurgerMenu(false))}
					sx={{
						display: "flex",
						flexDirection: "column",
						gap: "35px",
					}}
				>
					<div className="mobile-lang">
						<div>
							<p
								onClick={() => {
									dispatch(setLanguage("LT"));
									dispatch(setBurgerMenu(false));
								}}
							>
								LT
							</p>
							<p
								onClick={() => {
									dispatch(setLanguage("EN"));
									dispatch(setBurgerMenu(false));
								}}
							>
								EN
							</p>
						</div>
						<VscChromeClose
							className="close-icon"
							style={{
								fontSize: "30px",
							}}
							onClick={() => dispatch(setBurgerMenu(false))}
						/>
					</div>
					<div className="drawer-top-side">
						<p
							style={{
								marginLeft: "20px",
								fontSize: "16px",
							}}
							onClick={() => {
								scrollToSection("contacts");
								dispatch(setBurgerMenu(false));
							}}
						>
							{pageLanguage === "LT" ? "Kontaktai" : "Contacts"}
						</p>
					</div>
					<TreeViewComp />
				</Box>
			</MyDrawer>
		</div>
	);
}
