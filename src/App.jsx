import { useState } from "react";
import reactLogo from "./assets/images/react.svg";
import viteLogo from "/vite.svg";
import "./assets/css/App.css";
import Button from "./components/Button";
import CheckRadio from "./components/CheckRadio";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div>
				<a
					href="https://vite.dev"
					target="_blank"
				>
					<img
						src={viteLogo}
						className="logo"
						alt="Vite logo"
					/>
				</a>
				<a
					href="https://react.dev"
					target="_blank"
				>
					<img
						src={reactLogo}
						className="logo react"
						alt="React logo"
					/>
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<Button
					onClick={() => setCount((count) => count + 1)}
					name={`count is ${count}`}
				/>
				<CheckRadio
					id="sampleId01"
					type="checkbox"
					label="체크"
				/>
			</div>
			<p className="read-the-docs">Click on the Vite and React logos to learn more</p>
		</>
	);
}

export default App;
