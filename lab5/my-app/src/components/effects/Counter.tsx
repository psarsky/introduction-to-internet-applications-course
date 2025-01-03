import { useState, useEffect } from "react";

const Counter = () => {
	const [count, setCount] = useState<number>(0);

	useEffect(() => {
		console.log("Hello World");
	}, []);

	useEffect(() => {
		console.log("Counter changed to " + count);
	}, [count]);

	return (
		<>
			<h1>Counter</h1>
			<p>{count}</p>
			<button onClick={() => setCount((prevCount: number) => prevCount - 1)}>Decrement</button>
			<button onClick={() => setCount((prevCount: number) => prevCount + 1)}>Increment</button>
		</>
	);
};

export default Counter;
