"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface UserData {
  role: string;
  username: string;
  email: string;
  // Add other fields as needed based on your API response
}

const Dashboard: React.FC = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        router.push("/auth/admin");
        setError("No token provided");
        return;
      }

      try {
        const response = await fetch(
          "https://message-aether.onrender.com/api/user/dashboard",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          if (response.status === 401) {
            setError("Unauthorized: Please log in again.");
          } else {
            setError("Failed to fetch data: " + response.statusText);
          }
          return;
        }

        const data = await response.json();
        setUserData(data);
      } catch (error) {
        setError("Failed to fetch data");
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return (
      <div className="text-center text-red-500 mt-10">
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col items-center justify-center mx-auto">
        <p className="text-xl mb-8 text-center">
          Welcome to your dashboard! Here is a summary of your profile.
        </p>
        {userData ? (
          <div className="text-center mt-8 p-6 bg-white shadow-lg rounded-lg border">
            <h2 className="text-3xl font-bold mb-2">{userData.username}</h2>
            <p className="text-lg text-gray-700">{userData.email}</p>
            <p className="text-lg text-gray-700">{userData.role}</p>
            {/* Display other user information as needed */}
          </div>
        ) : (
          <p className="text-center text-gray-500">Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
