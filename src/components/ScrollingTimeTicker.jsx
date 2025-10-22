import { useState, useEffect } from "react";
import "./Time.css";

function ScrollingTimeTicker() {
	const [time, setTime] = useState("");
	const [date, setDate] = useState("");

	useEffect(() => {
		const updateTicker = () => {
			const now = new Date();
			setDate(now.toLocaleDateString());
			setTime(now.toLocaleTimeString());
		};
		updateTicker();
		const interval = setInterval(updateTicker, 1000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="App">
			<div className="ticker">
				<span style={{ fontFamily: "orbitron" }}>
					📅 {date} | 🕒 {time} | 📍 Lagos, Nigeria
				</span>
			</div>
		</div>
	);
}

export default ScrollingTimeTicker;
