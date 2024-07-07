import React from "react";
import { Line } from "react-chartjs-2";
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
	plugins,
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
	moodData: {
		labels: string[];
		datasets: {
			label: string;
			data: number[];
			notes: string[];
		}[];
	};
}

export const LineChart: React.FC<LineChartProps> = ({ moodData }) => {
	const options = {
		maintainAspectRatio: false,
		scales: {
			y: {
				beginAtZero: true,
				min: 0,
				max: 6,
				ticks: {
					stepSize: 1,
				},
			},
		},
		plugins: {
			tooltip: {
				callbacks: {
					label: function (context: any) {
						const index = context.dataIndex;
						const datasetIndex = context.datasetIndex;
						const note = context.chart.data.datasets[datasetIndex].notes[index];
						console.log("Tooltip Note:", note); // Debugging: check the note value
						return `Mood: ${context.raw}, Note: ${note || "No note"}`;
					},
				},
			},
		},
	};

	return <Line data={moodData} options={options} />;
};
