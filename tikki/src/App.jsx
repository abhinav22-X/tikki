import React from "react";
import "./App.css";
import { useState } from "react";
import "./Card.css";

function App() {
	const [tasks, setTasks] = useState(["Task 1", "Task 2", "Task 3"]);
	const [newTask, setNewTask] = useState("");

	const handleAddTask = () => {
		setTasks([...tasks, newTask]);
		setNewTask("");
	};

	return (
		<div>
			{/* Top Section */}
			<div className="top-section">
				<div className="button-group">
					<button className="button">Add group</button>
					<button className="button">Night mode</button>
					<button className="button">Add friend</button>
				</div>
			</div>

			{/* Middle Section */}
			<div className="middle-section">
				<div className="left-section">
					<div className="vertical-buttons">
						<button className="button">Group 1</button>
						<button className="button">Group 2</button>
						<button className="button">Group 3</button>
					</div>
				</div>
				<div className="right-section">
					<div className="card-container">
						<div className="card">
							<h2 className="card-title">Abhinav</h2>
							<ul className="task-list">
								{tasks.map((task, index) => (
									<li key={index}>{task}</li>
								))}
							</ul>
							<div className="input-container">
								<input
									type="text"
									value={newTask}
									onChange={(e) => setNewTask(e.target.value)}
									placeholder="Enter new task"
								/>
								<button
									className="add-task-button"
									onClick={handleAddTask}
								>
									+
								</button>
							</div>
						</div>

						<div className="card">
							<h2 className="card-title">Ashish</h2>
							<ul className="task-list">
								{tasks.map((task, index) => (
									<li key={index}>{task}</li>
								))}
							</ul>
							<div className="input-container">
								<input
									type="text"
									value={newTask}
									onChange={(e) => setNewTask(e.target.value)}
									placeholder="Enter new task"
								/>
								<button
									className="add-task-button"
									onClick={handleAddTask}
								>
									+
								</button>
							</div>
						</div>

						<div className="card">
							<h2 className="card-title">IPS</h2>
							<ul className="task-list">
								{tasks.map((task, index) => (
									<li key={index}>{task}</li>
								))}
							</ul>
							<div className="input-container">
								<input
									type="text"
									value={newTask}
									onChange={(e) => setNewTask(e.target.value)}
									placeholder="Enter new task"
								/>
								<button
									className="add-task-button"
									onClick={handleAddTask}
								>
									+
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Footer Section */}
			<div className="footer">
				<p>&copy; 2023 Your Company</p>
			</div>
		</div>
	);
}

export default App;
