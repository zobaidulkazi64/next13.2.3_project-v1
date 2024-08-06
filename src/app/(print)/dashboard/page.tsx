// src/app/dashboard/page.tsx

"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { logout } from "@/middleware/auth";
import Dashboard from "@/components/ui/dashboard/Dashboard";

const DashboardPage = () => {
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
      <Dashboard />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default DashboardPage;
