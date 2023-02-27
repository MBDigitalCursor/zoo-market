import React from "react";
import "./popularItems.css";
import img1 from "../../assets/img/catsDryFood/cat sausas 1.png";
import img2 from "../../assets/img/catsDryFood/cat sausas 10.png";
import img3 from "../../assets/img/dogsCannedFood/dog konservai 6.png";
import img4 from "../../assets/img/dogsDryFood/dog sausas 10.png";
import img5 from "../../assets/img/catsCannedFood/cat konservai 4.png";
import img6 from "../../assets/img/dogsDryFood/dog sausas 11.png";
import logo from "../../assets/img/mobileMain/brand logos.svg";
import division from "../../assets/img/mobileMain/division section.svg";
import divisionEN from "../../assets/img/mobileMain/division-section-EN-mobile.svg";
import nose from "../../assets/img/mobileMain/nose 1.svg";
import Item from "./Item";
import { useSelector } from "react-redux";
import SlideComp from "./SlideComp";

function PopularItems() {
	const { pageLanguage } = useSelector((state) => state.generalSlice);

	const items = [
		{
			img: img1,
			desc: pageLanguage === "LT" ? "Affinity Advance Sensitive sausas ėdalas suagusioms sterilizuotoms katėms" : "Affinity Advance Sensitive Dry Food for Adult Sterilized Cats",
			price: "7.10/kg",
			hot: false,
			new: false,
		},
		{
			img: img2,
			desc: pageLanguage === "LT" ? "AATU sausas ėdalas katėms su laisvai bėgiojančių ančių mėsa" : "AATU Free Run Duck Dry Food for Cats",
			price: "44.00 (3 kg)",
			hot: false,
			new: false,
		},
		{
			img: img3,
			desc: pageLanguage === "LT" ? "Barking Heads Puppy Days konservai šuniukams" : "Barking Heads Puppy Days Wet Puppy Food",
			price: "3.50 (300 g)",
			hot: true,
			new: false,
		},
		{
			img: img4,
			desc: pageLanguage === "LT" ? "Calibra Veterinary Diet sausas ėdalas šunims su inkstų nepakankamumu ir širdies sutrikimais" : "Calibra Veterinary Diet Renal & Cardiac Dry Food for Dogs",
			price: "16.65 (2 kg)",
			hot: false,
			new: false,
		},
		{
			img: img5,
			desc: pageLanguage === "LT" ? "Aatas Cat viliojantis konservuotas tunas ir krevetės drebučiuose (12 skirtingų rūšių)" : "Aatas Cat Tantalizing Canned Tuna & Shrimp in Aspic for Cats (12 different options)",
			price: "1.20 (80 g)",
			hot: false,
			new: true,
		},
		{
			img: img6,
			desc: pageLanguage === "LT" ? "Brit Care sausas elnienos ir bulvių ėdalas be grūdų jautriems ir maisto netoleruojantiems šunims" : "Brit Care Grain-Free Venison & Potatoes Dry Food for Sensitive Dogs and Dogs with Intolerance",
			price: "6.30/kg",
			hot: false,
			new: false,
		},
	];

	const sliderItems = [
		{
			title: "Sveiki atvykę į Zoo Market krautuvėlės namus internete!",
			desc: "Naujienos ir pasiūlymai jūsų visuomet lauks čia.",
			img: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
			credits: "Photo by Alvan Nee on Unsplash",
		},
		{
			title: "Šunų skanėstai",
			desc: "Kviečiame apsilankyti ir rinktis iš gausybės įvairių šunų skanėstų, kuriuos visus rasite mūsų krautuvėlėje.",
			price: "Tiks ir išrankiausiems jūsų draugams.",
			img: "https://images.unsplash.com/photo-1508609540374-67d1601ba520?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80",
			credits: "Photo by McDobbie Hu on Unsplash",
		},
		{
			title: "Platus kačių kraiko pasirinkimas",
			desc: "Prekės pačioms jautriausioms ir išrankiausioms katėms.",
			price: "",
			img: "https://images.unsplash.com/photo-1496285138399-b5d7d20d1e16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
			credits: "Photo by Paul Hanaoka on Unsplash",
		},
	];

	return (
		<div className='pop-items-container container'>
			<div className='pop-items-left-side'>
				{pageLanguage === "LT" ? <h3>Populiarios prekės</h3> : <h3>Popular products</h3>}
				<div className='pop-items'>
					{items.map((item, i) => (
						<Item
							item={item}
							key={i}
						/>
					))}
				</div>
			</div>
			<div className='pop-items-right-side'>
				<div className='content'>
					{pageLanguage === "LT" ? <h3>Naujienos ir pasiūlymai</h3> : <h3>News and offers</h3>}
					<div className='new-item-container'>
						<SlideComp slides={sliderItems}></SlideComp>
					</div>
				</div>
			</div>
			<div className='pop-items-mobile-top'>
				<div className='mobile-main-container'>
					<img
						className='mobile-logos'
						src={logo}
						alt='dog food brand logos'
					/>
					<img
						className='mobile-division'
						src={pageLanguage === "LT" ? division : divisionEN}
						alt='dog food description'
					/>
					<img
						className='mobile-nose'
						src={nose}
						alt='emoji of dog nose'
					/>
				</div>
			</div>
		</div>
	);
}

export default PopularItems;
