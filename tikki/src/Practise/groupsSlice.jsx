import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	groups: [],
	currentGroup: null,
};

const groupsSlice = createSlice({
	name: "groups",
	initialState,
	reducers: {
		addGroup(state, action) {
			state.groups.push(action.payload);
		},
		removeGroup(state, action) {
			state.groups = state.groups.filter(
				(group) => group.id !== action.payload
			);
		},
		setCurrentGroup(state, action) {
			state.currentGroup = action.payload;
		},
	},
});

export const { addGroup, removeGroup, setCurrentGroup } = groupsSlice.actions;
export default groupsSlice.reducer;
