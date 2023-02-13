import React from "react";
import "./catalog.css";
import dog from "../../assets/icons/dog2.png";
import cat from "../../assets/icons/cat2.png";
import bird from "../../assets/icons/bird2.png";
import hamster from "../../assets/icons/hamster2.png";
import fish from "../../assets/icons/fish2.png";
import CategoryItem from "./CategoryItem";

function Catalog() {
	const categories = [
		{
			icon: dog,
			title: "Šunims",
			nestedCategories: true,
		},
		{
			icon: cat,
			title: "Katėms",
			nestedCategories: true,
		},
		{
			icon: bird,
			title: "Paukščiams",
			nestedCategories: false,
		},
		{
			icon: hamster,
			title: "Graužikams",
			nestedCategories: false,
		},
		{
			icon: fish,
			title: "Žuvims",
			nestedCategories: false,
		},
	];

	return (
		<div className="container">
			<h3 className="catalog-title">Siūlomi produktai</h3>
			<div className=" catalog-container">
				<div className="categories-left-side">
					{categories.map((category, i) => (
						<CategoryItem
							category={category}
							key={i}
						/>
					))}
				</div>
				<div className="catalog-right-side">
					<img
						src={require("../../assets/img/dog-photo.png")}
						alt="dog with jumper"
					/>
					<img
						src={require("../../assets/img/product-desc.png")}
						alt="dog with jumper"
					/>
				</div>
			</div>
		</div>
	);
}

export default Catalog;
