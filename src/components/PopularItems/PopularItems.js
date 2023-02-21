import React from "react";
import "./popularItems.css";
import img1 from "../../assets/img/dogsDryFood/dog sausas 3.png";
import img2 from "../../assets/img/catsCannedFood/cat konservai 8.png";
import img3 from "../../assets/img/catsDryFood/cat sausas 6.png";
import img4 from "../../assets/img/dogsDryFood/dog sausas 6.png";
import img5 from "../../assets/img/dogsCannedFood/dog konservai 3.png";
import img6 from "../../assets/img/dogsCannedFood/dog konservai 10.png";
import popImg from "../../assets/img/dogsDryFood/dog sausas 8.png";
import logo from "../../assets/img/mobileMain/brand logos.svg";
import division from "../../assets/img/mobileMain/division section.svg";
import nose from "../../assets/img/mobileMain/nose 1.svg";
import Item from "./Item";
import { useSelector } from "react-redux";
import SlideComp from "./SlideComp";

function PopularItems() {
	const { pageLanguage } = useSelector((state) => state.generalSlice);

	const items = [
		{
			img: img1,
			desc: pageLanguage === "LT" ? "Kačių skanėstas Pussycat Juice Mega Pussy Extra Wet, 1 kg" : "Cat treat Pussycat Juice Mega Pussy Extra Wet",
			price: 14.99,
			hot: false,
			new: false,
		},
		{
			img: img2,
			desc: pageLanguage === "LT" ? "Sausas šunų ėdalas Royal Canin Puppy Pussy Magnet, 2 kg" : "Dry dog food Royal Canin Puppy Pussy Magnet, 2 kg",
			price: 69.99,
			hot: false,
			new: false,
		},
		{
			img: img3,
			desc: pageLanguage === "LT" ? "Sausas šunų ėdalas Royal Canin Bright Wet Pussy Boy, 5 kg" : "Dry dog food Royal Canin Bright Wet Pussy Boy, 5 kg",
			price: 20.99,
			hot: true,
			new: false,
		},
		{
			img: img4,
			desc: "Šunų ėdalas Boombastic Ultra Royal Canin Dry Pussy, 15 kg",
			price: 23.99,
			hot: false,
			new: false,
		},
		{
			img: img5,
			desc: "Šunų ir kačių universalus ėdalas Royal Canin Festival Pussy, 10 vnt",
			price: 21.99,
			hot: false,
			new: true,
		},
		{
			img: img6,
			desc: "Cat food Royal Canin Fake Hair Protection From Dogs, 5 kg",
			price: 13.99,
			hot: false,
			new: false,
		},
	];

	const sliderItems = [
		{
			title: "Puiki nauja prekė, OMG! 1",
			desc: "Enjoying life in the senior years is always possible: this meal is tailored to the needs of those, who have reached a certain age. It contains finest ingredients",
			price: "$59.99 for limited time",
			img: popImg,
		},
		{
			title: "Puiki nauja prekė, OMG! 2",
			desc: "Enjoying life in the senior years is always possible: this meal is tailored to the needs of those, who have reached a certain age. It contains finest ingredients",
			price: "$59.99 for limited time",
			img: "https://images.unsplash.com/photo-1604544203292-0daa7f847478?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
		},
		{
			title: "Puiki nauja prekė, OMG! 3",
			desc: "Enjoying life in the senior years is always possible: this meal is tailored to the needs of those, who have reached a certain age. It contains finest ingredients",
			price: "$59.99 for limited time",
			img: "https://images.unsplash.com/photo-1583337260546-28b6bf66d004?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
		},
		{
			title: "Puiki nauja prekė, OMG! 4",
			desc: "Enjoying life in the senior years is always possible: this meal is tailored to the needs of those, who have reached a certain age. It contains finest ingredients",
			price: "$59.99 for limited time",
			img: "https://images.unsplash.com/photo-1608096275263-1667980c4dc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
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
						src={division}
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
