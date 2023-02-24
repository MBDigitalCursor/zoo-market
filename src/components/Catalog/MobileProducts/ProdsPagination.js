import { Box, Modal, Pagination, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedProduct } from "../../../store/generalStore";

const pageSize = 4;

function ProdsPagination({ products }) {
	const dispatch = useDispatch();
	const { categoryProducts, selectedProduct, pageLanguage } = useSelector((state) => state.generalSlice);

	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => {
		dispatch(setSelectedProduct(null));
		setOpen(false);
	};
	const [pagination, setPagination] = useState({
		count: 0,
		from: 0,
		to: pageSize,
	});
	const [slicedArr, setSlicedArr] = useState([]);

	const style = {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: 300,
		bgcolor: "background.paper",
		boxShadow: 24,
		p: 4,
		margin: "0 auto",
		height: "80vh",
		overflow: "hidden",
		overflowY: "scroll",
	};

	useEffect(() => {
		const newSlicedArr = products.slice(pagination.from, pagination.to);
		setSlicedArr(newSlicedArr);
		setPagination({ ...pagination, count: products.length });
	}, [pagination.from, pagination.to, products]);

	const handlePageChange = (event, page) => {
		const from = (page - 1) * pageSize;
		const to = (page - 1) * pageSize + pageSize;
		setPagination({ from, to });
	};

	return (
		<Box
			justifyContent={"center"}
			alignItems='center'
			display={"flex"}
			flexDirection='column'
			sx={{
				margin: "20px 0",
				"& .MuiPaginationItem-page": {
					backgroundColor: "#C2C1C1",
				},
			}}
		>
			{slicedArr.length > 0 && (
				<div className='page-products'>
					{slicedArr.map((prod, i) => (
						<div
							onClick={() => {
								handleOpen();
								dispatch(setSelectedProduct(prod));
							}}
							className='single-product'
							key={i}
						>
							<img
								style={{
									width: "170px",
									height: "230px",
									objectFit: "contain",
								}}
								src={prod.img}
								alt=''
							/>
							<div
								style={{
									display: "flex",
									flexDirection: "column",
									alignItems: "flex-start",
									fontWeight: "500",
									fontSize: "16px",
								}}
							>
								<p>{prod.desc}</p>
								<p>{prod.price}</p>
							</div>
						</div>
					))}
				</div>
			)}
			<Pagination
				count={Math.ceil(pagination.count / pageSize)}
				onChange={handlePageChange}
				defaultPage={1}
				color='primary'
				sx={{
					"& .Mui-selected": {
						pointerEvents: "none",
					},
				}}
			/>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
			>
				<Box sx={style}>
					<AiOutlineClose
						onClick={handleClose}
						className='product-modal-icon'
					/>
					{selectedProduct && (
						<div className='modal-mobile-container'>
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
									justifySelf: "center",
									fontSize: "15px",
								}}
							>
								<p>
									<b>{pageLanguage === "LT" ? "Sudėtis" : "Analysis"}</b>
								</p>
								{selectedProduct.fullDesc.analysis.length !== 0 ? selectedProduct.fullDesc.analysis.map((desc, i) => <p key={i}>{desc}</p>) : <p>--------</p>}
							</div>
							<div
								style={{
									gridArea: "vitPerKg",
									display: "flex",
									flexDirection: "column",
									justifySelf: "center",
									fontSize: "15px",
								}}
							>
								<p>
									<b>{pageLanguage === "LT" ? "Maistiniai priedai" : "Nutritional additives"}</b>
								</p>
								{selectedProduct.fullDesc.vitPerKg.length !== 0 ? selectedProduct.fullDesc.vitPerKg.map((desc, i) => <p key={i}>{desc}</p>) : <p>--------</p>}
							</div>
							<div
								style={{
									gridArea: "feedingGuide",
									display: "flex",
									flexDirection: "column",

									justifySelf: "center",
									fontSize: "15px",
								}}
							>
								<p>
									<b>{pageLanguage === "LT" ? "Šėrimo instrukcija" : "Feeding Guide"}</b>
								</p>
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
								<p>
									<b>{pageLanguage === "LT" ? "Pagrindinės naudos" : "Key benefits"}</b>
								</p>
								{selectedProduct.fullDesc.desc.keyBenefits && <p>{selectedProduct.fullDesc.desc.keyBenefits}</p>}
							</div>
							<div
								style={{
									gridArea: "ingredients",
									marginTop: "20px",
								}}
							>
								<p>
									<b>{pageLanguage === "LT" ? "Ingredientai" : "Ingredients"}</b>
								</p>
								{selectedProduct.fullDesc.desc.ingredients && <p>{selectedProduct.fullDesc.desc.ingredients}</p>}
							</div>
						</div>
					)}
				</Box>
			</Modal>
		</Box>
	);
}

export default ProdsPagination;
