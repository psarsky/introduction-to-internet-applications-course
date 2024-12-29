import { useState } from "react";

const Password = () => {
	const [password, setPassword] = useState("");
	const [repeated, setRepeated] = useState("");

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
			{!password && !repeated ? (
				<div className="errMsg">Please input your password</div>
			) : password != repeated ? (
				<div className="errMsg">Passwords do not match</div>
			) : (
				<div />
			)}
		</>
	);
};

export default Password;
