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
			<h2 style={{ marginLeft: "2em" }}>Budget</h2>
			<div className="finance-budget-container">
				<Budget />
			</div>
			<button className="finance-backbutton" onClick={() => returnToIndex()}>
				Return to Index
			</button>
			<Footer />
		</div>
	);
};
