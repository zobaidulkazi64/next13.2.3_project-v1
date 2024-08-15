"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface UserProfile {
  _id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: UserProfile | null;
  token: string | null;
  error: string | null;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Fetch the token from localStorage or cookies
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      setToken(savedToken);
      // Fetch user data if token exists
      fetchUserProfile(savedToken).catch((err) => setError(err.message));
    }
  }, []);

  const fetchUserProfile = async (token: string) => {
    try {
      const response = await fetch(
        "https://message-aether.onrender.com/api/user/profile",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch user profile: ${response.statusText}`);
      }

      const userData = await response.json();
      setUser(userData);
    } catch (error) {
      setError("Error fetching user profile");
      console.error("Error fetching user profile:", error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
    router.push("/auth/admin"); // Redirect to login page after logout
  };

  return (
    <AuthContext.Provider value={{ user, token, error, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
