import { useState } from 'react';
import { IoAdd } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import { ExpenseT } from '../reduxStore/slice/expenseSlice';
import { RootState } from '../reduxStore/store';
import Modal from './Modal';

type ExpenseProps = {
	componentType: string;
};
export default function Expenses({ componentType }: ExpenseProps) {
	const [isModalShow, setModalShow] = useState(false);
	const data = useSelector((state: RootState) => state.expense);
	const collectionOfExpenses =
		componentType != ''
			? data.filter((item) => item.type === componentType)
			: data;
	console.log(collectionOfExpenses);
	function handleCloseModal(data: boolean) {
		setModalShow(data);
	}
	const titleType =
		componentType !== ''
			? componentType.replace(componentType[0], componentType[0].toUpperCase())
			: 'Transactions';

	return (
		<>
			<div className="relative">
				<Modal onClick={handleCloseModal} isModalShow={isModalShow} />
			</div>
			<div className="bg-gray-300 w-[450px] grid p-3 rounded-xl">
				<div className="relative transition-all grid grid-cols-2 items-center mb-3">
					<h1 className=" text-gray-600 bg-gray-300">{titleType}</h1>
					<div className=" grid place-content-end">
						<button
							className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-400 active:bg-blue-600 transition-all"
							onClick={() => setModalShow((prev) => !prev)}
						>
							<IoAdd />
						</button>
					</div>
				</div>
				<div className="gap-3 rounded-lg grid">
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
	const { description, amount } = expense;
	return (
		<>
			<div className="bg-gray-50 p-3 grid grid-cols-2 items-center rounded-lg">
				<div className="grid place-content-start">
					<div className="text-xl">{description} </div>
					<div className="text-sm">Aug 12, 2024 - 11:00PM</div>
				</div>
				<div className="grid place-content-end text-red-400">
					$ {amount.toFixed(2)}
				</div>
			</div>
		</>
	);
}
