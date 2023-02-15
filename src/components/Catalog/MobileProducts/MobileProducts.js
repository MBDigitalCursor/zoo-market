import React, { useEffect, useState } from "react";
import dogsDryFoodArr from "../../../helpers/dogsDryFood.js";
import dogsCannedFoodArr from "../../../helpers/dogsCannedFood.js";
import catsDryFoodArr from "../../../helpers/catsDryFood.js";
import catsCannedFoodArr from "../../../helpers/catsCannedFood.js";
import { useDispatch, useSelector } from "react-redux";
import ProdsPagination from "./ProdsPagination.js";
import { setProducts, setSlicedProds } from "../../../store/generalStore.js";

function MobileProducts() {
	const dispatch = useDispatch();

	const { categoryProducts, slicedProds } = useSelector((state) => state.generalSlice);

	useEffect(() => {
		if (categoryProducts.catTree === "Šunims > Sausas ėdalas") {
			dispatch(setProducts(dogsDryFoodArr));
		}
		if (categoryProducts.catTree === "Katėms > Sausas ėdalas") {
			dispatch(setProducts(catsDryFoodArr));
		}
		if (categoryProducts.catTree === "Šunims > Konservai") {
			dispatch(setProducts(dogsCannedFoodArr));
		}
		if (categoryProducts.catTree === "Katėms > Konservai") {
			dispatch(setProducts(catsCannedFoodArr));
		}
	}, [categoryProducts.catTree, dispatch]);

	return (
		<div className='products-with-pagination'>
			{categoryProducts.active && (
				<div>
					<h4>{categoryProducts.catTree}</h4>
				</div>
			)}
			<ProdsPagination />
		</div>
	);
}

export default MobileProducts;
