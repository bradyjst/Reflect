import React from "react";
import "./Finance.css";
import { Header } from "../../PageComponents/Header/Header";
import { Budget } from "./Budget/Budget";
import { Footer } from "../../PageComponents/Footer/Footer";

interface FinanceProps {
	returnToIndex: () => void;
}

export const Finance: React.FC<FinanceProps> = ({ returnToIndex }) => {
	return (
		<div className="finance-container">
			<Header title="Finances" />
			<div className="finance-budget-container">
				<h2>Budget</h2>
				<Budget />
			</div>
			<button
				style={{ marginLeft: "2em" }}
				className="finance-backbutton"
				onClick={() => returnToIndex()}
			>
				return to index
			</button>
			<Footer />
		</div>
	);
};
