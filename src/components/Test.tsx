import { useDispatch, useSelector } from 'react-redux';
import { showModal } from '../reduxStore/slice/modalSlice';

export default function Test() {
	const dispatch = useDispatch();

	return (
		<>
			<button onClick={() => dispatch(showModal(true))}>Test</button>
		</>
	);
}
