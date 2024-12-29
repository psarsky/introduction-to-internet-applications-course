import { useState } from "react";

const Ternary = () => {
	const [a, setA] = useState(true);
	const [b, setB] = useState(false);

	return (
		<>
			<button onClick={() => setA(!a)}>A = ~A</button>
			<button onClick={() => setB(!b)}>B = ~B</button>
			<div>
				Expression <b>A</b> is {a ? "true" : "false"}.
			</div>
			<div>
				Expression <b>B</b> is {b ? "true" : "false"}.
			</div>
		</>
	);
};

export default Ternary;
