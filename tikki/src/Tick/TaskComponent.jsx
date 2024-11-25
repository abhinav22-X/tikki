import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTaskToCart } from "./TaskSlice";
import "./Tikks.css";

function TaskComponent() {
	const dispatch = useDispatch();
	const taskItems = useSelector((state) => state.task.tasks);
	const [newTask, setNewTask] = useState("");
	const handleAddTask = (e) => {
		e.preventDefault(); // Prevent default form submission
		dispatch(addTaskToCart(newTask));
		setNewTask("");
	};

	return (
		<div className="todo-card">
			<h2>Abhinav</h2>
			<div className="task-list">
				{taskItems.map((task) => (
					<div
						key={task}
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

export default TaskComponent;
