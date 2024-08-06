// // src/app/dashboard/page.tsx

// "use client";

// import { useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { logout } from "@/middleware/auth";
// import Dashboard from "@/components/ui/dashboard/Dashboard";

// const DashboardPage = () => {
//   const router = useRouter();

//   useEffect(() => {
//     const token = document.cookie
//       .split("; ")
//       .find((row) => row.startsWith("authToken="))
//       ?.split("=")[1];

//     if (!token) {
//       router.push("/auth/admin");
//     }
//   }, [router]);

//   const handleLogout = () => {
//     logout();
//   };

//   return (
//     <div>
//       <Dashboard />
//       <button onClick={handleLogout}>Logout</button>
//     </div>
//   );
// };

// export default DashboardPage;

import React from "react";

const page = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <p className="text-9xl">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi at
        repellat reiciendis nulla obcaecati. Tempore vitae tenetur eveniet,
        temporibus nobis voluptatum, veniam corrupti atque sequi distinctio
        nihil suscipit corporis nisi.
      </p>
    </div>
  );
};

export default page;
