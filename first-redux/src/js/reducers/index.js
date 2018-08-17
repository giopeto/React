// src/js/reducers/index.js

/*
*
* 	A reducer is just a Javascript function. A reducer takes two parameters: the current state and an action.
* 	Reducer(s) produce the state of the application.
*
*/

import { ADD_ARTICLE } from "../constants/action-types";

const initialState = {
	articles: []
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_ARTICLE:
			return { ...state, articles: [...state.articles, action.payload] };
		default:
			return state;
	}
};

export default rootReducer;