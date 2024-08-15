"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// Define the type for user profile data
interface UserProfile {
  id: string;
  role: string;
  email: string;
  username: string;
}

// Fetch user profile data from the API
const fetchUserProfile = async (token: string): Promise<UserProfile> => {
  try {
    const response = await fetch(
      "https://message-aether.onrender.com/api/user/profile",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      const errorText = await response.text(); // Get the error text for debugging
      throw new Error(
        `Failed to fetch user profile: ${response.status} ${response.statusText} - ${errorText}`
      );
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching user profile:", error);
    throw error; // Re-throw the error for handling in the component
  }
};

// Profile page component
const ProfilePage: React.FC = () => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter(); // Use useRouter for redirection

  useEffect(() => {
    // Fetch the token from localStorage and then fetch user profile
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/auth/admin");
      setError("No token provided");
      return;
    }

    fetchUserProfile(token)
      .then((data) => setUser(data))
      .catch((err) => setError(err.message));
  }, [router]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl mb-4">Profile Page</h1>
      {error ? (
        <div className="text-red-500">Error fetching user data: {error}</div>
      ) : user ? (
        <div className="bg-white shadow-md rounded-lg p-6 ml-40">
          <h2 className="text-2xl mb-2">User Profile</h2>
          <p>
            <strong>ID:</strong> {user.id}
          </p>
          <p>
            <strong>Username:</strong> {user.username}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Role:</strong> {user.role}
          </p>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default ProfilePage;
