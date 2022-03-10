import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCihUTCd0Q4YJN98WJWMMfXUKItxyHIWps",
    authDomain: "react-my-pets-e5484.firebaseapp.com",
    projectId: "react-my-pets-e5484",
    storageBucket: "react-my-pets-e5484.appspot.com",
    messagingSenderId: "999098214373",
    appId: "1:999098214373:web:4e7a51bb6b89dac8da310c"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log('Logged in');
        console.log(user);

    } else {
        console.log('Logged out');
    }
})

export default firebase;

export const auth = firebase.auth();
