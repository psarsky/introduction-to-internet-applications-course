import "./ChristmasTree.css";
import { useState } from "react";

const ChristmasTree = (props: { height: number; color: string }) => {
	const [count, setCount] = useState<number>(props.height);

	const increaseCount = () => {
		setCount((prevCount: number) => prevCount + 1);
	};
	const decreaseCount = () => {
		if (count > 0) {
			setCount((prevCount: number) => prevCount - 1);
		}
	};

	const levels: number[] = [...Array(count).keys()];
	levels.reverse();

	return (
		<div className="christmasTree">
			<div
				style={{
					backgroundColor: props.color,
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					width: "100%",
					gap: "10px",
					height: "25px",
				}}
			>
				<div className="button" onClick={increaseCount}>
					+
				</div>
				<div className="button" onClick={decreaseCount}>
					-
				</div>
			</div>
			{levels.map((level: number) => (
				<div
					style={{
						width: 0,
						height: 0,
						borderLeft: `${100 * ((count - level) / count)}px solid transparent`,
						borderRight: `${100 * ((count - level) / count)}px solid transparent`,
						borderBottom: `${50 * ((count - level) / count)}px solid green`,
					}}
				></div>
			))}
		</div>
	);
};

export default ChristmasTree;
