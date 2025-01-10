import "./App.css";
import { useState } from "react";
import Balloon from "./components/Balloon";

function App() {
	const [balloons, setBalloons] = useState<number[][]>([]);
    let scale: number
    let x: number;
	let y: number;

	return (
		<>
			<div className="inputContainer">
				<button
					className="addBalloon"
					onClick={() => {
                        scale = Math.random() * 1.5;
                        x = (Math.random() * 80) + 10;
						y = (Math.random() * 80) + 10;
						setBalloons((prevState: number[][]) => [...prevState, [scale, x, y]]);
						console.log(balloons);
					}}
				>
					Add balloon
				</button>
			</div>
			{balloons.map(([scale, x, y]) => (
				<Balloon scale={scale} x={x} y={y}/>
			))}
		</>
	);
}

export default App;
