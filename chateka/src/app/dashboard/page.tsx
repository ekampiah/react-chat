"use client";

import { useFirebase } from "@/util/firebaseContext";
import React from "react";

export default function Page() {
  const { auth } = useFirebase();

  return <div>Welcome, {auth.currentUser?.displayName}</div>;
}
