import React from "react";
import dogsDryFoodArr from "../../../helpers/dogsDryFood.js";
import dogsCannedFoodArr from "../../../helpers/dogsCannedFood.js";
import catsDryFoodArr from "../../../helpers/catsDryFood.js";
import catsCannedFoodArr from "../../../helpers/catsCannedFood.js";
import ProdsPagination from "./ProdsPagination.js";
import dogIcon from "../../../assets/icons/dog2.png";
import catIcon from "../../../assets/icons/cat2.png";

function MobileProducts() {
	const dogsCategoryTrees = [
		{
			title: "Šunims > Sausas ėdalas",
			products: dogsDryFoodArr,
		},
		{
			title: "Šunims > Konservai",
			products: dogsCannedFoodArr,
		},
	];
	const catsCategoryTrees = [
		{
			title: "Katėms > Sausas ėdalas",
			products: catsDryFoodArr,
		},
		{
			title: "Katėms > Konservai",
			products: catsCannedFoodArr,
		},
	];

	return (
		<div className="products-with-pagination">
			<div className="products-with-pagination-logo">
				<img
					style={{
						width: "70px",
						height: "70px",
					}}
					src={dogIcon}
					alt=""
				/>
			</div>
			{dogsCategoryTrees.map((cat, i) => (
				<div
					key={i}
					className="tree-products"
				>
					<h4>{cat.title}</h4>
					<ProdsPagination products={cat.products} />
				</div>
			))}
			<div className="products-with-pagination-logo">
				<img
					style={{
						width: "50px",
						height: "50px",
					}}
					src={catIcon}
					alt=""
				/>
			</div>
			{catsCategoryTrees.map((cat, i) => (
				<div
					key={i}
					className="tree-products"
				>
					<h4>{cat.title}</h4>
					<ProdsPagination products={cat.products} />
				</div>
			))}
		</div>
	);
}

export default MobileProducts;
