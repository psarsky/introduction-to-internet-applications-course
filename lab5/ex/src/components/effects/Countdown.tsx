import { useState, useEffect } from "react";

const Countdown = () => {
	const [timer, setTimer] = useState<number>(15);
	const [isActive, setActive] = useState<boolean>(false);

	useEffect(() => {
		if (timer <= 0) {
			setTimer(0);
			setActive(false);
		}
	}, [timer]);

	useEffect(() => {
		let intervalID: number;
		if (isActive) {
			intervalID = setInterval(() => {
				setTimer((prevTimer: number) => prevTimer - 0.1);
			}, 100);
		}
		return () => {
			if (intervalID) clearInterval(intervalID);
		};
	}, [isActive]);

	return (
		<div className="countdownContainer">
			<div className="countdown">
				<div>Countdown:</div>
				<div>{timer.toFixed(1)}s</div>
			</div>
			<button
				disabled={timer <= 0}
				onClick={() => {
					setActive(!isActive);
				}}
			>
				{timer <= 0 ? "Countdown finished" : isActive ? "STOP" : "START"}
			</button>
		</div>
	);
};

export default Countdown;
