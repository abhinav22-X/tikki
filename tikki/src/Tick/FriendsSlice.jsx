import { createSlice } from "@reduxjs/toolkit";

const friendsTodoListsSlice = createSlice({
	name: "friendsTodoLists",
	initialState: {
		
		friendsTodoLists: {}, // store todo lists by friend name
	},
	reducers: {
		addFriendTodoList(state, action) {
			const friendName = action.payload.friendName;
			const task = action.payload.task;
			if (!state.friendsTodoLists[friendName]) {
				state.friendsTodoLists[friendName] = [];
			}
			state.friendsTodoLists[friendName].push(task);
		},
		updateFriendTodoList(state, action) {
			const friendName = action.payload.friendName;
			state.friendsTodoLists[friendName] = action.payload.todoList;
		},
		removeFriendTodoList(state, action) {
			const friendName = action.payload.friendName;
			delete state.friendsTodoLists[friendName];
		},
	},
});

export const { addFriendTodoList, updateFriendTodoList, removeFriendTodoList } =
	friendsTodoListsSlice.actions;
export default friendsTodoListsSlice.reducer;
