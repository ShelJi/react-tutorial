import { useState, useEffect } from "react";

const Stopwatch = () => {
	const [currentCount, setCount] = useState(0);
	const [isRunning, setIsRunning] = useState(false);

	const startTimer = () => {
		if (!isRunning) {
			setIsRunning(true);
		}
	};

	const pauseTimer = () => {
		setIsRunning(false);
	};

	const stopTimer = () => {
		setIsRunning(false);
		setCount(0);
	};

	useEffect(() => {
		if (isRunning) {
			const intervalRef = setInterval(() => {
				setCount((prev) => prev + 1);
			}, 100);
			return () => clearInterval(intervalRef);
		}
	}, [isRunning]);

	return (
		<>
			<h1>Time: {currentCount}</h1>
			<button onClick={startTimer}>Start</button>
			<button onClick={pauseTimer}>Pause</button>
			<button onClick={stopTimer}>Reset</button>
		</>
	);
};

export default Stopwatch;
