import { configureStore } from "@reduxjs/toolkit";
import taskManagerReducer from "./taskManagerSlice";

export const store = configureStore({
	reducer: {
		taskManager: taskManagerReducer,
	},
});

export default store;
