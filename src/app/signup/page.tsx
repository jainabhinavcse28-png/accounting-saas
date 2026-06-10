"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSignup = () => {
    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    alert("Signup Successful");

    router.push("/login");
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="w-[350px] rounded-lg bg-white p-6 shadow-lg">
        <h1 className="mb-5 text-center text-2xl font-bold text-blue-900">
          Signup
        </h1>

        <label className="mb-1 block text-sm font-medium text-blue-900">
          Name
        </label>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mb-4 w-full rounded border p-2 text-black"
        />

        <label className="mb-1 block text-sm font-medium text-blue-900">
          Email
        </label>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-4 w-full rounded border p-2 text-black"
        />

        <label className="mb-1 block text-sm font-medium text-blue-900">
          Password
        </label>

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-4 w-full rounded border p-2 text-black"
        />

        <button
          onClick={handleSignup}
          className="w-full rounded bg-blue-500 p-2 text-white"
        >
          Signup
        </button>
        <p className="mt-4 text-center text-sm text-blue-900">
  Already have an account?{" "}
  <Link
    href="/login"
    className="text-blue-500"
  >
    Login
  </Link>
</p>
      </div>
    </div>
  );
}