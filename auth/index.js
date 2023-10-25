import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js"
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyB39IBJiE4OjuhHSG2oCOob_jAROJBfudA",
    authDomain: "auth-c1.firebaseapp.com",
    databaseURL: "https://auth-c1-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "auth-c1",
    storageBucket: "auth-c1.appspot.com",
    messagingSenderId: "22652636656",
    appId: "1:22652636656:web:94a909cdf3e6a373b1a135"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

let signUp = document.getElementById("signUp");
let signIn = document.getElementById('signIn');
let signout = document.getElementById('signOut');
const authForm = document.getElementById('login-box');
const signupLoginLink = document.querySelectorAll('.bottom-link a');

signUp.addEventListener("click", (e) => {
    let signUpEmail = document.getElementById("signup_email").value;
    let signUpPassword = document.getElementById("signup_password").value;
    const date = new Date();

    createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
        .then((userCredential) => {
            const user = userCredential.user;
            const userData = {
                email: signUpEmail,
                uid: user.uid,
                createdAt: date
            };
            setDoc(doc(db, 'users', user.uid), userData).then(() => {
                console.log("user created");
            }).catch((error) => {
                console.log(error.message);
            });
            alert('User created')
        }).catch((error) => {
            console.log(error.message);
        }
    );
});

signIn.addEventListener("click", (e) => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            const date = new Date();

            console.log('logged in');
            window.location.href = '../index.html';
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        }
    );
});

const user = auth.currentUser;
onAuthStateChanged(auth, (user) => {
    //TODO Handle user login state
    let userCheck = document.getElementById('userCheck');
    if (user) {
    } else {
        // User is signed out
        console.log("user logged out");
    }

});

// signout.addEventListener("click", () => {
//     signOut(auth).then(() => {
//         // Sign-out successful.
//         console.log('logged out');
//     }).catch((error) => {
//         console.log(error.message)
//     });
// })

// Show or hide signup form
signupLoginLink.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        authForm.classList[link.id === 'signup-link' ? 'add' : 'remove']("show-signup");
    });
});