import { initializeApp } from "firebase/app";
import { getAuth
    ,signInWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut } from "firebase/auth";

    const firebaseConfig = {
        apiKey: "",
        authDomain: "",
        projectId: "",
        storageBucket: "",
        messagingSenderId: "",
        appId: ""
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
