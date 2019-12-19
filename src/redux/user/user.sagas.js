import { takeLatest, call, all, put } from 'redux-saga/effects'

import userActionTypes from './user.types'

import {
	auth,
	googleProvider,
	createUserProfileDocument,
	getCurrentUser,
} from '../../firebase/firebase.utils'

import {
	sigInSuccess,
	sigInFailure,
	signOutSuccess,
	signOutFailure,
	signUpSuccess,
	signUpFailure,
} from './user.actions'

export function* getUserSnapshotFromUserAuth(userAuth, additionalData) {
	try {
		const userRef = yield createUserProfileDocument(userAuth, additionalData)
		const userSnapshot = yield userRef.get()
		yield put(sigInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))
	} catch (error) {
		yield put(sigInFailure(error))
	}
}

export function* signInWithGoogle() {
	try {
		const { user } = yield auth.signInWithPopup(googleProvider)
		yield getUserSnapshotFromUserAuth(user)
	} catch (error) {
		yield put(sigInFailure(error))
	}
}

export function* signInWithEmail({ payload: { email, password } }) {
	try {
		const { user } = yield auth.signInWithEmailAndPassword(email, password)
		yield getUserSnapshotFromUserAuth(user)
	} catch (error) {
		yield put(sigInFailure(error))
	}
}

export function* isUserAuthenticated() {
	try {
		const userAuth = yield getCurrentUser()
		if (!userAuth) return
		yield getUserSnapshotFromUserAuth(userAuth)
	} catch (error) {
		yield put(sigInFailure(error))
	}
}

export function* signOut() {
	try {
		yield auth.signOut()
		yield put(signOutSuccess())
	} catch (error) {
		yield put(signOutFailure(error))
	}
}

export function* signUp({ payload: { email, password, displayName } }) {
	try {
		const { user } = yield auth.createUserWithEmailAndPassword(email, password)
		yield put(signUpSuccess({ user, additionalData: { displayName } }))
	} catch (error) {
		yield put(signUpFailure())
		yield alert(error.message)
	}
}

export function* signInAfterSignUp({ payload: { user, additionalData } }) {
	yield getUserSnapshotFromUserAuth(user, additionalData)
}

export function* onGoogleSignInStart() {
	yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onEmailSignInStart() {
	yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* onCheckUserSession() {
	yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onSignOutStart() {
	yield takeLatest(userActionTypes.SIGN_OUT_START, signOut)
}

export function* onSignUpStart() {
	yield takeLatest(userActionTypes.SIGN_UP_START, signUp)
}

export function* onSignUpSuccess() {
	yield takeLatest(userActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function* userSagas() {
	yield all([
		call(onGoogleSignInStart),
		call(onEmailSignInStart),
		call(onCheckUserSession),
		call(onSignOutStart),
		call(onSignUpStart),
		call(onSignUpSuccess),
	])
}
