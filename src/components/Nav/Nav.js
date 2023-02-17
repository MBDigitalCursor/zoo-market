import React, { useState } from "react";
import { scrollToSection } from "../../helpers/scrollToSection";
import "./nav.css";
import { RxHamburgerMenu } from "react-icons/rx";
import DrawerComp from "./DrawerComp";
import { useDispatch, useSelector } from "react-redux";
import { setBurgerMenu, setLanguage } from "../../store/generalStore";

function Nav() {
	const [blur, setBlur] = useState(false);

	const dispatch = useDispatch();
	const { pageLanguage } = useSelector((state) => state.generalSlice);

	const addBlur = () => {
		if (window.scrollY >= 80) {
			setBlur(true);
		} else {
			setBlur(false);
		}
	};
	window.addEventListener("scroll", addBlur);

	const scrollToTop = () => {
		const duration = 5000; // milliseconds
		const startScrollY = window.scrollY;
		const scrollStep = -startScrollY / (duration / (1000 / 60)); // 60 frames per second

		const animateScroll = (startTime) => {
			const elapsedTime = performance.now() - startTime;
			const scrollY = Math.max(startScrollY + scrollStep * elapsedTime, 0);
			window.scrollTo(0, scrollY);
			if (scrollY > 0) {
				requestAnimationFrame(() => animateScroll(startTime));
			}
		};

		requestAnimationFrame(() => animateScroll(performance.now()));
	};

	return (
		<nav className={blur ? "blur" : ""}>
			<div className='nav-container container'>
				<img
					onClick={scrollToTop}
					src={require("../../assets/img/zoo-market-logo.png")}
					alt='zoo market logo'
				/>
				<div className='nav-links'>
					<a
						href='#catalog'
						onClick={() => scrollToSection("catalog")}
					>
						{pageLanguage === "LT" ? "Produktai" : "Products"}
					</a>
					<a
						href='#contacts'
						onClick={() => scrollToSection("contacts")}
					>
						{pageLanguage === "LT" ? "Kontaktai" : "Contacts"}
					</a>
				</div>

				<div className='nav-lang'>
					<p onClick={() => dispatch(setLanguage("LT"))}>LT</p>
					<p onClick={() => dispatch(setLanguage("EN"))}>EN</p>
				</div>
			</div>

			<RxHamburgerMenu
				className='nav-burger'
				onClick={() => dispatch(setBurgerMenu(true))}
			/>
			<DrawerComp></DrawerComp>
		</nav>
	);
}

export default Nav;
