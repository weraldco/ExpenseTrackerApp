import { configureStore } from '@reduxjs/toolkit';
import expenseReducer from './slice/expenseSlice';
import modalReducer from './slice/modalSlice';

export const store = configureStore({
	reducer: {
		expense: expenseReducer,
		modal: modalReducer,
	},
});
export type RootState = ReturnType<typeof store.getState>;
