import React, { useState, useMemo } from "react";

function SlowFactorialCalculator() {
	const [number, setNumber] = useState(1);
	const [otherState, setOtherState] = useState(false);

	// Expensive calculation
	const factorial = useMemo(() => {
		console.log("Calculating factorial...");
		let result = 1;
		for (let i = 1; i <= number; i++) {
			result *= i;
		}
		return result;
	}, [number]); // only recompute when 'number' changes

	return (
		<div className="p-4 text-center">
			<h2 className="text-lg font-semibold">
				Factorial of {number} is {factorial}
			</h2>

			<input
				type="number"
				className="border p-2 my-2"
				value={number}
				onChange={(e) => setNumber(parseInt(e.target.value))}
			/>

			<br />

			<button
				onClick={() => setOtherState(!otherState)}
				className="bg-gray-500 text-white px-4 py-2 mt-2"
			>
				Toggle (Re-render)
			</button>
		</div>
	);
}

export default SlowFactorialCalculator;
