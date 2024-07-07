import React from "react";
import "./GrocerySumm.css";
import { Header } from "~/Book/PageComponents/Header/Header";

interface GrocerySummProps {}

export const GrocerySumm: React.FC<GrocerySummProps> = ({}) => {
	return (
		<div className="grocerysumm-container">
			<Header title="Grocery List" />
		</div>
	);
};
