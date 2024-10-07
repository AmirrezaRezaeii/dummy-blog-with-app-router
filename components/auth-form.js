"use client";

import { auth } from "@/actions/auth-action";
import { useFormState } from "react-dom";
import Link from "next/link";

export default function AuthForm({ mode }) {
  const [formState, formAction] = useFormState(auth.bind(null, mode), {});

  return (
    <div className="grid grid-cols-1 place-items-center mt-8">
      <form
        action={formAction}
        className="bg-slate-800 flex flex-col rounded-md p-8 gap-y-6"
      >
        <input
          type="text"
          name="username"
          required
          placeholder="username:"
          className="bg-slate-400 placeholder-white pl-2 py-1"
        />
        <input
          type="password"
          name="password"
          required
          placeholder="password:"
          className="bg-slate-400 placeholder-white pl-2 py-1"
        />
        <button className="bg-slate-100 hover:bg-slate-500">Submit</button>
        {mode === "login" && <Link href="/signup/?mode=signup" className="text-white">Signup if you already have an account</Link>}
        {mode === "signup" && <Link href="/signup/?mode=login" className="text-white">Login if you don't have any account</Link>}
      </form>
      {formState.errors && (
        <ul>
          {Object.keys(formState.errors).map((error) => (
            <li key={error}>{formState.errors[error]}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
