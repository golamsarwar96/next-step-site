import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.init";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // console.log(user);
  //Observer Function
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  //Creating New User using email and password
  const createNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //SignIn with User
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUserProfile = (updatedData) => {
    setUser(updateProfile);
    return updateProfile(auth.currentUser, updatedData);
  };

  //password reset
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  const authInfo = {
    user,
    setUser,
    createNewUser,
    logOut,
    userLogin,
    loading,
    updateUserProfile,
    signInWithGoogle,
    resetPassword,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
