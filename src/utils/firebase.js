import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhJbxi4SOsGxcuBp7GqDNis61HeN4694M",
  authDomain: "netflixgpt-new-e0712.firebaseapp.com",
  projectId: "netflixgpt-new-e0712",
  storageBucket: "netflixgpt-new-e0712.appspot.com",
  messagingSenderId: "362670050265",
  appId: "1:362670050265:web:d066ef897118a2923a67c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();