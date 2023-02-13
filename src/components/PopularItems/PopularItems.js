import React from "react";
import "./popularItems.css";
import { Box, Stack } from "@mui/material";

function PopularItems() {
	return (
		<Stack
			className='pop-items-container'
			direction='row'
			justifyContent='space-between'
			alignItems='flex-start'
		>
			<Box>
				<h3 className='pop-items-title'>Populiarios prekės</h3>
				<Box></Box>
			</Box>
			<Box>
				<h3 className='pop-items-title'>Naujienos ir pasiūlymai</h3>
			</Box>
		</Stack>
	);
}

export default PopularItems;
