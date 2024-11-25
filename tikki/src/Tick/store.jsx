import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./TaskSlice";
import friendsTodoListsReducer from "./FriendsSlice";
const store = configureStore({
	reducer: {
		task: taskReducer,
		friendsTodoLists: friendsTodoListsReducer,
	},
});

export default store;
