import { Box, Paper, Stack, Slide } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryProducts } from "../../store/generalStore";
import { AiOutlineClose } from "react-icons/ai";
import dogsDryFoodArr from "../../helpers/dogsDryFood.js";
import dogsCannedFoodArr from "../../helpers/dogsCannedFood.js";
import catsDryFoodArr from "../../helpers/catsDryFood.js";
import catsCannedFoodArr from "../../helpers/catsCannedFood.js";

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
		<Box className='catalog-slide'>
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
							boxShadow: "0 0 0 0 white",
							backgroundColor: "white",
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
								justifyContent='space-between'
								alignItems='flex-start'
								gap={1}
								flexWrap='wrap'
								sx={{
									padding: "0 0.5rem",
								}}
							>
								{categoryProducts.catTree === "Šunims > Sausas ėdalas" || categoryProducts.catTree === "Dogs > Dry food"
									? dogsDryFoodArr.map((product, i) => (
											<div
												className='single-cat-product'
												key={i}
											>
												<img
													src={product.img}
													alt=''
												/>
												<p>{product.desc}</p>
												<p>{product.price}</p>
											</div>
									  ))
									: categoryProducts.catTree === "Katėms > Sausas ėdalas" || categoryProducts.catTree === "Cats > Dry food"
									? catsDryFoodArr.map((product, i) => (
											<div
												className='single-cat-product'
												key={i}
											>
												<img
													src={product.img}
													alt=''
												/>
												<p>{product.desc}</p>
												<p>{product.price}</p>
											</div>
									  ))
									: categoryProducts.catTree === "Šunims > Konservai" || categoryProducts.catTree === "Dogs > Canned food"
									? dogsCannedFoodArr.map((product, i) => (
											<div
												className='single-cat-product'
												key={i}
											>
												<img
													src={product.img}
													alt=''
												/>
												<p>{product.desc}</p>
												<p>{product.price}</p>
											</div>
									  ))
									: categoryProducts.catTree === "Katėms > Konservai" || categoryProducts.catTree === "Cats > Canned food"
									? catsCannedFoodArr.map((product, i) => (
											<div
												className='single-cat-product'
												key={i}
											>
												<img
													src={product.img}
													alt=''
												/>
												<p>{product.desc}</p>
												<p>{product.price}</p>
											</div>
									  ))
									: ""}
							</Stack>
						</Box>
					</Paper>
				</Slide>
			</Box>
		</Box>
	);
}

export default ProductsSlide;
