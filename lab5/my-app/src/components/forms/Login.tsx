import { useState } from "react";

const Password = () => {
	const [username, setUsername] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [repeated, setRepeated] = useState<string>("");

	return (
		<>
			Username:
			<br />
			<input
				id="usr"
				type="text"
				value={username}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					setUsername(e.target.value);
				}}
			/>
			<br />
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
			<br />
			<button
				disabled={!username || !password || !repeated}
				onClick={() => {
					alert(password == repeated ? "Login successful!" : "Passwords do not match!");
				}}
			>
				Log in
			</button>
		</>
	);
};

export default Password;
