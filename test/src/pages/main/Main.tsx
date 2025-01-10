import "./Main.css";
import { useState } from "react";
import Balloon from "../../components/Balloon";

const Main = () => {
	const [balloons, setBalloons] = useState<number[][]>([]);
	const [balloonAmount, setBalloonAmount] = useState<string>("5");

	let scale: number;
	let x: number;
	let y: number;

	const addBalloon = () => {
		const balloonsTemp: number[][] = [];
		for (let i: number = 0; i < parseInt(balloonAmount); i++) {
			scale = Math.random() + 0.5;
			x = Math.random() * 75 + 10;
			y = Math.random() * 65 + 10;
			balloonsTemp.push([scale, x, y]);
		}
		setBalloons((prevState: number[][]) => [...prevState, ...balloonsTemp]);
	};

	return (
		<>
			<div className="inputContainer">
				<input
					id="balloonAmount"
					type="text"
					value={balloonAmount}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
						setBalloonAmount(e.target.value);
					}}
				/>
				<button id="addBalloons" onClick={addBalloon}>
					<b>ADD</b>
				</button>
			</div>
			{balloons.map(([scale, x, y]: number[]) => (
				<Balloon scale={scale} x={x} y={y} />
			))}
		</>
	);
};

export default Main;
