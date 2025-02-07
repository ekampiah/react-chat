"use client";
import React, { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

console.log(process.env.NEXT_PUBLIC_MESSAGE);

// Your Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};
console.log(firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app);

const provider = new GoogleAuthProvider();
provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

const signIn = () => signInWithPopup(auth, provider);

const FirebaseContext = createContext({
  app,
  auth,
  db,
  signIn,
});

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <FirebaseContext.Provider value={{ app, auth, db, signIn }}>
      {children}
    </FirebaseContext.Provider>
  );
};
