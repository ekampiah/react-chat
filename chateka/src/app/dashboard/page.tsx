"use client";

import { useFirebase } from "@/util/firebaseContext";
import { useRouter } from "next/navigation";
import React from "react";

export default function Page() {
  const { auth } = useFirebase();
  const router = useRouter();

  if (!auth.currentUser) {
    router.push("/");
    return;
  }

  return <div>Welcome, {auth.currentUser.displayName}</div>;
}
