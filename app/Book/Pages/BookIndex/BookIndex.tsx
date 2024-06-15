import React from "react";
import "./BookIndex.css";
import { Header } from "../../PageComponents/Header/Header";

interface BookIndexProps {
	isChosen: boolean;
	closeBook: () => void;
	setIsChosen: (arg: boolean) => void;
	setPage: (arg: number) => void;
	setIsLoggedIn: (loggedInState: boolean) => void;
}

export const BookIndex: React.FC<BookIndexProps> = ({
	setIsChosen,
	isChosen,
	closeBook,
	setPage,
	setIsLoggedIn,
}) => {
	return (
		<div className="index-container">
			<Header title="Index" />

			<div className="index-page">
				<button
					className="journal-button"
					onClick={() => {
						setIsChosen(!isChosen);
						setPage(1);
					}}
				>
					Journal
				</button>
				<button
					className="journal-button"
					onClick={() => {
						setIsChosen(!isChosen);
						setPage(2);
					}}
				>
					Finances
				</button>
				<button
					className="journal-button"
					onClick={() => {
						closeBook();
						setIsLoggedIn(false);
					}}
				>
					Log out
				</button>
			</div>
		</div>
	);
};
