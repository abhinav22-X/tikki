import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Tikks.css";
import { addFriendTodoList } from "./FriendsSlice";

function FriendsTaskComponent({ friend }) {
	const dispatch = useDispatch();
	const friendName = friend;
	const friendTodoList = useSelector(
		(state) => state.friendsTodoLists.friendsTodoLists[friendName]
	);

	const [newTask, setNewTask] = useState("");
	const handleAddTask = (e) => {
		e.preventDefault(); // Prevent default form submission
		dispatch(addFriendTodoList({ friendName, task: newTask }));
		setNewTask("");
	};

	return (
		<div className="todo-card">
			<h2 style={{ textAlign: "center" }}>{friendName}</h2>
			<div className="task-list">
				{friendTodoList &&
					friendTodoList.map((task, index) => (
						<div
							key={index}
							className="task-item"
						>
							{task}
						</div>
					))}
			</div>
			<form
				className="todo-form"
				onSubmit={handleAddTask}
			>
				<input
					type="text"
					id="taskInput"
					value={newTask}
					onChange={(e) => setNewTask(e.target.value)}
					placeholder="Enter a new task..."
					className="task-input"
				/>
				<button
					id="btn"
					type="submit"
					className="add-button"
				>
					Add Task
				</button>
			</form>
		</div>
	);
}

export default FriendsTaskComponent;
