import "./App.css";
import ExCustomHooks from "./components/ExCustomHooks";
import SlowFactorialCalculator from "./components/ExUseMemo";
import Counter from "./components/ExUseStateUseEffect";
import LearnProps from "./components/LearnProps";
import Navbar from "./components/Navbar";
import GsapTo from "./gsap/GsapTo";
import TimelineGSAP from "./gsap/TimelineGSAP";
import AppMojito from "./mojito/AppMojito"

function App() {
	return (
		<>
			{/* <Navbar /> */}
			{/* <LearnProps name="Shelj" age={22} /> */}
			{/* <Counter /> */}
			{/* <SlowFactorialCalculator /> */}
			{/* <ExCustomHooks /> */}

			{/* <GsapTo /> */}
			{/* <TimelineGSAP /> */}

			<AppMojito />
		</>
	);
}

export default App;
