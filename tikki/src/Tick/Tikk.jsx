import { useState } from "react";
import "./Tikks.css";
import FriendsTaskComponent from "./FriendsTaskComponent.jsx";
import { Provider } from "react-redux";
import store from "./store.jsx";
import TaskComponent from "./TaskComponent.jsx";
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

function Tikk() {
	const [currentDate, setCurrentDate] = useState(getDate());
	const friends = [
		"Ashish",
		"Rohit",
		"Siddharth",
		"IPS",
		"Ashish",
		"Rohit",
		"Siddharth",
	];

	return (
		<>
			<Provider store={store}>
				<div className="header">
					<div
						className="date-text"
						onClick={() => setCurrentDate(getDate())}
					>
						{currentDate}
					</div>
				</div>
				<div className="header-container">
					<div className="header2">
						<h4 className="groups">FAMILY</h4>
					</div>
					<button className="add-group-button">Add Group</button>
					<button className="add-friend-button">Add Friend</button>
				</div>
				<div className="task-list-container">
					<div className="task-list">
						<TaskComponent />
					</div>
					{friends.map((friend, index) => (
						<div
							className="task-list"
							key={index}
						>
							<FriendsTaskComponent friend={friend} />
						</div>
					))}
				</div>
			</Provider>
		</>
	);
}

export default Tikk;
