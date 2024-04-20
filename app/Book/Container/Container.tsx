import React, { useState, useEffect } from "react";
import "./Container.css";
import { Cover } from "../Cover/Cover";
import { BookIndex } from "../Pages/BookIndex/BookIndex";
import { Info } from "../Pages/Info/Info";
import { Journal } from "../Pages/Journal/Journal";
import { JStats } from "../Pages/Journal/Stats/JStats";
import { Finance } from "../Pages/Finance/Finance";

interface ContainerProps {}

export const Container: React.FC<ContainerProps> = () => {
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

					<div className="page-back">
						<BookIndex {...{ closeBook, isChosen, setIsChosen, setPage }} />
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
						</>
					)}
				</div>
				{visible && (
					<div className="page" style={PageStyle3}>
						<JStats />
						<div className="page-back-cover"></div>
					</div>
				)}
			</div>
		</div>
	);
};
