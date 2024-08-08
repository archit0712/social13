// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, signOut } from "@firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: //api key,
  authDomain: //auth domain,
  projectId: //project id,
  storageBucket: //storage bucket,
  messagingSenderId: // messaging ID,
  appId: // app Id,
  measurementId: // measurement ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const logOut = async () => {
  const auth = getAuth();
  await signOut(auth);
};
