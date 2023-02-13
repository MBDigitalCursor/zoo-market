import React from "react";

function CategoryItem({ category }) {
	return (
		<div className="single-category-item">
			<img
				src={category.icon}
				alt={category.title}
			/>
			<p>{category.title}</p>
		</div>
	);
}

export default CategoryItem;
