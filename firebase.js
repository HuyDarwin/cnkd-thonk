// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD02DVRo73LxpwUAP7wETm_CSmcl8vPiNo",
  authDomain: "cnkd-thonk.firebaseapp.com",
  databaseURL: "https://cnkd-thonk-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "cnkd-thonk",
  storageBucket: "cnkd-thonk.appspot.com",
  messagingSenderId: "464340658312",
  appId: "1:464340658312:web:ea3884f859949757ac573d",
  measurementId: "G-BQEB5XS36K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);