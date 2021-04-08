import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFXKdD9reldbGI9lWaEHaLGR5rAThOpOA",
  authDomain: "msa-signup-9babc.firebaseapp.com",
  projectId: "msa-signup-9babc",
  storageBucket: "msa-signup-9babc.appspot.com",
  messagingSenderId: "254133073777",
  appId: "1:254133073777:web:0dc5bf2c6f3d72a4fa28d0",
  measurementId: "G-1750G3908B"
};
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth;
export const db = firebase.database();
