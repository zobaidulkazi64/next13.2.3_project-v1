import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";


const IconButtons: React.FC = () => {
  return (
    <div className="bg-white w-full h-auto py-8 flex items-center justify-center gap-4 flex-wrap">
      <button className="group transition-all duration-500 hover:-translate-y-2">
              {/* Icon 1 placeholder */}
              <ChevronLeftIcon className="w-8 h-8 group-hover:scale-110" />
      </button>
      <button className="group transition-all duration-500 hover:-translate-y-2">
        {/* Icon 2 placeholder */}
      </button>
      <button className="group transition-all duration-500 hover:-translate-y-2">
              {/* Icon 3 placeholder */}
              <ChevronRightIcon className="w-8 h-8 group-hover:scale-110" />
      </button>
      <button className="group transition-all duration-500 hover:-translate-y-2">
              {/* Icon 4 placeholder */}
              <ChevronRightIcon className="w-8 h-8 group-hover:scale-110" />
      </button>
    </div>
  );
};

export default IconButtons;
