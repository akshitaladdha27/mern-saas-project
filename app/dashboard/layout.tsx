"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-black text-white">

      <nav className="border-b border-white/10 px-10 py-5 flex justify-between items-center">
        <div className="flex gap-8 text-sm text-gray-400">

          <Link href="/dashboard" className="hover:text-white transition">
            Dashboard
          </Link>

          <Link href="/dashboard/users" className="hover:text-white transition">
            Users
          </Link>

          <Link href="/dashboard/settings" className="hover:text-white transition">
            Settings
          </Link>

        </div>

        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 rounded-lg text-sm"
        >
          Logout
        </button>
      </nav>

      <div className="p-10">
        {children}
      </div>

    </div>
  );
}
