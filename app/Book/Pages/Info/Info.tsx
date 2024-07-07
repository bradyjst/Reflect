import React, { useState } from "react";
import "./Info.css";
import { Header } from "../../PageComponents/Header/Header";
import { Expenses } from "../../MockData/Data";
import { PieChart } from "~/Book/PageComponents/PieChart/PieChart";

interface InfoProps {}

export const Info: React.FC<InfoProps> = () => {
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
		<div className="info-container">
			<Header title="Info" />
			<div className="info-chart-container"></div>
		</div>
	);
};
