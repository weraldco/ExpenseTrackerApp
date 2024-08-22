import {
	ArcElement,
	BarElement,
	CategoryScale,
	Chart as ChartJS,
	Legend,
	LinearScale,
	plugins,
	Title,
	Tooltip,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
ChartJS.register(
	CategoryScale,
	Legend,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	BarElement,
	ArcElement
);

import { RootState } from '../reduxStore/store';

export default function ExpenseChart() {
	const data = useSelector((state: RootState) => state.expense);
	const expenses = data.filter((item) => item.type === 'expense');
	const pieChartData = {
		labels: expenses.map((item) => item.description),
		datasets: [
			{
				label: 'Expenses',
				data: expenses.map((item) => item.amount),
				backgroundColor: [
					'lightcoral',
					'lightpink',
					'lightgreen',
					'red',
					'darkblue',
				],
				borderColor: 'transparent',
				hoverOffset: 4,
				borderWidth: 5,
				borderRadius: 10,
				offset: 20,
			},
		],
	};
	const options = {};
	return (
		<>
			<Doughnut options={options} data={pieChartData} />
		</>
	);
}
