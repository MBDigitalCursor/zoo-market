import React, { useState } from "react";
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";

function SlideComp({ slides }) {
	const [slideIndex, setSlideIndex] = useState(0);

	const nextSlide = () => {
		if (slideIndex >= slides.length - 1) {
			setSlideIndex(0);
			return;
		}
		setSlideIndex(slideIndex + 1);
	};
	const prevSlide = () => {
		if (slideIndex === 0) {
			setSlideIndex(slides.length - 1);
			return;
		}
		setSlideIndex(slideIndex - 1);
	};

	return (
		<div>
			<div className='new-item-desc'>
				<h4>{slides[slideIndex].title}</h4>
				<p>{slides[slideIndex].desc}</p>
				<p>{slides[slideIndex].price}</p>
			</div>
			<div className='pop-items-right-side-bottom-container'>
				<MdOutlineArrowBackIosNew
					className='slide-icon slide-icon-left'
					onClick={prevSlide}
				/>
				<img
					src={slides[slideIndex].img}
					alt='dog food'
				/>
				<MdOutlineArrowForwardIos
					className='slide-icon slide-icon-right'
					onClick={nextSlide}
				/>
			</div>
		</div>
	);
}

export default SlideComp;
