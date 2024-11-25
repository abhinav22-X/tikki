import { createSlice } from "@reduxjs/toolkit";
const initialState = {
	tasks: [],
};
const TaskSlice = createSlice({
	name: "task",
	initialState,
	reducers: {
		addTaskToCart(state, action) {
			state.tasks.push(action.payload);
		},
		// removeItemFromCart(state, action) {
		// 	state.cartItems = state.cartItems.filter(
		// 		(item) => item.id !== action.payload
		// 	);
		// },
		// clearCart(state) {
		// 	state.cartItems = [];
		// },
		// increaseItemQuantity(state, action) {
		// 	const itemToIncrease = state.cartItems.find(
		// 		(item) => item.id === action.payload
		// 	);
		// 	if (itemToIncrease) {
		// 		itemToIncrease.quantity += 1;
		// 	}
		// },
		// decreaseItemQuantity(state, action) {
		// 	const itemToDecrease = state.cartItems.find(
		// 		(item) => item.id === action.payload
		// 	);
		// 	if (itemToDecrease && itemToDecrease.quantity > 1) {
		// 		itemToDecrease.quantity -= 1;
		// 	}
		// },
	},
});
export const {
	addTaskToCart,
	// removeItemFromCart,
	// clearCart,
	// increaseItemQuantity,
	// decreaseItemQuantity,
} = TaskSlice.actions;
export default TaskSlice.reducer;
