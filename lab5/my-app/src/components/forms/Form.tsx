import { useState } from "react";

const Form = () => {
	const [text, setText] = useState("");

	return (
		<>
			<input
				id="1"
				type="text"
				value={text}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					setText(e.target.value);
				}}
			/>
			<div>
				<h1>{text}</h1>
			</div>
		</>
	);
};

export default Form;
