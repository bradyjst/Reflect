import React from "react";
import "./Cover.css";

interface CoverProps {}

export const Cover: React.FC<CoverProps> = () => {
	return (
		<div className="cover-container">
			<div className="cover">
				<div className="cover-top">
					<h2 className="imprinted-text-h2">Reflect</h2>
				</div>
				<div className="cover-middle">
					<button>Open</button>
				</div>
				<div className="cover-bottom">
					<input className="cover-input" type="text" placeholder="Author" />
					<input className="cover-input" type="password" placeholder="Key" />
				</div>
			</div>
		</div>
	);
};
