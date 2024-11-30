import { useState } from "react";
import "./Code_notification.css";
import { BsThreeDotsVertical } from "react-icons/bs";

const Code_notification = () => {
	const [notificationCount, setNotificationCount] = useState(0);

	const incrementNotification = () => {
		setNotificationCount(notificationCount + 1);
	};

	return (
		<li
			className="list-item"
			onClick={incrementNotification}
		>
			<span>Click Me</span>
			<span>
				<BsThreeDotsVertical className="settings-icon" />
			</span>
			<span className="notification-dot">
				{notificationCount > 0 && notificationCount}
			</span>
		</li>
	);
};

export default Code_notification;
