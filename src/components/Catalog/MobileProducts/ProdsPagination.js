import { Box, Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";

const pageSize = 4;

function ProdsPagination({ products }) {
	const [pagination, setPagination] = useState({
		count: 0,
		from: 0,
		to: pageSize,
	});
	const [slicedArr, setSlicedArr] = useState([]);

	const slicedProds = (from, to) => {
		return products.slice(from, to);
	};

	useEffect(() => {
		const newSlicedArr = slicedProds(pagination.from, pagination.to);
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
							className='single-product'
							key={i}
						>
							<img
								style={{
									maxHeight: "222px",
									maxWidth: "209px",
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
		</Box>
	);
}

export default ProdsPagination;
