// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQ-z0wUlpQBWxXs4cUR8WCCJb11bMlyFM",
  authDomain: "coderhouse-proyecto-fe1cb.firebaseapp.com",
  projectId: "coderhouse-proyecto-fe1cb",
  storageBucket: "coderhouse-proyecto-fe1cb.appspot.com",
  messagingSenderId: "623879433867",
  appId: "1:623879433867:web:eff88c229e4b8e7d7a6e8e",
  measurementId: "G-LN7Z6M9J3L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const getFirestoreApp = () =>{

    return app;
}