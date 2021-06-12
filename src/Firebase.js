import firebase from 'firebase';

const firebaseApp = firebase.initializeApp ({
  apiKey: "AIzaSyBtHoA3Vubd0Y0Sg0-7cpL5RdZbZ8TWHzA",
  authDomain: "instagram-clone-react-7d24e.firebaseapp.com",
  databaseURL: "https://instagram-clone-react-7d24e-default-rtdb.firebaseio.com",
  projectId: "instagram-clone-react-7d24e",
  storageBucket: "instagram-clone-react-7d24e.appspot.com",
  messagingSenderId: "1039798035722",
  appId: "1:1039798035722:web:e3dcfc12d9cd9bad8b06f3",
  measurementId: "G-H52HTC28VH"
});


const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage()

export { db, auth, storage };