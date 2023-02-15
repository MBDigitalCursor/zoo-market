import { Box, Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPagination, setSlicedProds } from "../../../store/generalStore.js";

const pageSize = 4;

function ProdsPagination() {
	const dispatch = useDispatch();

	const { products, pagination, slicedProds } = useSelector((state) => state.generalSlice);

	useEffect(() => {
		dispatch(setSlicedProds({ arr: products, from: pagination.from, to: pagination.to }));
	}, [dispatch, pagination.from, pagination.to, products]);

	const handlePageChange = (event, page) => {
		const from = (page - 1) * pageSize;
		const to = (page - 1) * pageSize + pageSize;
		dispatch(setPagination({ from, to }));
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
			{slicedProds && (
				<div className='page-products'>
					{slicedProds.map((prod, i) => (
						<img
							style={{}}
							key={i}
							src={prod.img}
							alt=''
						></img>
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
