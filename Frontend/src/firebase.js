import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBaJ5kGWQBoGNnK38Mx9UwPz7_X0Tlr9_0",
    authDomain: "mern-whatsapp-9b58f.firebaseapp.com",
    projectId: "mern-whatsapp-9b58f",
    storageBucket: "mern-whatsapp-9b58f.appspot.com",
    messagingSenderId: "537336453873",
    appId: "1:537336453873:web:0e33cde1561c355e07e750"
};

const app = initializeApp(firebaseConfig); // app is the firebase app 

const auth = getAuth(); // auth is the authentication object
const provider = new GoogleAuthProvider(); //

export { app, auth, provider };// export the app, auth, and provider objects