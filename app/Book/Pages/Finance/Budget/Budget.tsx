import React from "react";
import { Income } from "./Income/Income";
import "./Budget.css";
import { Expenses } from "./Expenses/Expenses";

interface BudgetProps {}

export const Budget: React.FC<BudgetProps> = () => {
	// const handleChange = (key: keyof IncomeState, value: string) => {
	// 	setIncome((prevIncome) => ({
	// 		...prevIncome,
	// 		[key]: value, // Always store as string
	// 	}));
	// };

	return (
		<div className="budget-container">
			<Income />
			<Expenses />
		</div>
	);
};
