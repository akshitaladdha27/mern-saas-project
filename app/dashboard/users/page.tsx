"use client";

import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  company: { name: string };
}

export default function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [filtered, setFiltered] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const usersPerPage = 5;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch users");
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setFiltered(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Something went wrong");
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let result = users.filter(
      (u) =>
        u.name.toLowerCase().includes(search.toLowerCase()) ||
        u.email.toLowerCase().includes(search.toLowerCase())
    );

    result.sort((a, b) =>
      sortOrder === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );

    setFiltered(result);
  }, [search, sortOrder, users]);

  const indexOfLast = currentPage * usersPerPage;
  const indexOfFirst = indexOfLast - usersPerPage;
  const currentUsers = filtered.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filtered.length / usersPerPage);

  if (loading)
    return <div className="p-10 text-white bg-black">Loading...</div>;

  if (error)
    return <div className="p-10 text-red-500 bg-black">{error}</div>;

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-3xl mb-6">Users</h1>

      <div className="flex gap-4 mb-6">
        <input
          placeholder="Search..."
          className="p-2 bg-[#111] border border-white/10 rounded"
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="p-2 bg-[#111] border border-white/10 rounded"
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="asc">A–Z</option>
          <option value="desc">Z–A</option>
        </select>
      </div>

      <div className="bg-[#18181C] rounded-xl overflow-hidden">
        {currentUsers.map((user) => (
          <div
            key={user.id}
            className="p-4 border-b border-white/10 cursor-pointer hover:bg-[#222]"
            onClick={() => setSelectedUser(user)}
          >
            <p className="font-semibold">{user.name}</p>
            <p className="text-gray-400 text-sm">{user.email}</p>
          </div>
        ))}
      </div>

      <div className="flex gap-2 mt-6">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            className="px-3 py-1 bg-[#222] rounded"
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {selectedUser && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
          <div className="bg-[#18181C] p-6 rounded-xl w-96">
            <h2 className="text-xl mb-2">{selectedUser.name}</h2>
            <p>Email: {selectedUser.email}</p>
            <p>Company: {selectedUser.company.name}</p>

            <button
              onClick={() => setSelectedUser(null)}
              className="mt-4 px-4 py-2 bg-red-500 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
