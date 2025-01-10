import "./App.css";
import { useState, useEffect } from "react";
import ChristmasTree from "./components/ChristmasTree";

function App() {
	const [trees, setTrees] = useState<number[]>([]);
	const [treeHeight, setTreeHeight] = useState<string>("5");
	const [buttonBgColor, setColor] = useState<string>("black");

	useEffect(() => {
		fetch("http://localhost:3000")
			.then((res: Response) => res.json())
			.then((data: { color: string }) => {
				console.log(data);
				setColor(data.color);
			})
			.catch((err) => {
				console.log(err.message);
			});
	}, []);

	return (
		<div id="container">
			<div className="inputContainer">
				<input
					type="text"
					value={treeHeight}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
						setTreeHeight(e.target.value);
					}}
				/>
				<button
					className="addTree"
					onClick={() => {
						setTrees((prevState: number[]) => [...prevState, parseInt(treeHeight)]);
					}}
				>
					Add christmas tree
				</button>
			</div>
			<div className="treeContainer">
				{trees.map((h: number) => (
					<ChristmasTree height={h} color={buttonBgColor} />
				))}
			</div>
		</div>
	);
}

export default App;
