import React, { useState, useEffect } from "react";
import "./Container.css";
import { Cover } from "../Cover/Cover";
import { BookIndex } from "../Pages/BookIndex/BookIndex";
import { Info } from "../Pages/Info/Info";
import { Journal } from "../Pages/Journal/Journal";
import { Tasks } from "../Pages/Journal/Tasks/Tasks";
import { Finance } from "../Pages/Finance/Finance";
import { FStats } from "../Pages/Finance/Stats/FStats";
import { Login } from "../Cover/Login/Login";
import { Signup } from "../Cover/Signup/Signup";
import { GroceryList } from "../Pages/Grocery List/GroceryList";
import { Exercise } from "../Pages/Exercise/Exercise";
import { GrocerySumm } from "../Pages/Grocery List/GrocerySumm/GrocerySumm";
import { ExerciseSumm } from "../Pages/Exercise/ExerciseSumm/ExerciseSumm";

interface ContainerProps {}

export const Container: React.FC<ContainerProps> = () => {
	const [login, setLogin] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [signup, setSignup] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const [isChosen, setIsChosen] = useState(false);
	const [visible, setVisible] = useState(false);
	const [zIndex, setZIndex] = useState("2");
	const [page, setPage] = useState(0);

	useEffect(() => {
		let timerId: ReturnType<typeof setTimeout>;
		if (!isOpen) {
			setZIndex("2");
		} else {
			timerId = setTimeout(() => {
				setZIndex("-1");
			}, 400);
		}
		return () => clearTimeout(timerId);
	}, [isOpen]);

	const openBook = () => {
		setIsOpen(!isOpen);
		setVisible(true);
	};

	const closeBook = () => {
		setIsOpen(false);
		setIsChosen(false);
	};

	const returnToIndex = () => {
		setIsChosen(false);
	};

	console.log("open", isOpen);
	console.log("chosen", isChosen);
	console.log("visible", visible);

	const bookStyle: React.CSSProperties = {
		position: "absolute",
		left: isOpen ? "100%" : "50%",
		transform: isOpen ? "translateX(-121%)" : "translateX(-75%)",
		transition: "left 1.5s ease, transform 1.5s ease",
	};

	const bookmarkAnimate: React.CSSProperties = {
		transform: login ? "translateY(-150%)" : "translateY(0%)",
		transition: "left 0.5s ease, transform 0.5s ease",
	};

	const modalAnimate: React.CSSProperties = {
		transform: login ? "translateY(0%)" : "translateY(-150%)",
		transition: "transform 1s cubic-bezier(0.55, 0.055, 0.675, 0.7)",
	};

	const PageStyle: React.CSSProperties = {
		transform: isOpen ? "rotateY(-180deg)" : "rotateY(0deg)",
		transition: "transform 1.5s",
		transformStyle: "preserve-3d",
		transformOrigin: "left",
		zIndex: zIndex,
	};

	const PageStyle2: React.CSSProperties = {
		position: "absolute",
		transform: isChosen ? "rotateY(-180deg)" : "rotateY(0deg)",
		transition: "transform 1.5s",
		transformStyle: "preserve-3d",
		transformOrigin: "left",
	};

	const PageStyle3: React.CSSProperties = {
		position: "absolute",
		zIndex: "-2",
	};

	return (
		<div className="container">
			<div style={modalAnimate} className="container-login-modal">
				{signup ? (
					<Signup {...{ setSignup, closeBook }} />
				) : (
					<Login
						{...{
							openBook,
							setLogin,
							login,
							setIsLoggedIn,
							setSignup,
							closeBook,
						}}
					/>
				)}
			</div>
			{login && <div className="modal-background"></div>}
			<div
				className="book"
				style={bookStyle}
				tabIndex={0}
				role="button"
				aria-pressed={isOpen}
			>
				<div className="page" style={PageStyle}>
					<div className="page-front-cover">
						<Cover {...{ openBook }} />
					</div>
					{!isLoggedIn && (
						<button
							onClick={() => {
								setLogin(!login);
							}}
							style={bookmarkAnimate}
							className="login-button"
						>
							Log In
						</button>
					)}

					<div className="page-back">
						<BookIndex
							{...{ closeBook, isChosen, setIsChosen, setPage, setIsLoggedIn }}
						/>
					</div>
				</div>

				<div className="page" style={PageStyle2}>
					{visible && (
						<>
							<div className="page-front">
								<Info {...{ closeBook }} />
							</div>
							{page === 1 && (
								<div className="page-back">
									<Journal {...{ returnToIndex }} />
								</div>
							)}
							{page === 2 && (
								<div className="page-back">
									<Finance {...{ returnToIndex }} />
								</div>
							)}
							{page === 3 && (
								<div className="page-back">
									<GroceryList {...{ returnToIndex }} />
								</div>
							)}
							{page === 4 && (
								<div className="page-back">
									<Exercise {...{ returnToIndex }} />
								</div>
							)}
						</>
					)}
				</div>
				{page === 0 && (
					<div className="page" style={PageStyle3}>
						<div className="page-back-cover"></div>
					</div>
				)}
				{page === 1 && (
					<div className="page" style={PageStyle3}>
						<Tasks />
						<div className="page-back-cover"></div>
					</div>
				)}
				{page === 2 && (
					<div className="page" style={PageStyle3}>
						<FStats />
						<div className="page-back-cover"></div>
					</div>
				)}
				{page === 3 && (
					<div className="page" style={PageStyle3}>
						<GrocerySumm />
						<div className="page-back-cover"></div>
					</div>
				)}
				{page === 4 && (
					<div className="page" style={PageStyle3}>
						<ExerciseSumm />
						<div className="page-back-cover"></div>
					</div>
				)}
			</div>
		</div>
	);
};
