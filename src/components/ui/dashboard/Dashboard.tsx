import React from "react";
import { logout } from "@/middleware/auth";

const Dashboard = () => {
  const handleLogout = () => {
    logout();
  };

  return (
    <div className="container m-auto">
      <div className="flex flex-col m-auto w-3/4 items-center justify-center">
        <p className="text text-9xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto tenetur
          temporibus possimus aut quae ex. Modi possimus ducimus vel soluta!
          Eligendi in molestias quasi numquam sit sed nihil similique. Ratione.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
