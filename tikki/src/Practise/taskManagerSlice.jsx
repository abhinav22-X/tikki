import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	groups: [],
	friends: [],
	tasks: [],
};

const taskManagerSlice = createSlice({
	name: "taskManager",
	initialState,
	reducers: {
		addGroup(state, action) {
			state.groups.push(action.payload);
		},
		removeGroup(state, action) {
			const groupId = action.payload;
			state.groups = state.groups.filter((group) => group.id !== groupId);
			state.friends = state.friends.filter(
				(friend) => friend.groupId !== groupId
			);
			state.tasks = state.tasks.filter(
				(task) =>
					!state.friends.some(
						(friend) =>
							friend.id === task.friendId &&
							friend.groupId === groupId
					)
			);
		},
		addFriend(state, action) {
			state.friends.push(action.payload);
		},
		removeFriend(state, action) {
			state.friends = state.friends.filter(
				(friend) => friend.id !== action.payload
			);
		},
		addTask(state, action) {
			state.tasks.push(action.payload);
		},
		removeTask(state, action) {
			state.tasks = state.tasks.filter(
				(task) => task.id !== action.payload
			);
		},
		toggleTaskCompleted(state, action) {
			const task = state.tasks.find((task) => task.id === action.payload);
			if (task) {
				task.completed = !task.completed;
			}
		},
	},
});

export const {
	addGroup,
	removeGroup,
	addFriend,
	removeFriend,
	addTask,
	removeTask,
	toggleTaskCompleted,
} = taskManagerSlice.actions;
export default taskManagerSlice.reducer;
