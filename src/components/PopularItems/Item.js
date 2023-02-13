import React from "react";
import HotIcon from "../../assets/icons/HOTicon.png";
import NewIcon from "../../assets/icons/NEWicon.png";

function Item({ item }) {
	return (
		<div
			className='pop-single-item'
			style={{
				width: "244px",
			}}
		>
			{item.hot && (
				<img
					className='hot-new-icons'
					src={HotIcon}
					alt=''
				/>
			)}
			{item.new && (
				<img
					className='hot-new-icons'
					src={NewIcon}
					alt=''
				/>
			)}
			<img
				src={item.img}
				alt=''
			/>
			<p>{item.desc}</p>
			<p>${item.price}</p>
		</div>
	);
}

export default Item;
