import "./App2.css";

function Apple() {
	return (
		<div className="container">
			{/* Top Section */}
			<div className="top-section">
				<div className="button-group">
					<button className="button">Add Group</button>
					<button className="button">Day/Night mode</button>
					<button className="button">Add Friend</button>
				</div>
			</div>

			{/* Middle Section */}
			<div className="middle-section">
				<div className="vertical-buttons">
					<button className="button">Button 1</button>
					<button className="button">Button 2</button>
					<button className="button">Button 3</button>
				</div>
				<div className="card-container">
					<div className="card">
						<h2>Card 1</h2>
					</div>
					<div className="card">
						<h2>Card 2</h2>
					</div>
					<div className="card">
						<h2>Card 3</h2>
					</div>
					<div className="card">
						<h2>Card 4</h2>
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

export default Apple;
