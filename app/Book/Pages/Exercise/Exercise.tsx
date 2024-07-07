import React from "react";
import "./Exercise.css";
import { Header } from "~/Book/PageComponents/Header/Header";

interface ExerciseProps {
	returnToIndex: () => void;
}

export const Exercise: React.FC<ExerciseProps> = ({ returnToIndex }) => {
	return (
		<div className="exercise-container">
			<Header title="Exercise" />
			<div className="exercise-content"></div>
			<button className="gotoindex-button" onClick={() => returnToIndex()}>
				Go to Index
			</button>
		</div>
	);
};
