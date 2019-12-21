import directoryActionTypes from './directory.types'

export const fetchDirectorySectionStart = () => ({
	type: directoryActionTypes.FETCH_DIRECTORY_SECTIONS_START,
})

export const fetchDirectorySectionSuccess = sections => ({
	type: directoryActionTypes.FETCH_DIRECTORY_SECTIONS_SUCCESS,
	payload: sections,
})

export const fetchDirectorySectionFailure = errorMessage => ({
	type: directoryActionTypes.FETCH_DIRECTORY_SECTIONS_FAILURE,
	payload: errorMessage,
})
