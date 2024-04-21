import React from "react";
import { Pie } from "react-chartjs-2";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	BarElement,
	Title,
	Tooltip,
	Legend,
	ArcElement,
} from "chart.js";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	BarElement,
	LineElement,
	ArcElement, // Used for pie, doughnut charts
	Title,
	Tooltip,
	Legend
);
interface PieChartProps {
	expenseData: {
		labels: string[];
		datasets: {
			label: string;
			data: number[];
		}[];
	};
}

const options = {
	plugins: {
		tooltip: {
			position: "nearest" as const,
		},
		legend: {
			display: true,
			position: "left" as const,
			align: "start" as const,
			labels: {
				usePointStyle: true,
				pointStyle: "circle",
			},
		},
	},
	responsive: true,
	maintainAspectRatio: false,
};

export const PieChart: React.FC<PieChartProps> = ({ expenseData }) => {
	return <Pie data={expenseData} options={options} />;
};
