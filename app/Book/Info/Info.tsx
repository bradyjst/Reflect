import React from "react";
import "./Info.css";

interface InfoProps {
	closeBook: () => void;
}

export const Info: React.FC<InfoProps> = ({ closeBook }) => {
	return (
		<div className="info-container">
			<button
				onClick={() => {
					closeBook();
				}}
			>
				log out
			</button>
		</div>
	);
};
