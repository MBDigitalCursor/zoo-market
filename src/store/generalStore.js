import { createSlice } from "@reduxjs/toolkit";
export const generalSlice = createSlice({
	name: "generalSlice",
	initialState: {
		mainCategory: "",
		categoryProducts: {
			active: false,
			catTree: "",
		},
	},
	reducers: {
		setMainCategory: (state, action) => {
			state.mainCategory = action.payload;
		},
		setCategoryProducts: (state, action) => {
			state.categoryProducts = action.payload;
		},
	},
});

export const { setMainCategory, setCategoryProducts } = generalSlice.actions;

export default generalSlice.reducer;
