"use client";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const { push } = useRouter();
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(inputValue);
    push(`/prediction/${inputValue}`);
  };
  return (
    <div className="bg-slate-100 flex justify-center items-center min-h-screen">
      <div className="text-slate-800   bg-slate-50 gap-3 font-bold  p-10 rounded-lg shadow-md">
        <h1 className="py-2">Enter Your Name</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Your Name"
            value={inputValue}
            className="text-slate-800 border border px-4 py-2"
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            className="bg-sky-500 rounded-md py-2 text-slate-200"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
