import React, { useState } from "react";
import "./Budget.css";

interface BudgetProps {}

interface IncomeState {
	income1: number;
	income2: number;
	income3: number;
}

export const Budget: React.FC<BudgetProps> = () => {
	const [income, setIncome] = useState<IncomeState>({
		income1: 0,
		income2: 0,
		income3: 0,
	});
	// const [expenses, setExpenses] = useState({
	//     house: 0
	// })
	return (
		<div className="budget-container">
			<form className="budget-income-form">
				<h5>Monthly Income</h5>
				Income stream 1
				<input
					className="budget-input"
					type="number"
					placeholder="Income Stream #1"
					value={income.income1}
					onChange={(e) =>
						setIncome((prevIncome) => ({
							...prevIncome,
							income1: Number(e.target.value),
						}))
					}
				/>
				Income stream 2
				<input
					className="budget-input"
					type="number"
					placeholder="Income Stream #2"
					value={income.income2}
					onChange={(e) =>
						setIncome((prevIncome) => ({
							...prevIncome,
							income2: Number(e.target.value),
						}))
					}
				/>
				Income stream 3
				<input
					className="budget-input"
					type="number"
					placeholder="Income Stream #3"
					value={income.income3}
					onChange={(e) =>
						setIncome((prevIncome) => ({
							...prevIncome,
							income3: Number(e.target.value),
						}))
					}
				/>
			</form>
			total monthly income = {income.income1 + income.income2 + income.income3}
		</div>
	);
};
