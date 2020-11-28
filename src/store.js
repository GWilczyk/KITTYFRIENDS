import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { kittiesReducer, searchfieldReducer } from './reducers/reducers';

const reducer = combineReducers({
	kitties: kittiesReducer,
	searchfield: searchfieldReducer
});
const initialState = {};
const middleware = [thunk];

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
