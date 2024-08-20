import { createSlice } from '@reduxjs/toolkit';

type modalProp = {
	value: boolean;
};
const initialState: modalProp = { value: false };

const modalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		showModal(state, action) {
			console.log(action);
		},
	},
});

export const { showModal } = modalSlice.actions;
export default modalSlice.reducer;
