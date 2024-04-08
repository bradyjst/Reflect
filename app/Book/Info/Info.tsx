import React from "react";
import "./Info.css";
import { Header } from "../PageComponents/Header/Header";

interface InfoProps {}

export const Info: React.FC<InfoProps> = () => {
	return (
		<div className="info-container">
			<Header title="Info" />
			<div className="info-page">hi</div>
		</div>
	);
};
