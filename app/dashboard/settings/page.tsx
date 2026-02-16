"use client";

import { useEffect, useState } from "react";

export default function Settings() {
  const [theme, setTheme] = useState("dark");
  const [name, setName] = useState("");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const savedName = localStorage.getItem("name");

    if (savedTheme) setTheme(savedTheme);
    if (savedName) setName(savedName);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme === "dark" ? "bg-black" : "bg-white";
  }, [theme]);

  const handleSave = () => {
    localStorage.setItem("name", name);
    alert("Settings Saved");
  };

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-3xl mb-6">Settings</h1>

      <div className="space-y-6 max-w-md">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          className="w-full p-3 bg-[#111] border border-white/10 rounded"
        />

        <div>
          <label className="mr-4">Theme:</label>
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="p-2 bg-[#111] border border-white/10 rounded"
          >
            <option value="dark">Dark</option>
            <option value="light">Light</option>
          </select>
        </div>

        <button
          onClick={handleSave}
          className="px-6 py-2 bg-purple-500 rounded"
        >
          Save
        </button>
      </div>
    </div>
  );
}
