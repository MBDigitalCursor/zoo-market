import { createSlice } from "@reduxjs/toolkit";
export const generalSlice = createSlice({
	name: "generalSlice",
	initialState: {
		mainCategory: "",
		categoryProducts: {
			active: false,
			catTree: "",
		},
		products: [],
		slicedProds: [],
		pageSize: 4,
		pagination: {
			count: 0,
			from: 0,
			to: 4,
		},
	},
	reducers: {
		setMainCategory: (state, action) => {
			state.mainCategory = action.payload;
		},
		setCategoryProducts: (state, action) => {
			state.categoryProducts = action.payload;
		},
		setProducts: (state, action) => {
			state.products = action.payload;
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
	},
});

export const { setMainCategory, setCategoryProducts, setSlicedProds, setProducts, setPagination } = generalSlice.actions;

export default generalSlice.reducer;
