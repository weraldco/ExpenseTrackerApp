import { useSelector } from 'react-redux';
import { ExpenseT } from '../reduxStore/slice/expenseSlice';
import { RootState } from '../reduxStore/store';
export default function Expenses() {
	const data = useSelector((state: RootState) => state.expense);
	const collectionOfExpenses = data.filter((item) => item.type === 'expense');
	console.log(collectionOfExpenses);

	return (
		<>
			<div>
				<h1>Expenses</h1>
				<div>
					{collectionOfExpenses.map((expense) => (
						<ExpenseItem key={expense.description} expense={expense} />
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
	const { description, date, type, amount } = expense;
	return (
		<>
			<div>{description}</div>
		</>
	);
}
