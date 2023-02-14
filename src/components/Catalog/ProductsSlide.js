import { Box, Paper, Stack, Slide } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryProducts } from "../../store/generalStore";
import { AiOutlineClose } from "react-icons/ai";

function ProductsSlide() {
	const dispatch = useDispatch();

	const { categoryProducts } = useSelector((state) => state.generalSlice);

	const closeProducts = () => {
		dispatch(
			setCategoryProducts({
				active: false,
				catTree: "",
			})
		);
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
							width: "99.9%",
							height: "99.5%",
							borderRadius: 0,
							backgroundColor: "white",
							border: "1px solid black",
							paddingRight: "0.1%",
						}}
					>
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
								paddingTop: "0.4rem",
								paddingLeft: "0.4rem",
								paddingRight: "0.6rem",
							}}
						>
							<AiOutlineClose
								className='close-icon'
								onClick={closeProducts}
								style={{
									fontSize: "1.7rem",
									cursor: "pointer",
								}}
							/>
							<p>{categoryProducts.catTree}</p>
						</Box>
						<Box
							sx={{
								height: "100%",
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
