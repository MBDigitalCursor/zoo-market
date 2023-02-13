import React from "react";
import "./catalog.css";
import { Box, Stack } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import dog from "../../assets/icons/dog2.png";
import cat from "../../assets/icons/cat2.png";
import bird from "../../assets/icons/bird2.png";
import hamster from "../../assets/icons/hamster2.png";
import fish from "../../assets/icons/fish2.png";
import CategoryItem from "./CategoryItem";

function Catalog() {
	const categories = [
		{
			icon: dog,
			title: "Šunims",
			nestedCategories: true,
		},
		{
			icon: cat,
			title: "Katėms",
			nestedCategories: true,
		},
		{
			icon: bird,
			title: "Paukščiams",
			nestedCategories: false,
		},
		{
			icon: hamster,
			title: "Graužikams",
			nestedCategories: false,
		},
		{
			icon: fish,
			title: "Žuvims",
			nestedCategories: false,
		},
	];

	return (
		<Box>
			<div className='container'>
				<h3 className='catalog-title'>Siūlomi produktai</h3>
			</div>
			<Stack
				className='catalog-categories'
				justifyContent='center'
				alignItems='flex-start'
				direction='column'
			>
				{categories.map((category, i) => (
					<CategoryItem
						category={category}
						key={i}
					/>
				))}
			</Stack>
		</Box>
	);
}

export default Catalog;
