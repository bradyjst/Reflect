import React, { useState } from "react";
import "./Container.css";
import { Cover } from "../Cover/Cover";
import { BookIndex } from "../BookIndex/BookIndex";
import { Info } from "../Info/Info";
import { Journal } from "../Journal/Journal";

interface ContainerProps {}

export const Container: React.FC<ContainerProps> = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isChosen, setIsChosen] = useState(false);
	const [visible, setVisible] = useState(false);

	const openBook = () => {
		setIsOpen(!isOpen);
		setVisible(true);
	};

	const closeBook = () => {
		setIsOpen(false);
		setIsChosen(false);
		setTimeout(() => {
			setVisible(false);
		}, 400);
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
		transition: "left 1s ease, transform 1s ease",
	};

	const coverPageStyle: React.CSSProperties = {
		transform: isOpen ? "rotateY(-180deg)" : "rotateY(0deg)",
		transition: "transform 1s",
		transformStyle: "preserve-3d",
		transformOrigin: "left",
	};

	const contentSelected: React.CSSProperties = {
		transform: isChosen ? "rotateY(-180deg)" : "rotateY(0deg)",
		zIndex: isChosen ? "2" : "-1",
		transition: "transform 1s",
		transformStyle: "preserve-3d",
		transformOrigin: "left",
	};

	const contentSelectedFully: React.CSSProperties = {
		transform: isChosen ? "rotateY(0deg)" : "rotateY(-180deg)",
		zIndex: isChosen ? "-1" : "2",
		transition: "transform 1s",
		transformStyle: "preserve-3d",
		transformOrigin: "right",
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
				<div className="coverpage" style={coverPageStyle}>
					<div className="page-front">
						<Cover {...{ openBook }} />
					</div>
					<div className="page-back">
						<BookIndex {...{ isChosen, setIsChosen }} />
					</div>
				</div>

				{visible && (
					<div className="page-open" style={contentSelected}>
						<div className="page-front">
							<Info {...{ closeBook }} />
						</div>
						{isChosen && (
							<div className="page-back" style={contentSelectedFully}>
								<Journal {...{ returnToIndex }} />
							</div>
						)}
					</div>
				)}
				{visible && isChosen && (
					<div className="page-open">
						<div className="page-back"></div>
						<Info {...{ closeBook }} />
					</div>
				)}
			</div>
		</div>
	);
};
