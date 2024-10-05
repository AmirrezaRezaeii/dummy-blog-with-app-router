"use client"

import { signup } from "@/actions/auth-action";
import { useFormState } from "react-dom"


export default function LoginPage() {
  const [formState, formAction] = useFormState(signup, {})


  return (
    <div className="grid grid-cols-1 place-items-center mt-8">
      <form action={formAction} className="bg-slate-800 flex flex-col rounded-md p-8 gap-y-6">
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
      </form>
      {formState.errors && (
        <ul>
          {Object.keys(formState.errors).map((error) => <li key={error}>
            {formState.errors[error]}
          </li>)}
        </ul>
      )}
    </div>
  );
}
