import React, { useEffect, useState } from "react";
import "./catalog.css";
import dog from "../../assets/icons/dog2.png";
import cat from "../../assets/icons/cat2.png";
import bird from "../../assets/icons/bird2.png";
import hamster from "../../assets/icons/hamster2.png";
import fish from "../../assets/icons/fish2.png";
import info from "../../assets/img/division-section.svg";
import CategoryItem from "./CategoryItem";
import ProductsSlide from "./ProductsSlide";
import { useDispatch, useSelector } from "react-redux";
import { setMobileView } from "../../store/generalStore";

function Catalog() {
	const { pageLanguage } = useSelector((state) => state.generalSlice);

	const dispatch = useDispatch();

	const categories = [
		{
			icon: dog,
			category: "dog",
			title: pageLanguage === "LT" ? "Šunims" : "Dogs",
			nestedCategories: true,
		},
		{
			icon: cat,
			category: "cat",
			title: pageLanguage === "LT" ? "Katėms" : "Cats",
			nestedCategories: true,
		},
		{
			icon: bird,
			category: "bird",
			title: pageLanguage === "LT" ? "Paukščiams" : "Birds",
			nestedCategories: false,
		},
		{
			icon: hamster,
			category: "hamster",
			title: pageLanguage === "LT" ? "Graužikams" : "Hamsters",
			nestedCategories: false,
		},
		{
			icon: fish,
			category: "fish",
			title: pageLanguage === "LT" ? "Žuvims" : "Fish",
			nestedCategories: false,
		},
	];

	const { mobileView } = useSelector((state) => state.generalSlice);

	useEffect(() => {
		function handleResize() {
			dispatch(setMobileView(window.innerWidth <= 1000));
		}
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [dispatch, mobileView]);

	return (
		<div
			id='catalog'
			className='container'
		>
			<h3 className='catalog-title'>{pageLanguage === "LT" ? "Siūlomi produktai" : "Offered products"}</h3>
			<h3 className='catalog-mobile-title'>{pageLanguage === "LT" ? "Populiarios prekės" : "Popular products"}</h3>

			<div className=' catalog-container'>
				<div className='categories-left-side'>
					{categories.map((category, i) => (
						<CategoryItem
							category={category}
							key={i}
						/>
					))}
				</div>
				<div className='catalog-right-side'>
					<div className='right-side-photo'>
						<div
							style={{
								position: "relative",
							}}
						>
							<img
								src={require("../../assets/img/dog-photo.png")}
								alt='dog with jumper'
							/>
							<p className='photo-credit'>Photo by Karsten Winegeart on Unsplash</p>
						</div>

						{pageLanguage === "LT" ? (
							<h4 className='photo-header'>
								PREKIAUJAME <span>SVERIAMU</span> POPULIARIŲ <br /> GAMINTOJŲ SAUSU ĖDALU
							</h4>
						) : (
							<h4 className='photo-header'>
								WE TRADE <span>WEIGHTED</span> DRY FOOD FROM <br /> POPULAR MANUFACTURERS
							</h4>
						)}
					</div>
					<div className='left-side-desc'>
						<img
							src={info}
							alt='animals products description'
						/>
					</div>
				</div>
				<ProductsSlide />
			</div>
		</div>
	);
}

export default Catalog;
