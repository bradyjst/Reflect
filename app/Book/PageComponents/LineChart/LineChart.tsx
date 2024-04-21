import React from "react";
import { Line } from "react-chartjs-2";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	ArcElement,
} from "chart.js";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
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

export const LineChart: React.FC<LineChartProps> = ({ incomeData }) => {
	return (
		<div>
			<Line data={incomeData} />
		</div>
	);
};
