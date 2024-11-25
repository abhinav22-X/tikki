import React, { useEffect } from "react";
import UseFetch from "./UseFetch";

const FetchData = () => {
	const [data] = UseFetch("https://api.npoint.io/9045c260b1565daa9e15");
	useEffect(() => console.log(data), [data]);
	return (
		<>
			<ul className="list_data_main">
				{data &&
					data.map((e) => (
						<>
							<li className="list_data">
								<h3 key={e.name}>{e.name}</h3>
								<p key={e.importance}>
									<strong>Importance: </strong>
									{e.importance}
								</p>
								<p key={e.benefits6}>
									<strong>Benefits: </strong>
									{e.benefits6}
								</p>
								<p key={e.best_time_to_intake}>
									<strong>Time to eat: </strong>
									{e.best_time_to_intake}
								</p>
							</li>
						</>
					))}
			</ul>
		</>
	);
};
export default FetchData;
