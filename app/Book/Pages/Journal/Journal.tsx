import React, { useState } from "react";
import "./Journal.css";
import { Header } from "~/Book/PageComponents/Header/Header";
import { LineChart } from "~/Book/PageComponents/LineChart/LineChart";

interface JournalProps {
	returnToIndex: () => void;
}

export const Journal: React.FC<JournalProps> = ({ returnToIndex }) => {
	const [moodData, setMoodData] = useState({
		labels: [
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday",
			"Sunday",
		],
		datasets: [
			{
				label: "Weekly",
				data: [4, 5, 3, 5, 1, 3, 4],
				notes: ["Had a good day", "Got a raise", "Cat pissed in my cereal"],
				borderColor: "rgba(222, 0, 0, 1)",
				backgroundColor: "rgba(222, 222, 222, 0.2)",
			},
		],
	});

	return (
		<div className="journal-container">
			<Header title="Journal" />
			<div className="journal-content-container">
				<div className="mood-header-container">
					<h4 className="mood-header">Today's Mood</h4>
					<div className="mood-container">
						<button className="mood-button">
							<img
								style={{ transform: "scale(1.25)" }}
								className="mood-img"
								src="/public/emotions/veryhappy.png"
							/>
						</button>

						<button className="mood-button">
							<img
								style={{ transform: "scale(1.10)" }}
								className="mood-img"
								src="/public/emotions/happy.png"
							/>
						</button>

						<button className="mood-button">
							<img
								style={{ transform: "scale(1.25)" }}
								className="mood-img"
								src="/public/emotions/neutralc.png"
							/>
						</button>

						<button className="mood-button">
							<img
								style={{ transform: "scale(1.18)" }}
								className="mood-img"
								src="/public/emotions/sad.png"
							/>
						</button>

						<button className="mood-button">
							<img
								style={{ transform: "scale(1.3)" }}
								className="mood-img"
								src="/public/emotions/verysad.png"
							/>
						</button>
					</div>
				</div>
			</div>
			<div className="journal-mood-chart">
				<LineChart moodData={moodData} />
			</div>

			<button className="gotoindex-button" onClick={() => returnToIndex()}>
				Go to Index
			</button>
		</div>
	);
};
