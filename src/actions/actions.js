import {
	CHANGE_SEARCHFIELD,
	KITTIES_REQUEST,
	KITTIES_SUCCESS,
	KITTIES_FAILED
} from './types.js';

export const setSearchfield = text => ({
	type: CHANGE_SEARCHFIELD,
	payload: text
});

export const listKitties = () => async dispatch => {
	try {
		dispatch({ type: KITTIES_REQUEST });

		const kittiesPromise = await fetch(
			'https://jsonplaceholder.typicode.com/users'
		);
		const kitties = await kittiesPromise.json();
		dispatch({ type: KITTIES_SUCCESS, payload: kitties });
	} catch (error) {
		dispatch({
			type: KITTIES_FAILED,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message
		});
	}
};
