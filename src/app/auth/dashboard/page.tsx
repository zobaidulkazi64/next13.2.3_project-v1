"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { logout } from "@/middleware/auth";

const Dashboard = () => {
  const router = useRouter();

  useEffect(() => {
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("authToken="))
      ?.split("=")[1];

    if (!token) {
      router.push("/auth/admin");
    }
  }, [router]);

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      <h1>Dashboard</h1>

      <p>You are logged in</p>

      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
