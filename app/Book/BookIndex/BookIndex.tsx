import React from "react";
import "./BookIndex.css";

interface BookIndexProps {
	setIsChosen: (arg: boolean) => void;
	isChosen: boolean;
}

export const BookIndex: React.FC<BookIndexProps> = ({
	setIsChosen,
	isChosen,
}) => {
	return (
		<div className="index-container">
			<button
				onClick={() => {
					setIsChosen(!isChosen);
				}}
			>
				go to page
			</button>
		</div>
	);
};
