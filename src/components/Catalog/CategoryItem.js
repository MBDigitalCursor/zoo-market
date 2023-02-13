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
		marginLeft: "10px",
		borderRadius: 2,
		marginTop: theme.spacing(2),
		minWidth: 180,
		color: "rgb(55, 65, 81)",
		backgroundColor: theme.palette.grey[400],
		"& .MuiMenu-list": {
			padding: "2px 0",
		},
		"& .MuiMenuItem-root": {
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
	};
	return (
		<div>
			<div
				className='single-category-item'
				id='demo-customized-button'
				aria-controls={open ? "demo-customized-menu" : undefined}
				aria-haspopup='true'
				aria-expanded={open ? "true" : undefined}
				variant='contained'
				disableElevation
				onClick={handleClick}
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
								dispatch(setSelectedCategory("dryFoodDogs"));
							}
							if (category.title === "Katėms") {
								dispatch(setSelectedCategory("dryFoodCats"));
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
								dispatch(setSelectedCategory("cannedFoodDogs"));
							}
							if (category.title === "Katėms") {
								dispatch(setSelectedCategory("cannedFoodCats"));
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
