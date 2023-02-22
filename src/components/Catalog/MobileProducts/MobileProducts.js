import React from "react";
import dogsDryFoodArr from "../../../helpers/LT/dogsDryFood.js";
import dogsCannedFoodArr from "../../../helpers/LT/dogsCannedFood.js";
import catsDryFoodArr from "../../../helpers/LT/catsDryFood.js";
import catsCannedFoodArr from "../../../helpers/LT/catsCannedFood.js";
import ProdsPagination from "./ProdsPagination.js";
import dogIcon from "../../../assets/icons/dog 2.svg";
import catIcon from "../../../assets/icons/cat 2.svg";
import { useSelector } from "react-redux";

function MobileProducts() {
	const { pageLanguage } = useSelector((state) => state.generalSlice);

	const dogsCategoryTrees = [
		{
			title: pageLanguage === "LT" ? "Šunims > Sausas ėdalas" : "Dogs > Dry food",
			products: dogsDryFoodArr,
		},
		{
			title: pageLanguage === "LT" ? "Šunims > Konservai" : "Dogs > Canned food",
			products: dogsCannedFoodArr,
		},
	];
	const catsCategoryTrees = [
		{
			title: pageLanguage === "LT" ? "Katėms > Sausas ėdalas" : "Cats > Dry food",
			products: catsDryFoodArr,
		},
		{
			title: pageLanguage === "LT" ? "Katėms > Konservai" : "Cats > Canned food",
			products: catsCannedFoodArr,
		},
	];

	return (
		<div className='products-with-pagination'>
			<div className='products-with-pagination-logo'>
				<img
					style={{
						width: "70px",
						height: "70px",
					}}
					src={dogIcon}
					alt=''
				/>
			</div>
			{dogsCategoryTrees.map((cat, i) => (
				<div
					id={`${cat.products === dogsDryFoodArr ? "dogsDryFood" : "dogsCannedFood"}`}
					key={i}
					className='tree-products'
				>
					<h4>{cat.title}</h4>
					<ProdsPagination products={cat.products} />
				</div>
			))}
			<div className='products-with-pagination-logo'>
				<img
					style={{
						width: "50px",
						height: "50px",
					}}
					src={catIcon}
					alt=''
				/>
			</div>
			{catsCategoryTrees.map((cat, i) => (
				<div
					id={`${cat.products === catsDryFoodArr ? "catsDryFood" : "catsCannedFood"}`}
					key={i}
					className='tree-products'
				>
					<h4>{cat.title}</h4>
					<ProdsPagination products={cat.products} />
				</div>
			))}
		</div>
	);
}

export default MobileProducts;
