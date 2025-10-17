const register_username = document.getElementById("register-username");
const register_email = document.getElementById("register-email");
const register_password = document.getElementById("register-password");
const register_button = document.getElementById("register-btn");

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";
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

register_button.addEventListener("click", async (e) => {
  e.preventDefault();
  const email = register_email.value;
  const password = register_password.value;
  const displayName = register_username.value;

  if (email === "" || password === "" || displayName === "") {
    alert("Please fill in all fields.");
    return;
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(userCredential.user, { displayName: displayName });
    console.log("User registered successfully:", userCredential.user);
    alert("Account created successfully!");
    window.location.href = 'index.html';
  } catch (error) {
    console.error("Error registering user:", error.code, error.message);
    alert("Error creating account: " + error.message);
  }
});