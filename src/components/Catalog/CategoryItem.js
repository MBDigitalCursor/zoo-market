import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedCategory } from "../../store/generalStore";

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
	"& .MuiPaper-root": {
		marginLeft: "0",
		borderRadius: 0,
		marginTop: theme.spacing(3),
		minWidth: 180,
		color: "rgb(55, 65, 81)",

		backgroundColor: "rgba(194, 193, 193, 0.7)",
		"& .MuiMenu-list": {
			padding: "2px 0",
		},
		"& .MuiMenuItem-root": {
			fontSize: "21px",
			fontWeight: "400",
			fontFamily: "'Red Hat Display', sans-serif",
			padding: "13px 48px",
			"&:active": {
				backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
			},
		},
	},
}));

function CategoryItem({ category }) {
	const dispatch = useDispatch();
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);

	const { selectedCategory } = useSelector((state) => state.generalSlice);

	console.log("selectedCategory ===", selectedCategory);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
		dispatch(setSelectedCategory(""));
	};
	return (
		<div>
			<div
				className='single-category-item'
				style={{
					backgroundColor: selectedCategory.includes(category.category) ? "rgba(194, 193, 193, 0.7)" : "",
				}}
				id='demo-customized-button'
				aria-controls={open ? "demo-customized-menu" : undefined}
				aria-haspopup='true'
				aria-expanded={open ? "true" : undefined}
				variant='contained'
				disableElevation
				onClick={(e) => {
					handleClick(e);
					dispatch(setSelectedCategory(category.category));
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
					id='demo-customized-menu'
					MenuListProps={{
						"aria-labelledby": "demo-customized-button",
					}}
					anchorEl={anchorEl}
					open={open}
					onClose={handleClose}
				>
					<MenuItem
						onClick={() => {
							handleClose();
							if (category.title === "Šunims") {
								dispatch(setSelectedCategory("dogDryFood"));
							}
							if (category.title === "Katėms") {
								dispatch(setSelectedCategory("catDryFood"));
							}
						}}
						disableRipple
					>
						Sausas ėdalas
					</MenuItem>
					<MenuItem
						onClick={() => {
							handleClose();
							if (category.title === "Šunims") {
								dispatch(setSelectedCategory("dogCannedFood"));
							}
							if (category.title === "Katėms") {
								dispatch(setSelectedCategory("catCannedFood"));
							}
						}}
						disableRipple
					>
						Konservai
					</MenuItem>
					<MenuItem
						onClick={handleClose}
						disableRipple
					>
						Skanėstai
					</MenuItem>
					<MenuItem
						onClick={handleClose}
						disableRipple
					>
						Higienos prekės
					</MenuItem>
					<MenuItem
						onClick={handleClose}
						disableRipple
					>
						Žaislai
					</MenuItem>
					<MenuItem
						onClick={handleClose}
						disableRipple
					>
						Aksesuarai
					</MenuItem>
				</StyledMenu>
			) : (
				<StyledMenu
					id='demo-customized-menu'
					MenuListProps={{
						"aria-labelledby": "demo-customized-button",
					}}
					anchorEl={anchorEl}
					open={open}
					onClose={handleClose}
				>
					<MenuItem
						onClick={handleClose}
						disableRipple
					>
						Teirautis krauveleje
					</MenuItem>
				</StyledMenu>
			)}
		</div>
	);
}

export default CategoryItem;
