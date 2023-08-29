import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyA2FVtC7LXr0g1Yehxz7y6bx94Su-0VNJo",
    authDomain: "frontendride-83cc2.firebaseapp.com",
    projectId: "frontendride-83cc2",
    storageBucket: "frontendride-83cc2.appspot.com",
    messagingSenderId: "621975128677",
    appId: "1:621975128677:web:c88c644e07fe1c7358148c",
    measurementId: "G-CTZ8DD2XW3"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth =firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider

export {auth,provider}
export default db