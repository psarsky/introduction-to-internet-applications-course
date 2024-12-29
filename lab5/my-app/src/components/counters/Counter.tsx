import { useState } from "react";

const Counter = () => {
	const [count, setCount] = useState(0);

	return (
		<>
			<h1>Counter</h1>
			<p>{count}</p>
			<button onClick={() => setCount((count: number) => count - 1)}>Decrement</button>
			<button onClick={() => setCount((count: number) => count + 1)}>Increment</button>
		</>
	);
};

export default Counter;
