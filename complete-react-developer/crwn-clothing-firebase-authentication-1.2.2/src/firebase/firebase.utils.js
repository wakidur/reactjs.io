// This import loads the firebase namespace along with all its type information.
import firebase from 'firebase/app';
 
// These imports load individual services into the firebase namespace.
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDb8_5ju6nb_8QMAacGBgbDoFdSvXpX6-g",
    authDomain: "crwn-clothing-f665e.firebaseapp.com",
    databaseURL: "https://crwn-clothing-f665e.firebaseio.com",
    projectId: "crwn-clothing-f665e",
    storageBucket: "crwn-clothing-f665e.appspot.com",
    messagingSenderId: "813384939949",
    appId: "1:813384939949:web:2faf2e95d1cc6d8dfc4924"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  // const provider = new firebase.auth.FacebookAuthProvider();
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;