import { createSlice } from "@reduxjs/toolkit";
export const generalSlice = createSlice({
	name: "generalSlice",
	initialState: {
		mainCategory: "",
		categoryProducts: {
			active: false,
			catTree: "",
		},
		slicedProds: [],
		pageSize: 4,
		pagination: {
			count: 0,
			from: 0,
			to: 4,
		},
		mobileView: false,
		burgerMenu: false,
		pageLanguage: "LT",
		selectedProduct: null,
	},

	reducers: {
		setMainCategory: (state, action) => {
			state.mainCategory = action.payload;
		},
		setCategoryProducts: (state, action) => {
			state.categoryProducts = action.payload;
		},

		setSlicedProds: (state, action) => {
			const { arr, from, to } = action.payload;
			const slicedArr = arr.slice(from, to);
			state.slicedProds = slicedArr;
			state.pagination = { ...state.pagination, count: arr.length };
		},
		setPagination: (state, action) => {
			state.pagination = { ...state.pagination, from: action.payload.from, to: action.payload.to };
		},
		setMobileView: (state, action) => {
			state.mobileView = action.payload;
		},
		setBurgerMenu: (state, action) => {
			state.burgerMenu = action.payload;
		},
		setLanguage: (state, action) => {
			state.pageLanguage = action.payload;
			state.mainCategory = "";
			state.categoryProducts = {
				active: false,
				catTree: "",
			};
		},
		setSelectedProduct: (state, action) => {
			state.selectedProduct = action.payload;
		},
	},
});

export const { setMainCategory, setCategoryProducts, setSlicedProds, setPagination, setMobileView, setBurgerMenu, setLanguage, setSelectedProduct } = generalSlice.actions;

export default generalSlice.reducer;
