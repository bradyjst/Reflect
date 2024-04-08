import React from "react";
import "./BookIndex.css";
import { Header } from "../../PageComponents/Header/Header";

interface BookIndexProps {
	closeBook: () => void;
	setIsChosen: (arg: boolean) => void;
	isChosen: boolean;
}

export const BookIndex: React.FC<BookIndexProps> = ({
	setIsChosen,
	isChosen,
	closeBook,
}) => {
	return (
		<div className="index-container">
			<Header title="Index" />

			<div className="index-page">
				<button
					className="journal-button"
					onClick={() => {
						setIsChosen(!isChosen);
					}}
				>
					Journal
				</button>
				<button
					className="journal-button"
					onClick={() => {
						closeBook();
					}}
				>
					Log out
				</button>
			</div>
		</div>
	);
};
