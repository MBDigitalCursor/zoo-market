import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch, useSelector } from "react-redux";
import { setMainCategory, setCategoryProducts } from "../../store/generalStore";
import { scrollToSection } from "../../helpers/scrollToSection";

const StyledMobileMenu = styled((props) => (
	<Menu
		elevation={0}
		anchorOrigin={{
			vertical: "bottom",
			horizontal: "left",
		}}
		transformOrigin={{
			vertical: "top",
			horizontal: "left",
		}}
		{...props}
	/>
))(({ theme }) => ({
	"& .Menu": {
		top: "5rem",
	},
	"& .MuiPaper-root": {
		marginLeft: "0",
		borderRadius: 0,
		marginTop: theme.spacing(0),
		minWidth: 180,
		color: "rgb(55, 65, 81)",
		backgroundColor: "rgba(194, 193, 193, 0.7)",
		"& .MuiMenu-list": {
			padding: "0px 0",
		},
		"& .MuiMenuItem-root": {
			fontSize: "21px",
			fontWeight: "400",
			fontFamily: "'Red Hat Display', sans-serif",
			padding: "13px 37px",
			maxHeight: "50px",
			"&:hover": {
				backgroundColor: "#aaaaaab3",
			},
		},
	},
}));

const StyledMenu = styled((props) => (
	<Menu
		elevation={0}
		anchorOrigin={{
			vertical: "top",
			horizontal: "right",
		}}
		transformOrigin={{
			vertical: "top",
			horizontal: "left",
		}}
		{...props}
	/>
))(({ theme }) => ({
	"& .Menu": {
		top: "5rem",
	},
	"& .MuiPaper-root": {
		marginLeft: "0",
		borderRadius: 0,
		marginTop: theme.spacing(0),
		minWidth: 180,
		color: "rgb(55, 65, 81)",
		backgroundColor: "rgba(194, 193, 193, 0.7)",
		"& .MuiMenu-list": {
			padding: "0px 0",
		},
		"& .MuiMenuItem-root": {
			fontSize: "21px",
			fontWeight: "400",
			fontFamily: "'Red Hat Display', sans-serif",
			padding: "13px 37px",
			maxHeight: "50px",
			"&:hover": {
				backgroundColor: "#aaaaaab3",
			},
		},
	},
}));

const NestedMenu = styled((props) => (
	<Menu
		elevation={0}
		anchorOrigin={{
			vertical: "top",
			horizontal: "right",
		}}
		transformOrigin={{
			vertical: "top",
			horizontal: "left",
		}}
		{...props}
	/>
))(({ theme }) => ({
	"& .MuiPaper-root": {
		marginLeft: "0",
		borderRadius: 0,
		marginTop: theme.spacing(0),
		minWidth: "225px",
		color: "rgb(55, 65, 81)",

		backgroundColor: "rgba(194, 193, 193, 0.7)",
		"& .MuiMenu-list": {
			padding: "0px 0",
		},
		"& .MuiMenuItem-root": {
			fontSize: "21px",
			fontWeight: "400",
			fontFamily: "'Red Hat Display', sans-serif",
			padding: "13px 37px",
			maxHeight: "50px",
			backgroundColor: "#348A0C",
			color: "white",
			"&:hover": {
				backgroundColor: "#2f7a0c",
			},
		},
	},
}));

function CategoryItem({ category }) {
	const [mobileView, setMobileView] = useState(false);

	useEffect(() => {
		function handleResize() {
			setMobileView(window.innerWidth <= 769);
		}
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const dispatch = useDispatch();
	const { mainCategory, categoryProducts } = useSelector((state) => state.generalSlice);
	const [anchorEl, setAnchorEl] = useState(null);
	const [anchorEl2, setAnchorEl2] = useState(null);
	const [open, setOpen] = useState(false);
	const [openNested, setOpenNested] = useState(false);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
		setOpen(true);
	};
	const handleClose = () => {
		setAnchorEl(null);
		setOpen(false);
	};
	const handleItemClick = (event) => {
		setAnchorEl2(event.currentTarget);
		setOpenNested(!openNested);
	};

	return (
		<div>
			<div
				className="single-category-item"
				style={{
					backgroundColor: mainCategory === category.title ? "rgba(194, 193, 193, 0.7)" : "",
				}}
				id="demo-customized-button"
				aria-controls={open ? "demo-customized-menu" : undefined}
				aria-haspopup="true"
				aria-expanded={open ? "true" : undefined}
				variant="contained"
				onClick={(e) => {
					handleClick(e);
					dispatch(setMainCategory(category.title));
					if (categoryProducts.active) {
						dispatch(
							setCategoryProducts({
								active: false,
								catTree: "",
							})
						);
					}
				}}
			>
				<img
					src={category.icon}
					alt={category.title}
				/>
				<p>{category.title}</p>
			</div>
			{category.nestedCategories ? (
				<StyledMenu
					id="demo-customized-menu"
					anchorEl={anchorEl}
					open={open}
					onClose={() => {
						handleClose();
						if (categoryProducts.active) {
							dispatch(
								setCategoryProducts({
									active: false,
									catTree: "",
								})
							);
						}
						dispatch(setMainCategory(""));
					}}
				>
					<MenuItem
						onClick={() => {
							handleClose();

							if (category.title === "Šunims") {
								dispatch(
									setCategoryProducts({
										active: true,
										catTree: "Šunims > Sausas ėdalas",
									})
								);
								dispatch(setMainCategory(""));
							}
							if (category.title === "Katėms") {
								dispatch(
									setCategoryProducts({
										active: true,
										catTree: "Katėms > Sausas ėdalas",
									})
								);
								dispatch(setMainCategory(""));
							}
						}}
					>
						Sausas ėdalas
					</MenuItem>
					<MenuItem
						onClick={() => {
							handleClose();
							if (category.title === "Šunims") {
								dispatch(
									setCategoryProducts({
										active: true,
										catTree: "Šunims > Konservai",
									})
								);
								dispatch(setMainCategory(""));
							}
							if (category.title === "Katėms") {
								dispatch(
									setCategoryProducts({
										active: true,
										catTree: "Katėms > Konservai",
									})
								);
								dispatch(setMainCategory(""));
							}
						}}
					>
						Konservai
					</MenuItem>
					<MenuItem onClick={handleItemClick}>
						Skanėstai
						<NestedMenu
							id="nested-customized-menu2"
							anchorEl={anchorEl2}
							open={openNested}
							onClose={() => setOpenNested(false)}
						>
							<MenuItem
								onClick={() => {
									handleClose();
									dispatch(setMainCategory(""));
									scrollToSection("contacts");
								}}
							>
								Teirautis krautuvėlėje
							</MenuItem>
						</NestedMenu>
					</MenuItem>
					<MenuItem onClick={handleItemClick}>
						Higienos prekės
						<NestedMenu
							id="nested-customized-menu2"
							anchorEl={anchorEl2}
							open={openNested}
							onClose={() => setOpenNested(false)}
						>
							<MenuItem
								onClick={() => {
									handleClose();
									dispatch(setMainCategory(""));
									scrollToSection("contacts");
								}}
							>
								Teirautis krautuvėlėje
							</MenuItem>
						</NestedMenu>
					</MenuItem>
					<MenuItem onClick={handleItemClick}>
						Žaislai
						<NestedMenu
							id="nested-customized-menu2"
							anchorEl={anchorEl2}
							open={openNested}
							onClose={() => setOpenNested(false)}
						>
							<MenuItem
								onClick={() => {
									handleClose();
									dispatch(setMainCategory(""));
									scrollToSection("contacts");
								}}
							>
								Teirautis krautuvėlėje
							</MenuItem>
						</NestedMenu>
					</MenuItem>
					<MenuItem onClick={handleItemClick}>
						Aksesuarai
						<NestedMenu
							id="nested-customized-menu2"
							anchorEl={anchorEl2}
							open={openNested}
							onClose={() => setOpenNested(false)}
						>
							<MenuItem
								onClick={() => {
									handleClose();
									dispatch(setMainCategory(""));
									scrollToSection("contacts");
								}}
							>
								Teirautis krautuvėlėje
							</MenuItem>
						</NestedMenu>
					</MenuItem>
				</StyledMenu>
			) : (
				<NestedMenu
					id="nested-customized-menu2"
					anchorEl={anchorEl}
					open={open}
					onClose={() => {
						handleClose();
						dispatch(setMainCategory(""));
					}}
				>
					<MenuItem
						onClick={() => {
							handleClose();
							dispatch(setMainCategory(""));
							scrollToSection("contacts");
						}}
					>
						Teirautis krautuvėlėje
					</MenuItem>
				</NestedMenu>
			)}
		</div>
	);
}

export default CategoryItem;
