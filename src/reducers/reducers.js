import {
	CHANGE_SEARCHFIELD,
	KITTIES_REQUEST,
	KITTIES_SUCCESS,
	KITTIES_FAILED
} from '../actions/types';

export const searchfieldReducer = (state = { searchfield: '' }, action) => {
	switch (action.type) {
		case CHANGE_SEARCHFIELD:
			return { ...state, searchfield: action.payload };
		default:
			return state;
	}
};

export const kittiesReducer = (state = { kitties: [] }, action) => {
	switch (action.type) {
		case KITTIES_REQUEST:
			return { loading: true, kitties: [] };
		case KITTIES_SUCCESS:
			return { loading: false, kitties: action.payload };
		case KITTIES_FAILED:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};
