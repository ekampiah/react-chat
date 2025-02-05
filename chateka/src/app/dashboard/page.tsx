"use client";

import { useFirebase } from "@/util/firebaseContext";
import { observer } from "mobx-react-lite";
import React from "react";

function Page() {
  const { auth } = useFirebase();

  return <div>Welcome, {auth.currentUser?.displayName}</div>;
}

export default observer(Page);
