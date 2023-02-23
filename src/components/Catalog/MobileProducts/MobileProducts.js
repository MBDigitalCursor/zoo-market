import React from "react";
import dogsDryFoodArrLT from "../../../helpers/LT/dogsDryFoodLT.js";
import dogsCannedFoodArrLT from "../../../helpers/LT/dogsCannedFoodLT.js";
import catsDryFoodArrLT from "../../../helpers/LT/catsDryFoodLT.js";
import catsCannedFoodArrLT from "../../../helpers/LT/catsCannedFoodLT.js";
import dogsDryFoodArrEN from "../../../helpers/EN/dogsDryFoodEN.js";
import dogsCannedFoodArrEN from "../../../helpers/EN/dogsCannedFoodEN.js";
import catsDryFoodArrEN from "../../../helpers/EN/catsDryFoodEN.js";
import catsCannedFoodArrEN from "../../../helpers/EN/catsCannedFoodEN.js";
import ProdsPagination from "./ProdsPagination.js";
import dogIcon from "../../../assets/icons/dog 2.svg";
import catIcon from "../../../assets/icons/cat 2.svg";
import { useSelector } from "react-redux";

function MobileProducts() {
	const { pageLanguage } = useSelector((state) => state.generalSlice);

	const dogsCategoryTrees = [
		{
			title: pageLanguage === "LT" ? "Šunims > Sausas ėdalas" : "Dogs > Dry food",
			products: pageLanguage === "LT" ? dogsDryFoodArrLT : dogsDryFoodArrEN,
		},
		{
			title: pageLanguage === "LT" ? "Šunims > Konservai" : "Dogs > Canned food",
			products: pageLanguage === "LT" ? dogsCannedFoodArrLT : dogsCannedFoodArrEN,
		},
	];
	const catsCategoryTrees = [
		{
			title: pageLanguage === "LT" ? "Katėms > Sausas ėdalas" : "Cats > Dry food",
			products: pageLanguage === "LT" ? catsDryFoodArrLT : catsDryFoodArrEN,
		},
		{
			title: pageLanguage === "LT" ? "Katėms > Konservai" : "Cats > Canned food",
			products: pageLanguage === "LT" ? catsCannedFoodArrLT : catsCannedFoodArrEN,
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
					id={`${cat.products === dogsDryFoodArrLT ? "dogsDryFood" : "dogsCannedFood"}`}
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
					id={`${cat.products === catsDryFoodArrLT ? "catsDryFood" : "catsCannedFood"}`}
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
