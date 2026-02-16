"use client";

import { useEffect, useState } from "react";

export default function Dashboard() {
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setTotalUsers(data.length));
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-3xl mb-8">Dashboard</h1>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-[#18181C] p-6 rounded-xl">
          <h2 className="text-gray-400">Total Users</h2>
          <p className="text-3xl font-semibold">{totalUsers}</p>
        </div>

        <div className="bg-[#18181C] p-6 rounded-xl">
          <h2 className="text-gray-400">Companies</h2>
          <p className="text-3xl font-semibold">10</p>
        </div>

        <div className="bg-[#18181C] p-6 rounded-xl">
          <h2 className="text-gray-400">Active</h2>
          <p className="text-3xl font-semibold">8</p>
        </div>
      </div>
    </div>
  );
}
