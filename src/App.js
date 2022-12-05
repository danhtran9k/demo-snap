import "./App.css";
import { SynapEditor } from "./SynapEditor";

function App() {
	return (
		<div className="App">
			<SynapEditor editorId="1"/>
			<br />
			<SynapEditor editorId="2"/>
		</div>
	);
}

export default App;
