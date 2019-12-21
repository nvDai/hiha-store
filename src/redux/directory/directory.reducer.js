import directoryActionTypes from './directory.types'

const INITIAL_STATE = {
	sections: null,
	errorMessage: undefined,
}

const directoryReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case directoryActionTypes.FETCH_DIRECTORY_SECTIONS_SUCCESS:
			return {
				...state,
				sections: action.payload,
			}
		case directoryActionTypes.FETCH_DIRECTORY_SECTIONS_FAILURE:
			return {
				...state,
				errorMessage: action.payload,
			}
		default:
			return state
	}
}

export default directoryReducer
