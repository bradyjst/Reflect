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
	const handleLogout = () => {
		localStorage.removeItem("token");
		closeBook();
		setIsLoggedIn(false);
	};

	return (
		<div className="index-container">
			<Header title="Index" />

			<div className="index-page">
				<div className="button-container">
					<button
						className="journal-button"
						onClick={() => {
							setIsChosen(!isChosen);
							setPage(1);
						}}
					>
						Journal
						<img className="journal-img" src="/public/featherpen1.png" />
					</button>
					<button
						className="finance-button"
						onClick={() => {
							setIsChosen(!isChosen);
							setPage(2);
						}}
					>
						Finances
						<img className="finance-img" src="/public/moneybag.png" />
					</button>
					<button
						className="nutrition-button"
						onClick={() => {
							setIsChosen(!isChosen);
							setPage(2);
						}}
					>
						Nutrition
						<img className="finance-img" src="/public/nutrition.png" />
					</button>
					<button
						className="exercise-button"
						onClick={() => {
							setIsChosen(!isChosen);
							setPage(2);
						}}
					>
						Exercise
						<img className="exercise-img" src="/public/dumbbell.png" />
					</button>
				</div>
				<button className="logout-button" onClick={() => handleLogout()}>
					Log out
				</button>
			</div>
		</div>
	);
};
