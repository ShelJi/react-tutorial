import React, { useState, useEffect } from "react";

function  Counter() {
	const [count, setCount] = useState(0); // useState hook

	// useEffect hook
	useEffect(() => {
		console.log(`Count changed to: ${count}`);
	}, [count]); // This runs every time 'count' changes and once when page reloads

	return (
		<div className="p-4 text-center">
			<h2 className="text-xl font-bold">Count: {count}</h2>
			<button
				className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
				onClick={() => setCount(count + 1)}
			>
				Increase
			</button>
		</div>
	);
}

export default Counter;
