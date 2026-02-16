"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setIsLoggedIn(true);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    router.push("/");
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src="/images/Group 127.png"
            alt="Squid Logo"
            width={132}
            height={34}
            className="h-8 w-auto object-contain"
            priority
          />
        </div>

        <div className="flex items-center gap-6 text-[14px]">

          <Link
            href="/"
            className="hidden md:block text-gray-400 hover:text-white transition"
          >
            Home
          </Link>

          {!isLoggedIn ? (
            <>
              <Link
                href="/login"
                className="text-gray-400 hover:text-white transition"
              >
                Login
              </Link>

              <Link
                href="/signup"
                className="text-gray-400 hover:text-white transition"
              >
                Signup
              </Link>
            </>
          ) : (
            <>
              <Link
                href="/dashboard"
                className="text-gray-400 hover:text-white transition"
              >
                Dashboard
              </Link>

              <button
                onClick={handleLogout}
                className="text-red-400 hover:text-red-500 transition"
              >
                Logout
              </button>
            </>
          )}

          <button
            className="px-6 py-2.5 rounded-[5px] font-medium text-white
            bg-linear-to-r from-[#FE8FB5] via-[#A68AFA] to-[#8B5CF6]
            hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-purple-500/10"
          >
            Download Template
          </button>

        </div>
      </div>
    </nav>
  );
}
