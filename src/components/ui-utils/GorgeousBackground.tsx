// components/GorgeousBackground.tsx

import React from "react";

interface GorgeousBackgroundProps {
  children: React.ReactNode;
}

const GorgeousBackground: React.FC<GorgeousBackgroundProps> = ({
  children,
}) => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 via-transparent  to-purple-900 opacity-20"></div>
      
      <div className="relative z-0">{children}</div>
    </div>
  );
};

export default GorgeousBackground;
