import { Box, Paper, Stack, Slide, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryProducts } from "../../store/generalStore";
import { AiOutlineClose } from "react-icons/ai";
import dogsDryFoodArr from "../../helpers/LT/dogsDryFood.js";
import dogsCannedFoodArr from "../../helpers/LT/dogsCannedFood.js";
import catsDryFoodArr from "../../helpers/LT/catsDryFood.js";
import catsCannedFoodArr from "../../helpers/LT/catsCannedFood.js";

function ProductsSlide() {
	const dispatch = useDispatch();

	const { categoryProducts } = useSelector((state) => state.generalSlice);
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => {
		setOpen(false);
		console.log("uzdaryta");
	};

	const closeProducts = () => {
		dispatch(
			setCategoryProducts({
				active: false,
				catTree: "",
			})
		);
	};

	const style = {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: 400,
		bgcolor: "background.paper",
		boxShadow: 24,
		p: 4,
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
												onClick={handleOpen}
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
												onClick={handleOpen}
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
												onClick={handleOpen}
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
												onClick={() => {
													handleOpen();
													console.log(product);
												}}
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

							<Modal
								open={open}
								onClose={handleClose}
								aria-labelledby='modal-modal-title'
								aria-describedby='modal-modal-description'
							>
								<Box
									className='modal-container'
									sx={style}
								>
									<AiOutlineClose onClick={handleClose} />
									<img
										src='https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
										alt=''
									/>
									<div className='modal-container-desc'>
										<Typography
											id='modal-modal-title'
											variant='h6'
											component='h2'
										>
											Produkto pav.
										</Typography>
										<Typography
											id='modal-modal-description'
											sx={{ mt: 2 }}
										>
											produkto aprasymas
										</Typography>
									</div>
								</Box>
							</Modal>
						</Box>
					</Paper>
				</Slide>
			</Box>
		</Box>
	);
}

export default ProductsSlide;
