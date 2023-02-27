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
			title: pageLanguage === "LT" ? "Šunims > Konservai" : "Dogs > Wet food",
			products: pageLanguage === "LT" ? dogsCannedFoodArrLT : dogsCannedFoodArrEN,
		},
	];
	const catsCategoryTrees = [
		{
			title: pageLanguage === "LT" ? "Katėms > Sausas ėdalas" : "Cats > Dry food",
			products: pageLanguage === "LT" ? catsDryFoodArrLT : catsDryFoodArrEN,
		},
		{
			title: pageLanguage === "LT" ? "Katėms > Konservai" : "Cats > Wet food",
			products: pageLanguage === "LT" ? catsCannedFoodArrLT : catsCannedFoodArrEN,
		},
	];

	const handleSectionId = (category) => {
		if (category.products === dogsDryFoodArrLT) return "dogsDryFood";
		if (category.products === dogsDryFoodArrEN) return "dogsDryFood";
		if (category.products === dogsCannedFoodArrLT) return "dogsWetFood";
		if (category.products === dogsCannedFoodArrEN) return "dogsWetFood";
		if (category.products === catsDryFoodArrLT) return "catsDryFood";
		if (category.products === catsDryFoodArrEN) return "catsDryFood";
		if (category.products === catsCannedFoodArrLT) return "catsWetFood";
		if (category.products === catsCannedFoodArrEN) return "catsWetFood";
	};

	return (
		<div className='products-with-pagination'>
			<div className='products-with-pagination-logo'>
				<img
					style={{
						width: "70px",
						height: "70px",
					}}
					src={dogIcon}
					alt='dog icon'
				/>
			</div>
			{dogsCategoryTrees.map((cat, i) => (
				<div
					id={handleSectionId(cat)}
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
					alt='cat icon'
				/>
			</div>
			{catsCategoryTrees.map((cat, i) => (
				<div
					id={handleSectionId(cat)}
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
