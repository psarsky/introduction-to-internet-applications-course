import { useState } from "react";

const Password = () => {
	const [password, setPassword] = useState<string>("");
	const [repeated, setRepeated] = useState<string>("");

	return (
		<>
			Password:
			<br />
			<input
				id="pass"
				type="text"
				value={password}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					setPassword(e.target.value);
				}}
			/>
			<br />
			Repeat password:
			<br />
			<input
				id="rep"
				type="text"
				value={repeated}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					setRepeated(e.target.value);
				}}
			/>
			<br />
			<div className="errMsg">
				{!password && !repeated
					? "Please input your password"
					: password != repeated
					? "Passwords do not match"
					: ""}
			</div>
		</>
	);
};

export default Password;
