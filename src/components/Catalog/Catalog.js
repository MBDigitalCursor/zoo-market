import React from "react";
import "./catalog.css";
import dog from "../../assets/icons/dog2.png";
import cat from "../../assets/icons/cat2.png";
import bird from "../../assets/icons/bird2.png";
import hamster from "../../assets/icons/hamster2.png";
import fish from "../../assets/icons/fish2.png";
import info from "../../assets/img/division-section.svg";
import CategoryItem from "./CategoryItem";
import ProductsSlide from "./ProductsSlide";

function Catalog() {
	const categories = [
		{
			icon: dog,
			category: "dog",
			title: "Šunims",
			nestedCategories: true,
		},
		{
			icon: cat,
			category: "cat",
			title: "Katėms",
			nestedCategories: true,
		},
		{
			icon: bird,
			category: "bird",
			title: "Paukščiams",
			nestedCategories: false,
		},
		{
			icon: hamster,
			category: "hamster",
			title: "Graužikams",
			nestedCategories: false,
		},
		{
			icon: fish,
			category: "fish",
			title: "Žuvims",
			nestedCategories: false,
		},
	];

	return (
		<div
			id="catalog"
			className="container"
		>
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
					<div className="right-side-photo">
						<div
							style={{
								position: "relative",
							}}
						>
							<img
								src={require("../../assets/img/dog-photo.png")}
								alt="dog with jumper"
							/>
							<p className="photo-credit">Photo by Karsten Winegeart on Unsplash</p>
						</div>
						<h4 className="photo-header">
							PREKIAUJAME <span>SVERIAMU</span> POPULIARIŲ <br /> GAMINTOJŲ SAUSU ĖDALU{" "}
						</h4>
					</div>
					<div className="left-side-desc">
						<img
							src={info}
							alt="animals products description"
						/>
					</div>
				</div>
				<ProductsSlide />
			</div>
		</div>
	);
}

export default Catalog;
