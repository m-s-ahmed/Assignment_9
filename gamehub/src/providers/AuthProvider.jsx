import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithCredential,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth/web-extension";

import React, { createContext, useEffect, useState } from "react";

//Create a context for use whole the application easily
export const AuthContext = createContext();

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  // useState is used to store and update data in a component and trigger re-render when the data changes.
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  //console.log(user,loading);

  //   Make a function for Logout
  const logout = () => {
    return signOut(auth);
  };

  //   For create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //  for update user
  const updateUser = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };

  //   for signin
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithCredential(auth, email, password);
  };
  const googleSignIn = () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  //useEffect ar kaj holo React component render hoyar por side-effects handle kora
  useEffect(() => {
    // Set an authentication state observer and get user data
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      //now ai full function ta ke useEffect theke return o korte hobe
    });
    return () => {
      unsubscribe();
    };
  }, []);

  //From here , we share our data
  const authData = {
    user,
    setUser,
    loading,
    setLoading,
    logout,
    signIn,
    updateUser,
    createUser,
    googleSignIn,
  };

  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
