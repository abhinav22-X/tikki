import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	friends: [],
	currentFriend: null,
};

const friendsSlice = createSlice({
	name: "friends",
	initialState,
	reducers: {
		addFriend(state, action) {
			state.friends.push(action.payload);
		},
		removeFriend(state, action) {
			state.friends = state.friends.filter(
				(friend) => friend.id !== action.payload
			);
		},
		setCurrentFriend(state, action) {
			state.currentFriend = action.payload;
		},
	},
});

export const { addFriend, removeFriend, setCurrentFriend } =
	friendsSlice.actions;
export default friendsSlice.reducer;
