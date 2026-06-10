"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    router.push("/dashboard");
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="w-[350px] rounded-lg bg-white p-6 shadow-lg">
        <h1 className="mb-5 text-center text-2xl font-bold text-blue-900">
          Login
        </h1>

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
          className="mb-2 w-full rounded border p-2 text-black"
        />

        <Link
  href="/forgot-password"
  className="mb-4 block text-right text-sm text-blue-500"
>
  Forgot Password?
</Link>

        <button
          onClick={handleLogin}
          className="w-full rounded bg-blue-500 p-2 text-white"
        >
          Login
        </button>
        <p className="mt-4 text-center text-sm text-red-500">
            Don&apos;t have an account?{" "}
            <Link
                href="/signup"
                className="text-blue-500"
            >
                Signup
            </Link>
        </p>
      </div>
    </div>
  );
}