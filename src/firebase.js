import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "", //Add your Information
  authDomain: "", //Add your Information
  databaseURL: "", //Add your Information
  projectId: "", //Add your Information
  storageBucket: "", //Add your Information
  messagingSenderId: "", //Add your Information
  appId: "", //Add your Information
  measurementId: "G-", //Add your Information
};

firebase.initializeApp(firebaseConfig);

export default firebase;