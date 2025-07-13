import "./App.css";
import ExCustomHooks from "./components/ExCustomHooks";
import SlowFactorialCalculator from "./components/ExUseMemo";
import Counter from "./components/ExUseStateUseEffect";
import LearnProps from "./components/LearnProps";
import Navbar from "./components/Navbar";

function App() {
	return (
		<>
			<Navbar />
			{/* <LearnProps name="Shelj" age={22} /> */}
			{/* <Counter /> */}
			{/* <SlowFactorialCalculator /> */}
			<ExCustomHooks />
		</>
	);
}

export default App;
