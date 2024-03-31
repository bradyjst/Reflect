import React from "react";
import "./Container.css";
import { Cover } from "../Cover/Cover";

interface ContainerProps {}

export const Container: React.FC<ContainerProps> = () => {
	return (
		<div className="container">
			<Cover />
		</div>
	);
};
