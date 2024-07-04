// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNlyqcqYOq5hFr0Uj9o01l6AZPy3WVyo4",
  authDomain: "e-commerce-97201.firebaseapp.com",
  projectId: "e-commerce-97201",
  storageBucket: "e-commerce-97201.appspot.com",
  messagingSenderId: "583920947680",
  appId: "1:583920947680:web:810c9e781ce2f0c41ddb85",
  measurementId: "G-1H2Q0QH4C0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);