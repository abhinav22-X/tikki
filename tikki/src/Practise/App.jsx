import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	addGroup,
	addFriend,
	addTask,
	toggleTaskCompleted,
} from "./taskManagerSlice";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
function getDate() {
	const today = new Date();
	const month = today.getMonth();
	const date = today.getDate();
	const day = today.getDay();
	const dayList = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];

	const monthList = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	return `${dayList[day].slice(0, 3)}, ${monthList[month].slice(
		0,
		3
	)}'${date}`;
}

const App = () => {
	const [currentDate, setCurrentDate] = useState(getDate());

	const dispatch = useDispatch();
	const groups = useSelector((state) => state.taskManager.groups);
	const friends = useSelector((state) => state.taskManager.friends);
	const tasks = useSelector((state) => state.taskManager.tasks);

	const [newGroupName, setNewGroupName] = useState("");
	const [newFriendName, setNewFriendName] = useState("");
	const [selectedGroupId, setSelectedGroupId] = useState(null);

	// State for new task input per friend
	const [newTaskNames, setNewTaskNames] = useState({});

	const handleAddGroup = () => {
		if (newGroupName.trim()) {
			dispatch(addGroup({ id: uuidv4(), name: newGroupName }));
			setNewGroupName("");
		}
	};

	const handleAddFriend = () => {
		if (newFriendName.trim() && selectedGroupId) {
			dispatch(
				addFriend({
					id: uuidv4(),
					name: newFriendName,
					groupId: selectedGroupId,
				})
			);
			setNewFriendName("");
		}
	};

	const handleAddTask = (friendId) => {
		if (newTaskNames[friendId]?.trim()) {
			dispatch(
				addTask({
					id: uuidv4(),
					name: newTaskNames[friendId],
					friendId,
					completed: false,
				})
			);
			setNewTaskNames((prev) => ({ ...prev, [friendId]: "" }));
		}
	};

	const handleToggleTaskCompleted = (taskId) => {
		dispatch(toggleTaskCompleted(taskId));
	};

	const handleFriendInput = (groupId) => {
		setSelectedGroupId(groupId);
		setNewFriendName("");
	};

	const handleTaskInputChange = (friendId, value) => {
		setNewTaskNames((prev) => ({ ...prev, [friendId]: value }));
	};

	return (
		<div className="app">
			{/* Top Bar */}
			<div
				className="top-bar"
				onClick={() => setCurrentDate(getDate())}
			>
				{currentDate}
			</div>
			{/* Second Bar */}
			<div className="second-bar">
				<div className="group-section">
					<input
						type="text"
						value={newGroupName}
						onChange={(e) => setNewGroupName(e.target.value)}
						placeholder="New Group Name"
					/>
					<button onClick={handleAddGroup}>Add Group</button>
				</div>
				{selectedGroupId != null && (
					<div className="friend-section">
						<input
							type="text"
							value={newFriendName}
							onChange={(e) => setNewFriendName(e.target.value)}
							placeholder="New Friend Name"
						/>
						<button
							onClick={handleAddFriend}
							disabled={!selectedGroupId}
						>
							Add Friend
						</button>
					</div>
				)}
			</div>
			{/* Third Bar - Groups */}
			<div className="third-bar">
				<div className="group-list">
					<ul>
						{groups.map((group) => (
							<li
								key={group.id}
								className={
									selectedGroupId === group.id
										? "selected-group"
										: ""
								}
								onClick={() =>
									selectedGroupId === group.id
										? handleFriendInput(null)
										: handleFriendInput(group.id)
								}
							>
								{group.name}
							</li>
						))}
					</ul>
				</div>
			</div>
			{/* Fourth Bar */}
			<div className="cards-container">
				{friends
					.filter((friend) => friend.groupId === selectedGroupId)
					.map((friend) => (
						<div
							className="card"
							key={friend.id}
						>
							<h3>{friend.name}</h3>
							<ul>
								{tasks
									.filter(
										(task) => task.friendId === friend.id
									)
									.map((task) => (
										<li key={task.id}>
											<span>{task.name}</span>
											<input
												type="checkbox"
												checked={task.completed}
												onChange={() =>
													handleToggleTaskCompleted(
														task.id
													)
												}
											/>
										</li>
									))}
							</ul>
							<input
								type="text"
								placeholder="New Task"
								value={newTaskNames[friend.id] || ""}
								onChange={(e) =>
									handleTaskInputChange(
										friend.id,
										e.target.value
									)
								}
							/>
							<button onClick={() => handleAddTask(friend.id)}>
								Add Task
							</button>
						</div>
					))}
			</div>
		</div>
	);
};

export default App;
