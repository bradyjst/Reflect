/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import "./FStats.css";
import { Header } from "../../../PageComponents/Header/Header";
import { BarChart } from "../../../PageComponents/BarChart/BarChart";
import { Income, Expenses } from "../Budget/Data";
import { PieChart } from "../../../PageComponents/PieChart/PieChart";

interface FStatsProps {}

export const FStats: React.FC<FStatsProps> = () => {
	const [incomeData, setIncomeData] = useState({
		labels: Income.map((data) => `${data.id}`), // Using ID as a label
		datasets: [
			{
				label: "",
				data: Income.map((data) => data.income),
				backgroundColor: ["red", "blue", "green"],
			},
		],
	});
	const [expenseData, setExpenseData] = useState({
		labels: Expenses.map((data) => ` ${data.id}`), // Using ID as a label
		datasets: [
			{
				label: "Expense",
				data: Expenses.map((data) => data.expense),
				backgroundColor: [
					"red",
					"blue",
					"green",
					"orange",
					"pink",
					"purple",
					"black",
					"yellow",
					"grey",
				],
			},
		],
	});
	return (
		<div className="fstats-container">
			<Header title="Financial Stats" />
			<div className="charts-container">
				<div className="fstats-linechart-container">
					<BarChart incomeData={incomeData} />
				</div>
				<div className="fstats-piechart-container">
					<PieChart expenseData={expenseData} />
				</div>
			</div>
		</div>
	);
};
