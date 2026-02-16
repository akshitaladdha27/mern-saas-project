"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Signup() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();

    if (email && password) {
      localStorage.setItem("token", "fake-jwt-token");
      router.push("/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center text-white">
      <form
        onSubmit={handleSignup}
        className="bg-[#18181C] p-10 rounded-2xl w-96 space-y-5"
      >
        <h2 className="text-2xl font-semibold text-center">Signup</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded-lg bg-[#111] border border-white/10"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded-lg bg-[#111] border border-white/10"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-linear-to-r from-pink-400 to-purple-500"
        >
          Signup
        </button>
      </form>
    </div>
  );
}
