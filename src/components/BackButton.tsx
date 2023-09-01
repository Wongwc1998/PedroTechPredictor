"use client";
import { useRouter } from "next/navigation";

import React from "react";

function BackButton() {
  const { push } = useRouter();
  return (
    <button className="bg-sky-500 rounded-md py-2 text-slate-200 max-w-fit p-4" onClick={() => push("/")}>
      Back
    </button>
  );
}

export default BackButton;
