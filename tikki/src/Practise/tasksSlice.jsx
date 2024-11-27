import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	tasks: [],
	currentTask: null,
};

const tasksSlice = createSlice({
	name: "tasks",
	initialState,
	reducers: {
		addTask(state, action) {
			state.tasks.push(action.payload);
		},
		removeTask(state, action) {
			state.tasks = state.tasks.filter(
				(task) => task.id !== action.payload
			);
		},
		setCurrentTask(state, action) {
			state.currentTask = action.payload;
		},
		toggleTaskCompleted(state, action) {
			const task = state.tasks.find((task) => task.id === action.payload);
			if (task) {
				task.completed = !task.completed;
			}
		},
	},
});

export const { addTask, removeTask, setCurrentTask, toggleTaskCompleted } =
	tasksSlice.actions;
export default tasksSlice.reducer;
