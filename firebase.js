// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA7Ci0suETiXKIJF81eymAIS-H4x2ER7D0",
    authDomain: "react-native-auth-fcc19.firebaseapp.com",
    projectId: "react-native-auth-fcc19",
    storageBucket: "react-native-auth-fcc19.appspot.com",
    messagingSenderId: "116435628279",
    appId: "1:116435628279:web:04cf72ccb251e55ca923f2"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {

    app = firebase.initializeApp(firebaseConfig)
} else {
    app = firebase.app()
}

const auth = firebase.auth()

export { auth }