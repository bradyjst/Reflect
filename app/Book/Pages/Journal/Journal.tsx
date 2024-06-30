import React from "react";
import "./Journal.css";
import { Header } from "~/Book/PageComponents/Header/Header";

interface JournalProps {
	returnToIndex: () => void;
}

export const Journal: React.FC<JournalProps> = ({ returnToIndex }) => {
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
			<button className="gotoindex-button" onClick={() => returnToIndex()}>
				Go to Index
			</button>
		</div>
	);
};
