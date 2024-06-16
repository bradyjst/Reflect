import React from "react";

import "./Cover.css";

interface CoverProps {
	openBook: () => void;
}

export const Cover: React.FC<CoverProps> = () => {
	return (
		<>
			<div className="cover">
				<div className="cover-top">
					<h2 className="imprinted-text-h2">Reflect</h2>
				</div>
			</div>
		</>
	);
};
