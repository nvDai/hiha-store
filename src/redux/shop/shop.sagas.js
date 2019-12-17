import { takeLatest, call, put, all } from 'redux-saga/effects'
import shopActionTypes from './shop.types'
import {
	firestore,
	convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils'
import {
	fetchCollectionsFailure,
	fetchCollectionsSuccess,
} from './shop.actions'

export function* fetchCollectionsAsync() {
	try {
		const collectionRef = firestore.collection('collections')
		const snapshot = yield collectionRef.get()
		const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot)
		yield put(fetchCollectionsSuccess(collectionsMap))
	} catch (error) {
		yield put(fetchCollectionsFailure(error.message))
	}
}

export function* onFetchCollectionsStart() {
	yield takeLatest(
		shopActionTypes.FETCH_COLLECTIONS_START,
		fetchCollectionsAsync
	)
}

export function* shopSagas() {
	yield all([call(onFetchCollectionsStart)])
}
