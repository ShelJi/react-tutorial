import "./App.css";
import LearnProps from "./components/LearnProps";
import Navbar from "./components/Navbar";

function App() {
	return (
		<>
			<Navbar />
			<LearnProps name="Shelj" age={22} />
		</>
	);
}

export default App;
