import { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { addExpense } from '../reduxStore/slice/expenseSlice';

export default function Modal() {
	const [isModalShow, setModalShow] = useState(false);
	const [expenseType, setExpenseType] = useState<string>('expense');
	const [expenseDescription, setDescription] = useState<string>('');
	const [expenseAmount, setAmout] = useState<string>('');
	const [error, setError] = useState<string>('');
	const dispatch = useDispatch();

	function handleAddClick() {
		if (expenseAmount != '' && expenseDescription != '' && expenseType != '') {
			const payload = {
				description: expenseDescription,
				amount: Number(expenseAmount),
				date: new Date(),
				type: expenseType,
			};
			dispatch(addExpense(payload));
			setError('');
			setModalShow(false);
			setAmout('');
			setDescription('');
			setExpenseType('');
		} else {
			setError('Your form is incomplete. Please fill in all the empty fields');
		}
	}
	function handleCloseModal() {
		setModalShow((prev) => !prev);
		setError('');
	}
	return (
		<>
			<button
				onClick={handleCloseModal}
				className="bg-blue-500 text-white rounded-full px-3 py-2 absolute right-3 top-3 hover:bg-blue-400 active:bg-blue-600"
			>
				Add new expenses
			</button>

			{isModalShow && (
				<>
					<div className="grid place-items-center absolute h-screen w-screen">
						<div className=" w-[450px] absolute bg-white z-50 p-5 top-20  rounded-lg">
							<button
								onClick={handleCloseModal}
								className=" absolute top-4 right-4 text-xl"
							>
								<IoClose></IoClose>
							</button>
							<div className="grid grid-cols-2 justify-center items-center mb-5">
								<h1 className="text-xl">Adding new expenses</h1>
							</div>
							<div className="text-sm text-red-500 mb-1">{error}</div>
							<div className="grid gap-3">
								<div className="w-full grid">
									<p>Expense description: </p>
									<input
										className="bg-slate-100 p-2 rounded-lg"
										type="text"
										placeholder="Enter descriptions.."
										value={expenseDescription}
										onChange={(e) => setDescription(e.target.value)}
									/>
								</div>
								<div className="w-full grid">
									<p>Expense Amount: </p>

									<input
										className="bg-slate-100 p-2 rounded-lg"
										type="number"
										placeholder="Enter expenses amount.."
										value={expenseAmount}
										onChange={(e) => setAmout(e.target.value)}
									/>
								</div>
								<div className="grid grid-cols-2 place-content-center w-1/2">
									<div>
										<input
											type="radio"
											name="expense-type"
											value="expense"
											id="expense"
											checked={expenseType === 'expense'}
											onChange={(e) => setExpenseType(e.target.value)}
										/>{' '}
										<label htmlFor="expense">Expense</label>
									</div>
									<div>
										<input
											type="radio"
											name="expense-type"
											value="income"
											id="income"
											checked={expenseType === 'income'}
											onChange={(e) => setExpenseType(e.target.value)}
										/>{' '}
										<label htmlFor="income">Income</label>
									</div>
								</div>
								<div className="flex gap-2 place-content-end mt-5">
									<button
										className="p-2 text-sm bg-blue-500  text-white rounded-lg"
										onClick={handleAddClick}
									>
										Add
									</button>
									<button
										className="p-2 text-sm bg-blue-500  text-white rounded-lg"
										onClick={handleCloseModal}
									>
										Cancel
									</button>
								</div>
							</div>
						</div>
						<div
							className=" w-screen absolute bg-black top-0 bottom-0 left-0 right-0 z-10 opacity-45"
							onClick={handleCloseModal}
						></div>
					</div>
				</>
			)}
		</>
	);
}
