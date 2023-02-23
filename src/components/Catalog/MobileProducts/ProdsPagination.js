import { Box, Modal, Pagination, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const pageSize = 4;

function ProdsPagination({ products }) {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
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
								console.log(prod);
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
	);
}

export default ProdsPagination;
