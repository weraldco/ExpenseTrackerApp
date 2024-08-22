export const lineChartData = {
	labels: [
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
		'Sunday',
	],
	datasets: [
		{
			label: 'Steps',
			data: [3000, 5000, 4500, 6000, 8000, 7000, 9000],
			borderColor: 'rgb(75,192,192)',
		},
	],
};

export const barChartData = {
	labels: ['Rent', 'Groceries', 'Utilities', 'Entertainment', 'Transportation'],
	datasets: [
		{
			labels: 'Expenses',
			data: [1200, 300, 150, 180, 100],
			backgroundColor: ['maroon', 'red', 'blue', 'orange', 'yellow'],
			borderColor: ['yellow', 'orange', 'blue', 'red', 'maroon'],
			borderWidth: 1,
		},
	],
};

export const pieChartData = {
	labels: ['Facebook', 'Instagram', 'Twitter', 'Youtube', 'LinkedIn'],
	datasets: [
		{
			label: 'Time spent',
			data: [120, 60, 50, 30, 50],
			backgroundColor: ['blue', 'orange', 'skyblue', 'red', 'darkblue'],
			hoverOffset: 4,
		},
	],
};
