import firebase from "firebase/app";
import "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyBGWyf0lJWJLr05bw-z2NA2U46ajUDQqWY",
    authDomain: "contact-form-55044.firebaseapp.com",
    projectId: "contact-form-55044",
    storageBucket: "contact-form-55044.appspot.com",
    messagingSenderId: "213356266350",
    appId: "1:213356266350:web:62068713ae5c0c7ed1377f"
  };

  const fireDb=firebase.initializeApp(firebaseConfig);
  export default fireDb.database.ref();
  