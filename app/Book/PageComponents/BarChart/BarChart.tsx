import React from "react";
import { Bar } from "react-chartjs-2";
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

interface LineChartProps {
	incomeData: {
		labels: string[];
		datasets: {
			label: string;
			data: number[];
		}[];
	};
}

export const BarChart: React.FC<LineChartProps> = ({ incomeData }) => {
	return (
		<div>
			<Bar data={incomeData} />
		</div>
	);
};
