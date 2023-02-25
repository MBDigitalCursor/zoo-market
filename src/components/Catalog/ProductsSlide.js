import { Box, Paper, Stack, Slide, Modal } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryProducts, setSelectedProduct } from "../../store/generalStore";
import { RxCross1 } from "react-icons/rx";
import dogsDryFoodArrLT from "../../helpers/LT/dogsDryFoodLT.js";
import dogsCannedFoodArrLT from "../../helpers/LT/dogsCannedFoodLT.js";
import catsDryFoodArrLT from "../../helpers/LT/catsDryFoodLT.js";
import catsCannedFoodArrLT from "../../helpers/LT/catsCannedFoodLT.js";
import dogsDryFoodArrEN from "../../helpers/EN/dogsDryFoodEN.js";
import dogsCannedFoodArrEN from "../../helpers/EN/dogsCannedFoodEN.js";
import catsDryFoodArrEN from "../../helpers/EN/catsDryFoodEN.js";
import catsCannedFoodArrEN from "../../helpers/EN/catsCannedFoodEN.js";

function ProductsSlide() {
	const dispatch = useDispatch();

	const { categoryProducts, selectedProduct, pageLanguage, mobileView } = useSelector((state) => state.generalSlice);
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => {
		dispatch(setSelectedProduct(null));
		setOpen(false);
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
		width: mobileView ? 450 : 950,
		height: 700,
		bgcolor: "background.paper",
		boxShadow: 24,
		p: 4,
		paddingTop: "25px",
		overflowY: "scroll",
		lineHeight: "1.5",
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
							<RxCross1
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
								{categoryProducts.catTree === "Šunims > Sausas ėdalas"
									? dogsDryFoodArrLT.map((product, i) => (
											<div
												onClick={() => {
													handleOpen();
													dispatch(setSelectedProduct(product));
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
									: categoryProducts.catTree === "Katėms > Sausas ėdalas"
									? catsDryFoodArrLT.map((product, i) => (
											<div
												onClick={() => {
													handleOpen();
													dispatch(setSelectedProduct(product));
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
									: categoryProducts.catTree === "Šunims > Konservai"
									? dogsCannedFoodArrLT.map((product, i) => (
											<div
												onClick={() => {
													handleOpen();
													dispatch(setSelectedProduct(product));
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
									: categoryProducts.catTree === "Katėms > Konservai"
									? catsCannedFoodArrLT.map((product, i) => (
											<div
												onClick={() => {
													handleOpen();
													dispatch(setSelectedProduct(product));
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
									: categoryProducts.catTree === "Dogs > Dry food"
									? dogsDryFoodArrEN.map((product, i) => (
											<div
												onClick={() => {
													handleOpen();
													dispatch(setSelectedProduct(product));
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
									: categoryProducts.catTree === "Cats > Dry food"
									? catsDryFoodArrEN.map((product, i) => (
											<div
												onClick={() => {
													handleOpen();
													dispatch(setSelectedProduct(product));
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
									: categoryProducts.catTree === "Dogs > Wet food"
									? dogsCannedFoodArrEN.map((product, i) => (
											<div
												onClick={() => {
													handleOpen();
													dispatch(setSelectedProduct(product));
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
									: categoryProducts.catTree === "Cats > Wet food"
									? catsCannedFoodArrEN.map((product, i) => (
											<div
												onClick={() => {
													handleOpen();
													dispatch(setSelectedProduct(product));
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
								<Box sx={style}>
									<RxCross1
										onClick={handleClose}
										className='product-modal-icon'
									/>
									{selectedProduct && (
										<div className='modal-container'>
											<div
												style={{
													gridArea: "img",
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
												}}
											>
												<img
													src={selectedProduct.img}
													alt='product'
													style={{
														width: "170px",
														maxHeight: "240px",
														objectFit: "contain",
													}}
												/>
											</div>
											<div
												style={{
													gridArea: "analysis",
													display: "flex",
													flexDirection: "column",
													width: mobileView ? "100%" : "max-content",
													justifySelf: "center",
													fontSize: "15px",
												}}
											>
												<p style={{ fontWeight: "600" }}>{pageLanguage === "LT" ? "Sudėtis" : "Analysis"}</p>
												{selectedProduct.fullDesc.analysis.length !== 0 ? selectedProduct.fullDesc.analysis.map((desc, i) => <p key={i}>{desc}</p>) : <p>--------</p>}
											</div>
											<div
												style={{
													gridArea: "vitPerKg",
													display: "flex",
													flexDirection: "column",
													width: mobileView ? "100%" : "max-content",
													justifySelf: "center",
													fontSize: "15px",
												}}
											>
												<p style={{ fontWeight: "600" }}>{pageLanguage === "LT" ? "Maistiniai Priedai" : "Nutritional Additives"}</p>
												{selectedProduct.fullDesc.vitPerKg.length !== 0 ? selectedProduct.fullDesc.vitPerKg.map((desc, i) => <p key={i}>{desc}</p>) : <p>--------</p>}
											</div>
											<div
												style={{
													gridArea: "feedingGuide",
													display: "flex",
													flexDirection: "column",
													width: mobileView ? "100%" : "max-content",
													justifySelf: "center",
													fontSize: "15px",
												}}
											>
												<p style={{ fontWeight: "600" }}>{pageLanguage === "LT" ? "Šėrimo Instrukcija" : "Feeding Guide"}</p>
												{selectedProduct.fullDesc.feedingGuide.length !== 0 ? selectedProduct.fullDesc.feedingGuide.map((desc, i) => <p key={i}>{desc}</p>) : <p>--------</p>}
											</div>
											{selectedProduct.fullDesc.desc.firstPart && (
												<p
													style={{
														gridArea: "fPart",
														marginTop: "20px",
													}}
												>
													{selectedProduct.fullDesc.desc.firstPart}
												</p>
											)}
											{selectedProduct.fullDesc.desc.secondPart && (
												<p
													style={{
														gridArea: "sPart",
														marginTop: "20px",
													}}
												>
													{selectedProduct.fullDesc.desc.secondPart}
												</p>
											)}
											{selectedProduct.fullDesc.desc.thirdPart && (
												<p
													style={{
														gridArea: "tPart",
														marginTop: "20px",
													}}
												>
													{selectedProduct.fullDesc.desc.thirdPart}
												</p>
											)}
											<div
												style={{
													gridArea: "keyBenefits",
													marginTop: "20px",
												}}
											>
												<p style={{ fontWeight: "600" }}>{pageLanguage === "LT" ? "Pagrindinės Naudos" : "Key Benefits"}</p>
												{selectedProduct.fullDesc.desc.keyBenefits && <p>{selectedProduct.fullDesc.desc.keyBenefits}</p>}
											</div>
											<div
												style={{
													gridArea: "ingredients",
													marginTop: "20px",
												}}
											>
												<p style={{ fontWeight: "600" }}>{pageLanguage === "LT" ? "Ingredientai" : "Ingredients"}</p>
												{selectedProduct.fullDesc.desc.ingredients && <p>{selectedProduct.fullDesc.desc.ingredients}</p>}
											</div>
										</div>
									)}
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
