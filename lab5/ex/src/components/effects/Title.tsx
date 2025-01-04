import { useState, useEffect } from "react";

const Title = () => {
	const [title, setTitle] = useState<string>("Initial title");

	useEffect(() => {
		document.title = title;
	}, [title]);

	return (
		<>
			<input
				type="text"
				value={title}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					setTitle(e.target.value);
				}}
			/>
		</>
	);
};

export default Title;
