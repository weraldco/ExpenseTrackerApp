import { useSelector } from 'react-redux';
import Expenses from '../components/Expenses';
import Modal from '../components/Modal';
import Transactions from '../components/Transactions';
import { RootState } from '../reduxStore/store';

export default function Home() {
	const expenses = useSelector((state: RootState) => state.expense);
	console.log(expenses);
	const date = new Date();
	console.log(
		date.toLocaleDateString('en-EN', {
			day: '2-digit',
			month: 'short',
			year: 'numeric',
		})
	);
	console.log(date);

	return (
		<>
			<div className="grid place-content-center relative bg-slate-300 w-full">
				{/* <Modal /> */}
			</div>
			<div>
				{/* <Transactions /> */}
				<Expenses componentType="expense" />
				<Expenses componentType="planned" />
				<Expenses componentType="" />
			</div>
		</>
	);
}
