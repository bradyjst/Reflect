import React from "react";
import "./Journal.css";

interface JournalProps {
	returnToIndex: () => void;
}

export const Journal: React.FC<JournalProps> = ({ returnToIndex }) => {
	return (
		<div className="journal-container">
			<button style={{ marginLeft: "50px" }} onClick={() => returnToIndex()}>
				go back
			</button>
		</div>
	);
};
