import { useState } from 'react';
import { useSelector } from 'react-redux';
import { ExpenseT } from '../reduxStore/slice/expenseSlice';
import { RootState } from '../reduxStore/store';
import Modal from './Modal';

type ExpenseProps = {
	componentType: string;
};
export default function Expenses({ componentType }: ExpenseProps) {
	const showModal = useSelector((state) => state.modal);
	console.log(showModal);
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
	const { description, type, amount } = expense;

	return (
		<>
			<div className="bg-gray-50 p-3 grid grid-cols-2 items-center rounded-lg">
				<div className="grid place-content-start">
					<div className="text-xl">{description} </div>
					<div className="text-sm">Aug 12, 2024 - 11:00PM</div>
				</div>
				<div className={`grid place-content-end`}>
					<TextColorType t={type}>{amount}</TextColorType>
				</div>
			</div>
		</>
	);
}

function TextColorType({ t, children }: { t: string; children: number }) {
	switch (t) {
		case 'expense':
			return <span className="text-red-400">- ${children.toFixed(2)}</span>;
		case 'income':
			return <span className="text-green-400">+ ${children.toFixed(2)}</span>;
		case 'planned':
			return <span className="text-blue-400">- ${children.toFixed(2)}</span>;
		default:
			break;
	}
}
