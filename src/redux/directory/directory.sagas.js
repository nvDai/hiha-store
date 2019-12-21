import { call, all, takeLatest, put } from 'redux-saga/effects'
import directoryActionTypes from './directory.types'
import {
	fetchDirectorySectionSuccess,
	fetchDirectorySectionFailure,
} from './directory.actions'
import { firestore } from '../../firebase/firebase.utils'
import { convertSnapshotToSectionsArray } from './directory,utils'

export function* fetchDirectorySections() {
	try {
		const directoryRef = firestore.collection('directory')
		const snapshot = yield directoryRef.get()
		const sections = yield call(convertSnapshotToSectionsArray, snapshot)
		yield put(fetchDirectorySectionSuccess(sections))
	} catch (error) {
		yield put(fetchDirectorySectionFailure(error.message))
	}
}

export function* onFetchDirectorySectionsStart() {
	yield takeLatest(
		directoryActionTypes.FETCH_DIRECTORY_SECTIONS_START,
		fetchDirectorySections
	)
}

export function* directorySaga() {
	yield all([call(onFetchDirectorySectionsStart)])
}
