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

export { app };