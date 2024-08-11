"use client";

import React, { useState, useEffect } from "react";

const CookieNotice: React.FC = () => {
  const [showNotice, setShowNotice] = useState(false);

  useEffect(() => {
    // Check if the user has already made a decision about cookies
    const cookiesAccepted = localStorage.getItem("cookiesAccepted");
    if (!cookiesAccepted) {
      setShowNotice(true);
    }
  }, []);

  const fetchLocationData = async () => {
    try {
      const response = await fetch("https://ipapi.co/json/");
      const data = await response.json();
      return {
        ip: data.ip,
        location: `${data.city}, ${data.region}, ${data.country_name}`,
      };
    } catch (error) {
      console.error("Failed to fetch location data:", error);
      return { ip: "Unknown", location: "Unknown" };
    }
  };

  const handleUserAction = async (cookiesAccepted: boolean) => {
    const { ip, location } = await fetchLocationData();

    // Save the decision in localStorage
    localStorage.setItem("cookiesAccepted", String(cookiesAccepted));
    setShowNotice(false);

    // Send data to the backend
    await fetch("", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ip,
        location,
        cookiesAccepted,
      }),
    });
  };

  if (!showNotice) return null;

  console.log("showNotice", showNotice);

  return (
    <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 w-80 shadow-lg rounded-2xl p-6 flex flex-col space-y-4">
      <span className="text-black dark:text-white text-2xl font-semibold">
        🍪 Cookie Notice
      </span>
      <p className="text-black dark:text-white">
        We use cookies to ensure that we give you the best experience on our
        website.{" "}
        <a href="#" className="text-blue-600 underline">
          Read cookies policies
        </a>
        .
      </p>
      <a href="#" className="text-blue-600 text-sm">
        Manage preferences
      </a>
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => handleUserAction(false)}
          className="text-red-600 hover:text-white hover:bg-red-600 py-2 px-4 rounded-lg font-bold transition-all duration-300"
        >
          Decline
        </button>
        <button
          onClick={() => handleUserAction(true)}
          className="text-green-600 hover:text-white hover:bg-green-600 py-2 px-4 rounded-lg font-bold transition-all duration-300"
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default CookieNotice;
