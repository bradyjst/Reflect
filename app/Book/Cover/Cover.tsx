import React from "react";
import "./Cover.css";

interface CoverProps {
	openBook: () => void;
}

export const Cover: React.FC<CoverProps> = ({ openBook }) => {
	return (
		<div className="cover">
			<div className="image-container">
				<div className="cover-top">
					<h2 className="imprinted-text-h2">Reflect</h2>
				</div>
				<div className="cover-middle">
					<button onClick={() => openBook()}>Open</button>
				</div>
				<div className="cover-bottom">
					<input className="cover-input" type="text" placeholder="Author" />
					<input className="cover-input" type="password" placeholder="Key" />
				</div>
			</div>
		</div>
	);
};
