import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { useDispatch, useSelector } from "react-redux";
import { setBurgerMenu } from "../../store/generalStore";
import { styled } from "@mui/material/styles";
import { VscChromeClose } from "react-icons/vsc";
import TreeViewComp from "./TreeViewComp";

const MyDrawer = styled(Drawer)({
	"& .MuiPaper-root": {
		boxSizing: "border-box",
		padding: "20px",
		width: 250,
		height: 400,
		backgroundColor: "rgba(30, 30, 30, 0.9)",
		color: "white",
	},
});

export default function DrawerComp() {
	const dispatch = useDispatch();

	const { burgerMenu } = useSelector((state) => state.generalSlice);

	return (
		<div>
			<MyDrawer
				anchor={"right"}
				open={burgerMenu}
				onClose={() => dispatch(setBurgerMenu(false))}
			>
				<Box
					role='presentation'
					onKeyDown={() => dispatch(setBurgerMenu(false))}
					sx={{
						display: "flex",
						flexDirection: "column",
						gap: "35px",
					}}
				>
					<div className='drawer-top-side'>
						<p
							style={{
								marginLeft: "33px",
							}}
						>
							Kontaktai
						</p>
						<VscChromeClose
							className='close-icon'
							style={{
								fontSize: "30px",
							}}
							onClick={() => dispatch(setBurgerMenu(false))}
						/>
					</div>
					<TreeViewComp></TreeViewComp>
				</Box>
			</MyDrawer>
		</div>
	);
}
