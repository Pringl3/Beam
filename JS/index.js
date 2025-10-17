const fontSelector = document.getElementById("font-selector");
const fontSizeSelector = document.getElementById("fontsize-selector");
const boldBtn = document.getElementById("bold-btn");
const highlightBtn = document.getElementById("highlight-btn");
const italicBtn = document.getElementById("italic-btn");
const underlineBtn = document.getElementById("underline-btn");
const bulletpointBtn = document.getElementById("bulletpoint-btn");
const linkBtn = document.getElementById("link-btn");

const postContent = document.getElementById("post-content");

const sidebar_username = document.getElementById('sidebar-username');

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

// Change username placeholder to the logged-in user's username
auth.onAuthStateChanged((user) => {
    if (user) {
        // User is signed in
        const displayName = user.displayName || "User";
        sidebar_username.textContent = displayName;
    } else {
        // No user is signed in
        sidebar_username.textContent = "Guest";
    }
});

const fonts = [
  "Arial",
  "Courier New",
  "Georgia",
  "Times New Roman",
  "Verdana",
  "Tahoma",
  "Roboto",
  "Open Sans",
  "Lato",
  "Montserrat",
  "Raleway",
  "Poppins",
  "Ubuntu",
  "Noto Sans",
  "Source Sans Pro",
  "Merriweather",
  "Playfair Display",
  "Oswald",
];

const fontSize = [
  "8px",
  "10px",
  "12px",
  "14px",
  "16px",
  "18px",
  "20px",
  "22px",
  "24px",
  "26px",
  "28px",
  "30px",
  "32px",
  "34px",
  "36px",
];

fonts.forEach((font) => {
  const option = document.createElement("option");
  option.value = font;
  option.textContent = font;
  fontSelector.appendChild(option);
});

fontSize.forEach((fontSize) => {
  const option = document.createElement("option");
  option.value = fontSize;
  option.textContent = fontSize;
  fontSizeSelector.appendChild(option);
});

function executeCommand(command, value) {
  document.execCommand(command, false, value);
}

fontSelector.addEventListener("change", () => {
  const selectedFont = fontSelector.value;
  executeCommand("fontName", selectedFont);
});

fontSizeSelector.addEventListener("change", () => {
  const selectedFontSize = fontSizeSelector.value;
  executeCommand("fontSize", selectedFontSize);
});

boldBtn.addEventListener("click", () => {
  executeCommand("bold");
});

highlightBtn.addEventListener("click", () => {
  executeCommand("backColor", "yellow");
});

italicBtn.addEventListener("click", () => {
  executeCommand("italic");
});

underlineBtn.addEventListener("click", () => {
  executeCommand("underline");
});

bulletpointBtn.addEventListener("click", () => {  
  executeCommand("insertUnorderedList");
});

linkBtn.addEventListener("click", () => {
  const url = prompt("Enter the URL:");
  if (url) {
    executeCommand("createLink", url);
  }
});