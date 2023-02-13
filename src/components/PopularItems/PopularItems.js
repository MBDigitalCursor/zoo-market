import React from "react";
import "./popularItems.css";
import { Box, Stack } from "@mui/material";
import testItem from "../../assets/img/testItem.png";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Item from "./Item";

function PopularItems() {
	const items = [
		{
			img: testItem,
			desc: "Kačių skanėstas Pussycat Juice Mega Pussy Extra Wet, 1 kg",
			price: 14.99,
			hot: false,
			new: false,
		},
		{
			img: testItem,
			desc: "Sausas šunų ėdalas Royal Canin Puppy Pussy Magnet, 2 kg",
			price: 69.99,
			hot: false,
			new: false,
		},
		{
			img: testItem,
			desc: "Sausas šunų ėdalas Royal Canin Bright Wet Pussy Boy, 5 kg",
			price: 20.99,
			hot: true,
			new: false,
		},
		{
			img: testItem,
			desc: "Šunų ėdalas Boombastic Ultra Royal Canin Dry Pussy, 15 kg",
			price: 23.99,
			hot: false,
			new: false,
		},
		{
			img: testItem,
			desc: "Šunų ir kačių universalus ėdalas Royal Canin Festival Pussy, 10 vnt",
			price: 21.99,
			hot: false,
			new: true,
		},
		{
			img: testItem,
			desc: "Cat food Royal Canin Fake Hair Protection From Dogs, 5 kg",
			price: 13.99,
			hot: false,
			new: false,
		},
	];

	return (
		<Stack
			className='pop-items-container'
			direction='row'
			justifyContent='space-between'
			alignItems='flex-start'
		>
			<Box>
				<h3 className='pop-items-title'>Populiarios prekės</h3>
				<Grid2
					container
					columnGap={2}
					rowGap={2}
					sx={{
						maxWidth: "812px",
					}}
				>
					{items.map((item, i) => (
						<Grid2
							xs={4}
							sx={{
								maxWidth: "244px",
							}}
						>
							<Item
								item={item}
								key={i}
							></Item>
						</Grid2>
					))}
				</Grid2>
			</Box>
			<Box>
				<h3 className='pop-items-title'>Naujienos ir pasiūlymai</h3>
				<Grid2
					className='pop-items-right-side'
					container
					direction='column'
				>
					<div className='pop-items-right-side-top'>
						<h4 className='pop-items-right-side-top-title'>Puiki nauja prekė, OMG!</h4>
						<p>Enjoying life in the senior years is always possible: this meal is tailored to the needs of those, who have reached a certain age. It contains finest ingredients</p>
						<p>$59.99 for limited time</p>
					</div>
					<div className='pop-items-right-side-bottom'>
						<img
							src={testItem}
							alt=''
						/>
					</div>
				</Grid2>
			</Box>
		</Stack>
	);
}

export default PopularItems;
