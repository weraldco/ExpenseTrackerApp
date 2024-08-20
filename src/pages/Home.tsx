import { useState } from 'react';
import { GrAddCircle } from 'react-icons/gr';
import { useSelector } from 'react-redux';
import Expenses from '../components/Expenses';
import Modal from '../components/Modal';
import TotalAmountCard from '../components/TotalAmountCard';
import { RootState } from '../reduxStore/store';

export default function Home() {
	const [isModalShow, setModalShow] = useState(false);
	function handleCloseModal(data: boolean) {
		setModalShow(data);
	}
	return (
		<>
			<div className="p-5 grid place-content-center gap-2 relative">
				<Modal onClick={handleCloseModal} isModalShow={isModalShow} />
				{/* <Transactions /> */}
				{/* <Expenses componentType="expense" />
				<Expenses componentType="planned" />
				<Expenses componentType="" /> */}
				<button
					className="bg-blue-500 text-white p-2 rounded-3xl hover:bg-blue-400 active:bg-blue-600 transition-all absolute top-5 right-7 grid grid-cols-2 w-[135px] items-center"
					onClick={() => setModalShow((prev) => !prev)}
				>
					<GrAddCircle />
					<span className="-ml-10">Transaction</span>
				</button>
				<div className="grid grid-cols-2 mt-14 place-items-center">
					<TotalAmountCard type="spending" amount={10000} />
					<TotalAmountCard type="income" amount={5000} />
				</div>
				<div>
					<Expenses componentType="" />
				</div>
			</div>
		</>
	);
}
