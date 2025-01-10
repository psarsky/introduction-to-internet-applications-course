import "./Counter.css";
import { useState } from "react";

const Counter = () => {
	if (!localStorage.count) {
		localStorage.count = 0;
	}

	const [count, setCount] = useState<number>(Number(localStorage.count));

	return (
		<div className="counter">
			<h1>Counter</h1>
			<p>{count}</p>
			<div className="buttons">
				<button
					onClick={() => {
						setCount((prevCount: number) => prevCount - 1);
						localStorage.count = Number(localStorage.count) - 1;
					}}
				>
					Decrement
				</button>
				<button
					onClick={() => {
						setCount((prevCount: number) => prevCount + 1);
						localStorage.count = Number(localStorage.count) + 1;
					}}
				>
					Increment
				</button>
			</div>
		</div>
	);
};

export default Counter;
