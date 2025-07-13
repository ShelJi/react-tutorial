import { useState } from "react";

function useCounter(InitialValue = 0, stepDefault = 1) {
	const [count, setCount] = useState(InitialValue);

	const increment = () => {
		setCount(count + stepDefault);
	};
	const decrement = () => {
		setCount(count - stepDefault);
	};
	const reset = () => {
		setCount(InitialValue);
	};

	return { count, setCount, increment, decrement, reset };
}

export default useCounter;
