import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
  authDomain: 'hiha-store.firebaseapp.com',
  databaseURL: 'https://hiha-store.firebaseio.com',
  projectId: 'hiha-store',
  storageBucket: 'hiha-store.appspot.com',
  messagingSenderId: '621223607878',
  appId: '1:621223607878:web:4c972b9f628d32961ad447',
  measurementId: 'G-BRVFE84DQW',
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapshot = await userRef.get()

  if (!snapshot.exists) {
    const { displayName, email } = userAuth
    const createAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      })
    } catch (error) {
      console.log('Error creating user', error.message)
    }
  }
  return userRef
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)
export default firebase
