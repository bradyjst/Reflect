import React from "react";
import "./ExerciseSumm.css";
import { Header } from "~/Book/PageComponents/Header/Header";

interface ExerciseSummProps {}

export const ExerciseSumm: React.FC<ExerciseSummProps> = ({}) => {
	return (
		<div className="exercisesumm-container">
			<Header title="Exercise Summary" />
		</div>
	);
};
