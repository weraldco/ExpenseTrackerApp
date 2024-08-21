import { FaCircleChevronRight } from 'react-icons/fa6';

type TotalAmountCardProps = {
	type: string;
	amount: number;
};
export default function TotalAmountCard({
	type,
	amount,
}: TotalAmountCardProps) {
	return (
		<>
			<div className="grid grid-cols-3 p-3 w-[220px] h-[125px] bg-gray-800 rounded-3xl  items-center">
				<div className="grid col-span-2">
					<span className="text-gray-400 text-[1rem]  mt-4">total {type}</span>
					<span className="text-white text-[1.35rem] ">
						{type == 'income' ? '+' : '-'} ${amount.toFixed(2)}
					</span>
				</div>
				<div className="grid place-content-end text-[35px] ">
					<button className="grid place-content-end text-[35px] text-gray-500 hover:text-white hover: transition-all hover:-translate-y-1">
						<FaCircleChevronRight />
					</button>
				</div>
			</div>
		</>
	);
}
