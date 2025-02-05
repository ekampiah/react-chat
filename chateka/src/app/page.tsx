"use client";

import { FirebaseProvider, useFirebase } from "@/util/firebaseContext";
import bg from "../../public/chateka_background1.png";
import continueWithGoogle from "../../public/continue_with_google.svg";
import React from "react";
import { GoogleAuthProvider } from "firebase/auth";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const { auth, signIn } = useFirebase();
  const router = useRouter();

  const signInAction = () => {
    signIn()
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential!.accessToken;
        // The signed-in user info.
        const user = result.user;

        if (user) {
          router.push("/dashboard");
        }
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  return (
    <FirebaseProvider>
      <div
        style={{
          backgroundImage: `url(${bg.src})`,
          width: "100vw",
          height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col items-center justify-center h-screen bg-white bg-opacity-50">
          <h1 className="text-black text-[5em] font-bold block">
            Welcome to ChatEKA
          </h1>
          <Image
            src={continueWithGoogle}
            className="cursor-pointer hover:opacity-80"
            onClick={signInAction}
            alt="Continue with Google"
          />
        </div>
      </div>
    </FirebaseProvider>
  );
}
