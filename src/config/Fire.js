import { initializeApp } from "firebase/app";
import { getAuth
    ,signInWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut } from "firebase/auth";

    const firebaseConfig = {
        apiKey: "AIzaSyAxTg7yM316KqTvKFU6_bxmbhm1fTQ3dbI",
        authDomain: "toff-database.firebaseapp.com",
        projectId: "toff-database",
        storageBucket: "toff-database.appspot.com",
        messagingSenderId: "759119268434",
        appId: "1:759119268434:web:95e6aa6773c276bc042d8b"
      };
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      const auth = getAuth(app);

const logInWithEmailAndPassword = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const sendPasswordReset = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset link sent!");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };




const logout = () => {
    signOut(auth);
}

export {auth,
    logInWithEmailAndPassword,
    sendPasswordReset,
    logout
}
