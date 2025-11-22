// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAPZAm0IknUmWSP3SLzeUkxHx495ezPZU",
  authDomain: "explore-email-password-a-4e46b.firebaseapp.com",
  projectId: "explore-email-password-a-4e46b",
  storageBucket: "explore-email-password-a-4e46b.firebasestorage.app",
  messagingSenderId: "673407439762",
  appId: "1:673407439762:web:b1427f8879f0027493a74b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);