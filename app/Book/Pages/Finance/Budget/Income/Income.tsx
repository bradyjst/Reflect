import React, { useState } from "react";
import "./Income.css";

interface IncomeProps {}

interface IncomeState {
	income1: string;
	income2: string;
	income3: string;
}

export const Income: React.FC<IncomeProps> = () => {
	const [income, setIncome] = useState<IncomeState>({
		income1: "",
		income2: "",
		income3: "",
	});
	const num1 = Number(income.income1);
	const num2 = Number(income.income2);
	const num3 = Number(income.income3);

	const handleChange = (key: keyof IncomeState, value: string) => {
		setIncome((prevIncome) => ({
			...prevIncome,
			[key]: value,
		}));
	};

	const handleSubmit = async (event: { preventDefault: () => void }) => {
		event.preventDefault();
		try {
			const response = await fetch("http://localhost:8080/submit-finance", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(income),
			});
			const data = await response.text();
			console.log(data);
			alert("Income data submitted successfully!");
		} catch (error) {
			console.error("Error submitting income data:", error);
			alert("Failed to submit income data.");
		}
	};
	return (
		<form className="income-form">
			<h5>Monthly Income = ${num1 + num2 + num3} </h5>
			<div className="income-group">
				<span>Income Stream #1 = $</span>
				<input
					className="income-input"
					type="number"
					placeholder="Income Stream #1"
					value={income.income1}
					onChange={(e) => handleChange("income1", e.target.value)}
				/>
			</div>
			<div className="income-group">
				<span>Income Stream #2 = $</span>
				<input
					className="income-input"
					type="number"
					placeholder="Income Stream #2"
					value={income.income2}
					onChange={(e) => handleChange("income2", e.target.value)}
				/>
			</div>
			<div className="income-group">
				<span>Income Stream #3 = $</span>
				<input
					className="income-input"
					type="number"
					placeholder="Income Stream #3"
					value={income.income3}
					onChange={(e) => handleChange("income3", e.target.value)}
				/>
			</div>
			<button
				className="income-update-button"
				onClick={(e) => {
					handleSubmit(e);
				}}
			>
				Update Income
			</button>
		</form>
	);
};
