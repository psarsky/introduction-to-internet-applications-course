import { useState } from "react";

const Balloon = (props: { scale: number; x: number; y: number }) => {
	const [size, setSize] = useState<number>(props.scale);

	const changeScale = () => {
		if (size >= 0.4) {
			setSize((prevSize: number) => prevSize - 0.2);
		}
	};

	return (
		<div
			style={{
				backgroundColor: "red",
				transform: `scale(${size})`,
				width: "100px",
				height: "100px",
				border: "1px solid black",
				position: "absolute",
                left: `${props.x}%`,
                top: `${props.y}%`,
                cursor: "pointer"
			}}
			onClick={changeScale}
		></div>
	);
};

export default Balloon;
