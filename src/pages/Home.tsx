import { useState } from 'react';
import { GrAddCircle } from 'react-icons/gr';
import { useSelector } from 'react-redux';
import ExpenseChart from '../components/ExpenseChart';
import Expenses from '../components/Expenses';
import Modal from '../components/Modal';
import TotalAmountCard from '../components/TotalAmountCard';
import UserBalance from '../components/UserBalance';
import { ExpenseT } from '../reduxStore/slice/expenseSlice';
import { RootState } from '../reduxStore/store';

export default function Home() {
	const [isModalShow, setModalShow] = useState(false);
	const data = useSelector((state: RootState) => state.expense);
	// console.log(data);
	const totalSpending = data
		.filter((expense: ExpenseT) => expense.type === 'expense')
		.reduce((total: number, curr: ExpenseT) => (total += curr.amount), 0);
	const totalIncome = data
		.filter((expense: ExpenseT) => expense.type === 'income')
		.reduce((total: number, curr: ExpenseT) => (total += curr.amount), 0);

	function handleCloseModal(data: boolean) {
		setModalShow(data);
	}
	return (
		<>
			<Modal onClick={handleCloseModal} isModalShow={isModalShow} />

			<div className="p-5 grid grid-cols-2 place-content-center ">
				<div className="grid place-content-center gap-2 relative">
					<div className=" absolute top-0 rounded-full px-3 py-[.3rem]  border-gray-600 border-[2px]">
						<UserBalance />
					</div>
					<button
						className="bg-blue-500 text-white p-2 rounded-3xl hover:bg-blue-400 active:bg-blue-600 transition-all absolute top-0 right-0 grid grid-cols-2 w-[135px] items-center"
						onClick={() => setModalShow((prev) => !prev)}
					>
						<GrAddCircle />
						<span className="-ml-10">Transaction</span>
					</button>

					<div className="grid grid-cols-2 mt-12 gap-2 place-items-center">
						<TotalAmountCard type="spending" amount={totalSpending} />
						<TotalAmountCard type="income" amount={totalIncome} />
					</div>
					<div>
						<Expenses componentType="" />
					</div>
				</div>
				<div className="w-[400px] h-[400px] grid place-items-center">
					<ExpenseChart />
				</div>
			</div>
		</>
	);
}
