import React from "react";
import "./popularItems.css";
import img1 from "../../assets/img/dogsDryFood/dog sausas 3.png";
import img2 from "../../assets/img/catsCannedFood/cat konservai 8.png";
import img3 from "../../assets/img/catsDryFood/cat sausas 6.png";
import img4 from "../../assets/img/dogsDryFood/dog sausas 6.png";
import img5 from "../../assets/img/dogsCannedFood/dog konservai 3.png";
import img6 from "../../assets/img/dogsCannedFood/dog konservai 10.png";
import Item from "./Item";

function PopularItems() {
	const items = [
		{
			img: img1,
			desc: "Kačių skanėstas Pussycat Juice Mega Pussy Extra Wet, 1 kg",
			price: 14.99,
			hot: false,
			new: false,
		},
		{
			img: img2,
			desc: "Sausas šunų ėdalas Royal Canin Puppy Pussy Magnet, 2 kg",
			price: 69.99,
			hot: false,
			new: false,
		},
		{
			img: img3,
			desc: "Sausas šunų ėdalas Royal Canin Bright Wet Pussy Boy, 5 kg",
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

	return (
		<div className="pop-items-container">
			<div className="pop-items-left-side">
				<h3>Populiarios prekės</h3>
				<div className="pop-items">
					{items.map((item, i) => (
						<div>
							<Item
								item={item}
								key={i}
							/>
						</div>
					))}
				</div>
			</div>
			<div className="pop-items-right-side">
				<div className="content">
					<h3>Naujienos ir pasiūlymai</h3>
					<div className="new-item-container">
						<div className="new-item-desc">
							<h4>Puiki nauja prekė, OMG!</h4>
							<p>Enjoying life in the senior years is always possible: this meal is tailored to the needs of those, who have reached a certain age. It contains finest ingredients</p>
							<p>$59.99 for limited time</p>
						</div>
						<img
							src={img3}
							alt="dog food"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PopularItems;
