import React from "react";
import HotIcon from "../../assets/icons/HOTicon.png";
import NewIcon from "../../assets/icons/NEWicon.png";

function Item({ item }) {
	return (
		<div className='single-item'>
			{item.hot && (
				<img
					className='hot-new-icons'
					src={HotIcon}
					alt='product'
				/>
			)}
			{item.new && (
				<img
					className='hot-new-icons'
					src={NewIcon}
					alt='product'
				/>
			)}
			<img
				src={item.img}
				alt='product'
			/>
			<p>{item.desc}</p>
			<p>€{item.price}</p>
		</div>
	);
}

export default Item;
