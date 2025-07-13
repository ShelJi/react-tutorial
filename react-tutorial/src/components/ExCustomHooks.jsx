import useCounter from "../hooks/useCounter";

const ExCustomHooks = () => {
	const stepVal = 2;
	const { count, increment, decrement, reset } = useCounter(4, stepVal);

	return (
		<>
			<div className="flex flex-col justify-center items-center h-screen gap-1">
				<h1>Counter</h1>
				<h3>Count: {count}</h3>
				<h3>Steps Count: {stepVal}</h3>
				<br />
				<button className="btn btn-primary" onClick={increment}>
					increment
				</button>
				<br />
				<button className="btn btn-primary" onClick={decrement}>
					decrement
				</button>
				<br />
				<button className="btn btn-primary" onClick={reset}>
					reset
				</button>
				<br />
			</div>
		</>
	);
};

export default ExCustomHooks;
