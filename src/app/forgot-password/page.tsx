"use client";

import { useState } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");

  const handleReset = () => {
    if (!email) {
      alert("Please enter email");
      return;
    }

    alert("Password reset link sent");
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="w-[350px] rounded-lg bg-white p-6 shadow-lg">
        <h1 className="mb-5 text-center text-2xl font-bold text-blue-900">
          Forgot Password
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

        <button
          onClick={handleReset}
          className="w-full rounded bg-blue-500 p-2 text-white"
        >
          Send Reset Link
        </button>
      </div>
    </div>
  );
}