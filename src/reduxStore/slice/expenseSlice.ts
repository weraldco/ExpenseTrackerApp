import { createSlice } from '@reduxjs/toolkit';

export type ExpenseT = {
	description: string;
	amount: number;
	type: string;
};

const dummyData = [
	{
		description: 'Macbook Pro',
		amount: 60000,
		type: 'expense',
	},
	{
		description: 'Keyboard',
		amount: 2000,
		type: 'expense',
	},
	{
		description: 'Mouse',
		amount: 3500,
		type: 'expense',
	},
	{
		description: 'March Salary',
		amount: 53000,
		type: 'income',
	},
];

const initialState: ExpenseT[] = dummyData;

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
