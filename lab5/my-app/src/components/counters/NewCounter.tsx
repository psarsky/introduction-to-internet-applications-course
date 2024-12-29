import { useState } from "react";
import Button from "./Button";

const NewCounter = () => {
	const [count, setCount] = useState(0);

	return (
		<>
			<h1>Counter</h1>
			<p>{count}</p>
			<div className="buttons">
				<Button onClick={() => {
					setCount((count: number) => count - 1);
				}} text="Decrement"/>
				<Button onClick={() => {
                    setCount((count: number) => count + 1);
                }} text="Increment" />
			</div>
		</>
	);
};

export default NewCounter;
