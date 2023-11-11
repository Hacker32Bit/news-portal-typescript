import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAx3mXBEwXXBQANHAPrpV_PfThNsvIVsqE",
  authDomain: "reactnewsportal.firebaseapp.com",
  projectId: "reactnewsportal",
  storageBucket: "reactnewsportal.appspot.com",
  messagingSenderId: "768198814436",
  appId: "1:768198814436:web:d7dce1d80dcd40e8ed1af1",
  measurementId: "G-FSXHBSC9YW"

};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { auth, app }