import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	addGroup,
	addFriend,
	removeFriend,
	removeGroup,
	addTask,
	toggleTaskCompleted,
} from "./taskManagerSlice";
import "./App.css";
import "../Code_samples/Code_notification.css";

import { v4 as uuidv4 } from "uuid";
import { BsThreeDotsVertical } from "react-icons/bs";

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
	const [notificationCount, setNotificationCount] = useState(0);

	const incrementNotification = () => {
		setNotificationCount(notificationCount + 1);
	};

	// State for new task input per friend
	const [newTaskNames, setNewTaskNames] = useState({});

	const handleAddGroup = () => {
		if (newGroupName.trim()) {
			if (groups.some((group) => group.name === newGroupName)) {
				alert("Group with this name already exists!");
				return;
			}
			let x = uuidv4();
			dispatch(addGroup({ id: x, name: newGroupName }));
			setNewGroupName("");
			setSelectedGroupId(x);
		}
	};
	// const handleDeleteFriend = (friendId) => {
	// 	dispatch(removeFriend(friendId));
	// 	setNewTaskNames((prev) => {
	// 		const { [friendId]: _, ...rest } = prev;
	// 		return rest;
	// 	});
	// };
	const handleDeleteGroup = (groupId) => {
		dispatch(removeGroup(groupId));
		setSelectedGroupId(null);
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

	const handleFriendInputBtn = (groupId) => {
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

				<div
					className={`friend-section ${
						!selectedGroupId ? "disabled" : ""
					}`}
				>
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
				{/* )} */}
			</div>
			{/* Third Bar - Groups */}
			<div className="third-bar">
				<ul>
					{groups.map((group) => (
						<div
							key={group.id}
							className="list-items"
						>
							<li
								key={group.id}
								className={
									selectedGroupId === group.id
										? "selected-group"
										: ""
								}
							>
								<div
									className="group-name"
									onClick={() =>
										selectedGroupId === group.id
											? handleFriendInputBtn(null)
											: handleFriendInputBtn(group.id)
									}
								>
									{group.name}
								</div>
							</li>
							<div className="settings-icon-container">
								<BsThreeDotsVertical className="settings-icon" />
							</div>
							<div className="notification-dot">
								{notificationCount > 0 && notificationCount}
							</div>
						</div>
					))}
				</ul>
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
