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

	useEffect(() => {
		const slicedProds = (from, to) => {
			const slicedProdsArr = products.slice(from, to);
			setSlicedArr(slicedProdsArr);
			setPagination({ ...pagination, count: products.length });
		};
		slicedProds(pagination.from, pagination.to);
	}, [pagination.from, pagination.to, pagination, products]);

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
			}}
		>
			{slicedArr && (
				<div className='page-products'>
					{slicedArr.map((prod, i) => (
						<div className='single-product'>
							<img
								style={{
									maxHeight: "222px",
									maxWidth: "209px",
								}}
								key={i}
								src={prod.img}
								alt=''
							></img>
							<div
								style={{
									display: "flex",
									flexDirection: "column",
									alignItems: "flex-start",
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
			/>
		</Box>
	);
}

export default ProdsPagination;
