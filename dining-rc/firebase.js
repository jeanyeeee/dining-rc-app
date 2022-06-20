// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXF75FmXZsjGmhrTDOmHmgxrH49YC3_MY",
  authDomain: "diningrc.firebaseapp.com",
  projectId: "diningrc",
  storageBucket: "diningrc.appspot.com",
  messagingSenderId: "868785357317",
  appId: "1:868785357317:web:574e2ef2318653041a526c",
  measurementId: "G-JVZQW458WS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

