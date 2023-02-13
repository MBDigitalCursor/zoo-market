import { createSlice } from "@reduxjs/toolkit";
export const generalSlice = createSlice({
	name: "generalSlice",
	initialState: {
		selectedCategory: "",
	},
	reducers: {
		setSelectedCategory: (state, action) => {
			state.selectedCategory = action.payload;
		},
	},
});

export const { setSelectedCategory } = generalSlice.actions;

export default generalSlice.reducer;
