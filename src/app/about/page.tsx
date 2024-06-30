// pages/index.tsx

import React from "react";
import GorgeousBackground from "@/components/ui-utils/GorgeousBackground";

const Home: React.FC = () => {
  return (
    <GorgeousBackground>
      <div className="p-10 text-white">
        <h1 className="text-4xl font-bold">Hello World!</h1>
        <p>
          This is a gorgeous background component using Tailwind CSS and Next.js
          with TypeScript.
        </p>
      </div>
    </GorgeousBackground>
  );
};

export default Home;
