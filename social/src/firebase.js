import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCfqnn4P7bWGpDV4ZGW1zLbc9FnENcrHE8",
    authDomain: "social-957a9.firebaseapp.com",
    databaseURL: "https://social-957a9.firebaseio.com",
    projectId: "social-957a9",
    storageBucket: "social-957a9.appspot.com",
    messagingSenderId: "774419009240",
    appId: "1:774419009240:web:c0556507b833e7c26291ad",
    measurementId: "G-GCGJ00JDMD"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider};
  export default db;