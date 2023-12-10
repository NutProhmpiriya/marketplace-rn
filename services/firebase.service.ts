import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: 'AIzaSyAln8GHwVJkU4VIflb-UwK46vZ8WIv6dp8',
    authDomain: 'marketplace-rn-f38bb.firebaseapp.com',
    projectId: 'marketplace-rn-f38bb',
    storageBucket: 'marketplace-rn-f38bb.appspot.com',
    messagingSenderId: '103502673916',
    appId: '1:103502673916:web:77a2d1da5f6bffe8f46479',
    measurementId: 'G-29PQVHPT2Q',
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const fireStore = getFirestore(app)
const storage = getStorage(app)

export default {
    app,
    auth,
    fireStore,
    storage,
}