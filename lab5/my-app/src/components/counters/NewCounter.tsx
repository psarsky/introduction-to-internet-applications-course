import { useState } from "react";
import Button from "./Button";

const NewCounter = () => {
	const [count, setCount] = useState<number>(0);

	return (
		<>
			<h1>Counter</h1>
			<p>{count}</p>
			<div className="buttons">
				<Button onClick={() => {
					setCount((prevCount: number) => prevCount - 1);
				}} text="Decrement"/>
				<Button onClick={() => {
                    setCount((prevCount: number) => prevCount + 1);
                }} text="Increment" />
			</div>
		</>
	);
};

export default NewCounter;
