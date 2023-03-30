// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, signOut } from "@firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDK_tnVan82kk-7dp31gmQQGSbbEl_d4Qg",
  authDomain: "social13-0712.firebaseapp.com",
  projectId: "social13-0712",
  storageBucket: "social13-0712.appspot.com",
  messagingSenderId: "763193478927",
  appId: "1:763193478927:web:a2f438aa9d6a7bacc2787a",
  measurementId: "G-HWKJ1TSVPL",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const logOut = async () => {
  const auth = getAuth();
  await signOut(auth);
};
