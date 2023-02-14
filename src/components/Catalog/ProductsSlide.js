import { Box, Paper, Stack, Slide } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryProducts } from "../../store/generalStore";
import { AiOutlineClose } from "react-icons/ai";

function ProductsSlide() {
	const dispatch = useDispatch();

	const { categoryProducts } = useSelector((state) => state.generalSlice);

	const closeProducts = () => {
		dispatch(setCategoryProducts(""));
	};

	return (
		<Box
			sx={{
				position: "absolute",
				top: "-75px",
				right: "0",
				height: 750,
				width: 1000,
				display: "flex",
				padding: 0,
				borderRadius: 0,
				bgcolor: "transparent",
				overflow: "hidden",
			}}
		>
			<Box sx={{ width: "100%" }}>
				<Slide
					direction='left'
					in={categoryProducts.active}
				>
					<Paper
						sx={{
							width: "100%",
							height: "99.5%",
							borderRadius: 0,
							backgroundColor: "white",
							border: "1px solid black",
						}}
					>
						<AiOutlineClose
							onClick={closeProducts}
							style={{
								position: "absolute",
								left: "5%",
								top: "4%",
								fontSize: "1.5rem",
								opacity: "1",
							}}
						></AiOutlineClose>
						<Box
							sx={{
								padding: "0.3rem 0",
								opacity: "1",
							}}
						></Box>
						<Box
							sx={{
								height: 517,
								padding: "5px",
								boxSizing: "border-box",
							}}
						>
							<Stack
								direction='row'
								justifyContent='flex-start'
								alignItems='flex-start'
								gap={1}
								flexWrap='wrap'
							></Stack>
						</Box>
					</Paper>
				</Slide>
			</Box>
		</Box>
	);
}

export default ProductsSlide;
