import { createSlice } from '@reduxjs/toolkit';

export type ExpenseT = {
	description: string;
	amount: number;
	date: Date;
	type: string;
};

// const dummyData = [
// 	{
// 		description: 'Macbook Pro',
// 		amount: 60000,
// 		date: `Sun Aug 18 2024 15:55:28 GMT+0800 (Philippine Standard Time)`,
// 		type: 'expenses',
// 	},
// 	{
// 		description: 'Keyboard',
// 		amount: 2000,
// 		date: `Sun Aug 18 2024 15:55:28 GMT+0800 (Philippine Standard Time)`,
// 		type: 'expenses',
// 	},
// 	{
// 		description: 'Mouse',
// 		amount: 3500,
// 		date: `Sun Aug 18 2024 15:55:28 GMT+0800 (Philippine Standard Time)`,
// 		type: 'expenses',
// 	},
// 	{
// 		description: 'March Salary',
// 		amount: 53000,
// 		date: `Sun Aug 18 2024 15:55:28 GMT+0800 (Philippine Standard Time)`,
// 		type: 'income',
// 	},
// ];

const initialState: ExpenseT[] = [];

const expenseSlice = createSlice({
	name: 'expense',
	initialState,
	reducers: {
		addExpense(state, action) {
			state.push(action.payload);
		},
	},
});

export const { addExpense } = expenseSlice.actions;
export default expenseSlice.reducer;
