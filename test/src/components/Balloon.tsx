import "./Balloon.css";
import { useState } from "react";

const Balloon = (props: { scale: number; x: number; y: number }) => {
	const [scale, setScale] = useState<number>(props.scale);
	const [y, setY] = useState<number>(props.y);

	const changeScale = () => {
		setScale((prevScale: number) =>
			scale >= 0.65 ? prevScale - 0.1 : 0.5
		);
		if (scale <= 0.65) {
			setY(-100);
		}
	};

	return (
		<div
			className="balloon"
			style={{
				transform: `scale(${scale})`,
				left: `${props.x}%`,
				top: `${y}%`,
			}}
			onClick={changeScale}
		></div>
	);
};

export default Balloon;
