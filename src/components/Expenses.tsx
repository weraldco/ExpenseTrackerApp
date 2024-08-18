import { useSelector } from 'react-redux';
import { ExpenseT } from '../reduxStore/slice/expenseSlice';
import { RootState } from '../reduxStore/store';
export default function Expenses() {
	const expenses = useSelector((state: RootState) => state.expense);

	return (
		<>
			<div className="grid w-full">
				<div className=" grid w-full gap-2">
					<div className=" grid grid-cols-2 w-full gap-2 bg-gray-700 text-white p-3 italic">
						<div>Description</div>
						<div className="text-right">Amount</div>
					</div>

					{expenses.map((expense) => (
						<ExpenseItem expense={expense} key={expense.description} />
					))}
				</div>
			</div>
		</>
	);
}

type ExpenseItemProps = {
	expense: ExpenseT;
};
function ExpenseItem({ expense }: ExpenseItemProps) {
	const { description, amount, date, type } = expense;

	const dateString = date.toLocaleDateString('en-EN', {
		year: 'numeric',
		day: '2-digit',
		month: 'short',
	});

	const timeString = date.toLocaleTimeString('en-EN', {
		hour: '2-digit',
		minute: '2-digit',
	});

	return (
		<div className=" grid grid-cols-2 w-full gap-2 bg-blue-200 px-3 py-2 items-center">
			<div>
				<div>{description}</div>
				<div className="text-xs text-gray-500">
					{dateString} - {timeString}
				</div>
			</div>
			<div
				className={
					type === 'expense'
						? 'text-red-400 text-right'
						: 'text-blue-400 text-right'
				}
			>
				${amount.toFixed(2)}
			</div>
		</div>
	);
}
