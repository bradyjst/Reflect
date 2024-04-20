import React, { useState } from "react";
import "./Expenses.css";

interface ExpensesProps {}

interface ExpensesState {
	Mortgage: string;
	Car: string;
	CarInsurance: string;
	Groceries: string;
	Restaraunt: string;
	Phone: string;
	Internet: string;
	Utilities: string;
	Debt: string;
}

export const Expenses: React.FC<ExpensesProps> = () => {
	const [expenses, setExpenses] = useState<ExpensesState>({
		Mortgage: "",
		Car: "",
		CarInsurance: "",
		Groceries: "",
		Restaraunt: "",
		Phone: "",
		Internet: "",
		Utilities: "",
		Debt: "",
	});

	const Mortgage = Number(expenses.Mortgage);
	const Car = Number(expenses.Car);
	const CarInsurance = Number(expenses.CarInsurance);
	const Groceries = Number(expenses.Groceries);
	const Restaraunt = Number(expenses.Restaraunt);
	const Phone = Number(expenses.Phone);
	const Internet = Number(expenses.Internet);
	const Utilities = Number(expenses.Utilities);
	const Debt = Number(expenses.Debt);

	const totalExpenses =
		Mortgage +
		Car +
		CarInsurance +
		Groceries +
		Restaraunt +
		Phone +
		Internet +
		Utilities +
		Debt;

	const handleChange = (key: keyof ExpensesState, value: string) => {
		setExpenses((prevExpenses) => ({
			...prevExpenses,
			[key]: value,
		}));
	};
	return (
		<form className="expense-form">
			<h5>Expenses = ${totalExpenses} </h5>
			<div className="expense-group">
				<span>Mortgage/Rent = $</span>
				<input
					className="expense-input"
					type="number"
					placeholder="Mortgage/Rent"
					value={expenses.Mortgage}
					onChange={(e) => handleChange("Mortgage", e.target.value)}
				/>
			</div>
			<div className="expense-group">
				<span>Car Payment = $</span>
				<input
					className="expense-input"
					type="number"
					placeholder="Car Payment"
					value={expenses.Car}
					onChange={(e) => handleChange("Car", e.target.value)}
				/>
			</div>
			<div className="expense-group">
				<span>Car Insurance = $</span>
				<input
					className="expense-input"
					type="number"
					placeholder="Car Insurance"
					value={expenses.CarInsurance}
					onChange={(e) => handleChange("CarInsurance", e.target.value)}
				/>
			</div>
			<div className="expense-group">
				<span>Groceries = $</span>
				<input
					className="expense-input"
					type="number"
					placeholder="Groceries"
					value={expenses.Groceries}
					onChange={(e) => handleChange("Groceries", e.target.value)}
				/>
			</div>
			<div className="expense-group">
				<span>Restaraunts = $</span>
				<input
					className="expense-input"
					type="number"
					placeholder="Restaraunts"
					value={expenses.Restaraunt}
					onChange={(e) => handleChange("Restaraunt", e.target.value)}
				/>
			</div>
			<div className="expense-group">
				<span>Phone = $</span>
				<input
					className="expense-input"
					type="number"
					placeholder="Phone"
					value={expenses.Phone}
					onChange={(e) => handleChange("Phone", e.target.value)}
				/>
			</div>
			<div className="expense-group">
				<span>Internet = $</span>
				<input
					className="expense-input"
					type="number"
					placeholder="Internet"
					value={expenses.Internet}
					onChange={(e) => handleChange("Internet", e.target.value)}
				/>
			</div>
			<div className="expense-group">
				<span>Utilities = $</span>
				<input
					className="expense-input"
					type="number"
					placeholder="Utilities"
					value={expenses.Utilities}
					onChange={(e) => handleChange("Utilities", e.target.value)}
				/>
			</div>
			<div className="expense-group">
				<span>Debt = $</span>
				<input
					className="expense-input"
					type="number"
					placeholder="Debt"
					value={expenses.Debt}
					onChange={(e) => handleChange("Debt", e.target.value)}
				/>
			</div>
		</form>
	);
};
