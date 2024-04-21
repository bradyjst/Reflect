import React, { useState } from "react";
import "./FStats.css";
import { Header } from "../../../PageComponents/Header/Header";
import { LineChart } from "../../..//PageComponents/LineChart/LineChart";
import { Income } from "../Budget/Data";

interface FStatsProps {}

export const FStats: React.FC<FStatsProps> = () => {
	const [incomeData, setIncomeData] = useState({
		labels: Income.map((data) => `ID ${data.ed}`), // Using ID as a label
		datasets: [
			{
				label: "Income",
				data: Income.map((data) => data.income),
			},
		],
	});
	return (
		<div className="fstats-container">
			<Header title="Financial Stats" />
			<div className="fstats-linechart-container">
				<LineChart incomeData={incomeData} />
			</div>
		</div>
	);
};
