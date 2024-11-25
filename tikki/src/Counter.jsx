import React, { useEffect, useState } from "react";
import useCounter from "./useCounter";

const Counter = () => {
	const { count, increment, decrement } = useCounter();
	const [xyz, setXYZ] = useState(0);
	const url = "https://jsonplaceholder.typicode.com/todos/1";
	useEffect(() => {
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setXYZ(data.title);
				console.log(xyz);
			})
			.catch((error) => console.error("The problem is: ", error));
	}, [xyz]);

	return (
		<div>
			<p>Count: {count}</p>
			<button onClick={increment}>Increment</button>
			<button onClick={decrement}>Decrement</button>
			<button>Button value is: {xyz}</button>
		</div>
	);
};

export default Counter;
