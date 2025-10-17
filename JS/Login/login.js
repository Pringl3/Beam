const login_email = document.getElementById("login-email");
const login_password = document.getElementById("login-password");
const login_button = document.getElementById("login-btn");

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCS48UUIZw9_VatWf3a_JtGZaxrlyCJZq8",
  authDomain: "beam-54300.firebaseapp.com",
  projectId: "beam-54300",
  storageBucket: "beam-54300.firebasestorage.app",
  messagingSenderId: "355750973806",
  appId: "1:355750973806:web:78c7bfe2e9d16d039ef17f",
  measurementId: "G-K30CMJ2036"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

login_button.addEventListener("click", (e) => {
  e.preventDefault();
  const email = login_email.value;
  const password = login_password.value;

  if (email === "" || password === "") {
    alert("Please fill in all fields.");
    return;
  }

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("User logged in successfully:", user);
      alert("Account logged in successfully!");
      window.location.href = 'index.html';
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error logging user:", errorCode, errorMessage);
      alert("Error logging account: " + errorMessage);
    });
});