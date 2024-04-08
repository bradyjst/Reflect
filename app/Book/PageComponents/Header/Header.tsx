import React from "react";
import "./Header.css";

interface HeaderProps {
	title?: string;
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
	return (
		<div className="header-container">
			<h3 className="header-title">{title}</h3>
		</div>
	);
};
