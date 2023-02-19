import { initializeApp } from "firebase/app";
import {
  getAuth,
  getRedirectResult,
  GoogleAuthProvider,
  signInWithRedirect,
} from "firebase/auth";
import { useEffect } from "react";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "triptrip-a7794.firebaseapp.com",
  projectId: "triptrip-a7794",
  storageBucket: "triptrip-a7794.appspot.com",
  messagingSenderId: "454613313754",
  appId: "1:454613313754:web:701c3578b0c454d0e35de3",
  measurementId: "G-LVCZHTXJ0Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
const auth = getAuth();

function App() {
  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        console.log("DONE", result);
      })
      .catch(console.error);
  }, []);

  const handleSignIn = () => {
    signInWithRedirect(auth, provider).catch((error) => {
      console.error("ERR", error);
    });
  };

  return (
    <div>
      <button type="button" onClick={handleSignIn}>
        SignIn
      </button>
    </div>
  );
}

export default App;
